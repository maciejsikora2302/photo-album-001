/**
 * PHOTO BOOK CONTENT
 * 
 * Add your content here. The app will render it in order.
 * 
 * TYPES:
 * - 'chapter': Starts a new section. { title, description }
 * - 'text': A paragraph block. { content }
 * - 'photo': A single photo. 
 *      { url, caption, align } 
 *      align: 'left' | 'right' | 'center' (optional, auto-alternates if missing)
 * - 'row': Multiple photos side-by-side. 
 *      { photos: [ {url, caption} ... ] }
 * - 'split': Text and photo side-by-side. 
 *      { text, photo: {url, caption}, layout: 'text-left' | 'text-right' }
 */

const bookContent = [
    // --- PART 1: DAYTIME EXPLORATION ---
    {
        type: 'chapter',
        title: 'Bilbao: Day One',
        description: 'Exploring the Nervión river banks and the Casco Viejo under the autumn sky.'
    },
    {
        type: 'text',
        content: 'We started the day walking along the river. The city feels distinct immediately—the contrast between the classic architecture and the modern infrastructure is striking.'
    },
    {
        type: 'split',
        layout: 'text-left',
        text: 'The distinct red trams and green bike systems add a pop of color to the cloudy morning. The city is preparing for the holidays.',
        photo: {
            url: 'images/day1/DSC07801.JPG', // The red Christmas structure
            caption: 'Holiday preparations near the bridge'
        }
    },
    {
        type: 'row',
        photos: [
            { url: 'images/day1/DSC07812.JPG', caption: 'Bilbaobizi Bikes' },
            { url: 'images/day1/DSC07818.JPG', caption: 'The Green Tram' },
        ]
    },
    {
        type: 'row',
        wide: true,
        photos: [
            { url: 'images/day1/DSC07836.JPG', caption: 'The Red Tram' },
            { url: 'images/day1/DSC07796.JPG', caption: 'The Bus' },
        ]
    },

    // --- PART 2: THE OLD TOWN (CASCO VIEJO) ---
    {
        type: 'text',
        content: 'Heading into the narrower streets of the Old Town. The wet pavement from the rain gave the stone streets a beautiful, reflective texture.'
    },
    {
        type: 'row',
        normalize: 'max',
        photos: [
            { url: 'images/day1/DSC07827.JPG', caption: 'Narrow streets' },
            { url: 'images/day1/DSC07842.JPG', caption: 'Vertical layers of the city' },
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07825.JPG', // Vertical street shot
        align: 'center',
        caption: 'River views'
    },
    {
        type: 'row',
        photos: [
            { url: 'images/day1/DSC07876.JPG', caption: 'Street Art' },
            { url: 'images/day1/DSC07875.JPG', caption: 'Urban textures' }
        ]
    },

    // --- PART 3: THE GUGGENHEIM AREA ---
    {
        type: 'split',
        layout: 'text-right',
        text: 'Every corner of the city has its own unique character.',
        photo: {
            url: 'images/day1/DSC07871.JPG', // The Graffiti
            caption: 'The Graffiti'
        }
    },
    {
        type: 'row',
        wide: true,
        normalize: 'min',
        photos: [
            { url: 'images/day1/DSC07857.JPG', caption: 'Modern lines' },
            { url: 'images/day1/DSC07858.JPG', caption: 'River bend', wide: true },
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07882.JPG', // The Guggenheim
        wide: true,
        align: 'center',
        caption: 'Three photos in one'
    },

    // --- PART 4: TWILIGHT & EVENING ---
    {
        type: 'chapter',
        title: 'Blue Hour to Night',
        description: 'As the sun sets, the city transforms with vibrant artificial lights.'
    },
    {
        type: 'text',
        content: 'The "Blue Hour" provided a perfect mix of natural sky light and the warmth of the street lamps turning on.'
    },
    {
        type: 'row',
        photos: [
            { url: 'images/day1/DSC07895.JPG', caption: 'Blue hour streets' }
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07891.JPG', // The meat display/fridge
        align: 'center',
        caption: 'Local culinary window shopping'
    },

    // --- PART 5: NIGHT ILLUMINATION ---
    {
        type: 'text',
        content: 'Total darkness brings out the light installations. The Christmas trees we saw earlier are now fully illuminated in changing colors.'
    },
    {
        type: 'row',
        wide: true,
        photos: [
            { url: 'images/day1/DSC07918.JPG', caption: 'Blue illumination' },
            { url: 'images/day1/DSC07916.JPG', caption: 'Full range of colors!' },
            { url: 'images/day1/DSC07919.JPG', caption: 'Magenta illumination' }
        ]
    },
    {
        type: 'split',
        layout: 'text-left',
        text: 'The architecture around the Iberdrola Tower looks incredibly futuristic at night.',
        photo: {
            url: 'images/day1/DSC07982.JPG', // The Tower at night
            caption: 'Iberdrola Tower'
        }
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07974.JPG',
        align: 'center',
        caption: 'Street lights'
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07988.JPG',
        align: 'center',
        caption: 'Night vibe'
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07987.JPG',
        align: 'center',
        caption: 'Reflections'
    },
];

// Export for the script to use
window.bookContent = bookContent;
