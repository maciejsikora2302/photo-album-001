document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('book-container');

    if (!window.bookContent) {
        container.innerHTML = '<p>Error: Content not found. Make sure content.js is loaded.</p>';
        return;
    }

    let photoCounter = 0; // To track parity for alternating layout

    // Helper to create photo element
    const createPhotoElement = (item) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-wrapper';

        // Handle Alignment Override or Alternating Default
        if (item.align) {
            wrapper.classList.add(`align-${item.align}`);
        } else {
            // Default alternating if not specified
        }

        if (item.wide) {
            wrapper.classList.add('is-wide');
        }

        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.caption || 'Photo';
        img.className = 'photo';
        img.loading = 'lazy';

        wrapper.appendChild(img);

        if (item.caption) {
            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = item.caption;
            wrapper.appendChild(caption);
        }
        return wrapper;
    };

    // 0. Render Table of Contents
    const renderTableOfContents = (content) => {
        const tocContainer = document.getElementById('toc-container');
        if (!tocContainer) return;

        const title = document.createElement('h2');
        title.id = 'toc-title';
        title.textContent = 'Chapters';
        tocContainer.appendChild(title);

        const list = document.createElement('ul');
        list.className = 'toc-list';

        let chapterCount = 0;

        content.forEach((item, index) => {
            if (item.type === 'chapter') {
                const li = document.createElement('li');
                li.className = 'toc-item';

                const link = document.createElement('a');
                link.className = 'toc-link';
                link.textContent = item.title;

                // We'll generate the ID here same as we do in the render loop
                const chapterId = `chapter-${index}`;
                link.onclick = () => {
                    document.getElementById(chapterId)?.scrollIntoView({ behavior: 'smooth' });
                };

                li.appendChild(link);
                list.appendChild(li);
                chapterCount++;
            }
        });

        if (chapterCount > 0) {
            tocContainer.appendChild(list);
        } else {
            tocContainer.style.display = 'none';
        }
    };

    renderTableOfContents(window.bookContent);

    // 1. Render Content
    window.bookContent.forEach((item, index) => {
        let element;

        if (item.type === 'chapter') {
            element = document.createElement('div');
            element.className = 'chapter-wrapper fade-in-section';
            element.id = `chapter-${index}`; // Assign ID for ToC linking

            const title = document.createElement('h2');
            title.className = 'chapter-title';
            title.textContent = item.title;
            element.appendChild(title);

            if (item.description) {
                const desc = document.createElement('p');
                desc.style.textAlign = 'center';
                desc.style.color = '#888';
                desc.style.marginBottom = '2rem';
                desc.textContent = item.description;
                element.appendChild(desc);
            }

        } else if (item.type === 'text') {
            element = document.createElement('p');
            element.className = 'text-block fade-in-section';
            element.textContent = item.content;

        } else if (item.type === 'photo') {
            element = createPhotoElement(item);
            element.classList.add('fade-in-section');

            // Apply top-level alignment logic for standalone photos
            if (!item.align) {
                const alignClass = photoCounter % 2 === 0 ? 'align-left' : 'align-right';
                element.classList.add(alignClass);
                photoCounter++;
            } else {
                element.classList.add(`align-${item.align}`);
                // Should explicit alignment affect the counter? 
                // Let's say yes, to keep the flow "feeling" alternating.
                photoCounter++;
            }

        } else if (item.type === 'row') {
            // Multiple photos in a row
            element = document.createElement('div');
            element.className = 'photo-row fade-in-section';

            const rowImages = [];

            item.photos.forEach(photoItem => {
                const photoWrapper = createPhotoElement(photoItem);
                element.appendChild(photoWrapper);
                const img = photoWrapper.querySelector('img');
                if (img) rowImages.push(img);
            });

            // Logic to normalize height if requested
            if (item.normalize && rowImages.length > 0) {
                // Wait for all images to load to get natural dimensions or rendered dimensions
                // Since they are not in DOM fully rendered with layout yet, strict measurement might be tricky
                // but we can trust naturalHeight or wait for load.

                const normalizeImages = () => {
                    const heights = rowImages.map(img => img.getBoundingClientRect().height || img.naturalHeight);

                    // Filter out 0s just in case
                    const validHeights = heights.filter(h => h > 0);
                    if (validHeights.length === 0) return;

                    let targetHeight;
                    if (item.normalize === 'min') {
                        targetHeight = Math.min(...validHeights);
                    } else if (item.normalize === 'max') {
                        targetHeight = Math.max(...validHeights);
                    } else if (item.normalize === 'avg') {
                        const sum = validHeights.reduce((a, b) => a + b, 0);
                        targetHeight = sum / validHeights.length;
                    } else {
                        // Default to avg if unknown string
                        const sum = validHeights.reduce((a, b) => a + b, 0);
                        targetHeight = sum / validHeights.length;
                    }

                    rowImages.forEach(img => {
                        img.style.height = `${targetHeight}px`;
                        img.style.objectFit = 'cover';
                        img.style.width = '100%';
                    });
                };

                // Check if already loaded (cached)
                let loadedCount = 0;
                const checkAllLoaded = () => {
                    loadedCount++;
                    if (loadedCount === rowImages.length) {
                        // All loaded, but we might need a tick for layout to be stable if we depend on clientRect
                        // If we use naturalHeight calculation, we don't need layout. 
                        // But actual on-screen height depends on width distribution.
                        // Best is to let them render naturaly, then snap them.
                        requestAnimationFrame(normalizeImages);
                    }
                };

                rowImages.forEach(img => {
                    if (img.complete) {
                        checkAllLoaded();
                    } else {
                        img.onload = checkAllLoaded;
                        img.onerror = checkAllLoaded; // Proceed anyway
                    }
                });

                // Fallback: recalculate on window resize as widths might change -> heights change
                window.addEventListener('resize', () => {
                    // Reset styles to limits to get fresh natural flow readings? 
                    // Or just re-apply based on current widths?
                    // Simpler: Just re-run normalization logic if we want them to stay synced.
                    // But if we fixed height in PX, they won't respond to width changes naturally.
                    // A better approach for responsive: use aspect-ratio or re-calc. 
                    // For now, let's keep it simple: Re-calc on resize.
                    rowImages.forEach(img => { img.style.height = ''; }); // Reset
                    requestAnimationFrame(normalizeImages);
                });
            }

        } else if (item.type === 'split') {
            // Photo + Text side by side
            element = document.createElement('div');
            element.className = `split-layout fade-in-section`;
            if (item.layout === 'text-left') {
                element.classList.add('text-left');
            }

            const textEl = document.createElement('p');
            textEl.className = 'text-block';
            textEl.textContent = item.text;

            const photoEl = createPhotoElement(item.photo);
            // reset photo wrapper margins/alignment for grid
            photoEl.classList.remove('align-left', 'align-right', 'align-center');
            photoEl.style.margin = '0';

            element.appendChild(textEl);
            element.appendChild(photoEl);
        }

        if (element) {
            if (item.wide) {
                element.classList.add('is-wide');
            }
            container.appendChild(element);
        }
    });

    // 2. Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
