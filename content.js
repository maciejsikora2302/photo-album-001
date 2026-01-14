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
        content: 'First day was for getting lost in the city and finding its hidden gems. But not without visiting the most iconic places, starting from Casco Viejo.'
    },
    {
        type: 'split',
        layout: 'text-left',
        text: 'The distinct red trams and green bike systems add a pop of color to the cloudy morning. The city is preparing for the holidays.',
        photo: {
            url: 'images/day1/DSC07801.jpg', // The red Christmas structure
            caption: 'Holiday preparations near the bridge'
        }
    },
    {
        type: 'row',
        photos: [
            { url: 'images/day1/DSC07812.jpg', caption: 'Bilbaobizi Bikes' },
            { url: 'images/day1/DSC07818.jpg', caption: 'The Green Tram' },
        ]
    },
    {
        type: 'row',
        wide: true,
        photos: [
            { url: 'images/day1/DSC07836.jpg', caption: 'The Red Tram' },
            { url: 'images/day1/DSC07796.jpg', caption: 'The Bus' },
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
            { url: 'images/day1/DSC07827.jpg', caption: 'Narrow streets' },
            { url: 'images/day1/DSC07842.jpg', caption: 'Vertical layers of the city' },
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07825.jpg', // Vertical street shot
        wide: true,
        align: 'center',
        caption: 'River views'
    },
    {
        type: 'row',
        photos: [
            { url: 'images/day1/DSC07876.jpg', caption: 'Street Art' },
            { url: 'images/day1/DSC07875.jpg', caption: 'Urban textures' }
        ]
    },

    // --- PART 3: THE GUGGENHEIM AREA ---
    {
        type: 'split',
        layout: 'text-right',
        text: 'Every corner of the city has its own unique character.',
        photo: {
            url: 'images/day1/DSC07871.jpg', // The Graffiti
            caption: 'The Graffiti'
        }
    },
    {
        type: 'row',
        wide: true,
        normalize: 'min',
        photos: [
            { url: 'images/day1/DSC07857.jpg', caption: 'Modern lines' },
            { url: 'images/day1/DSC07858.jpg', caption: 'River bend', wide: true },
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07882.jpg', // The Guggenheim
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
            { url: 'images/day1/DSC07895.jpg', caption: 'Blue hour streets' }
        ]
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07891.jpg', // The meat display/fridge
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
            { url: 'images/day1/DSC07918.jpg', caption: 'Blue illumination' },
            { url: 'images/day1/DSC07916.jpg', caption: 'Full range of colors!' },
            { url: 'images/day1/DSC07919.jpg', caption: 'Magenta illumination' }
        ]
    },
    {
        type: 'split',
        layout: 'text-left',
        text: 'The architecture around the Iberdrola Tower looks incredibly futuristic at night.',
        photo: {
            url: 'images/day1/DSC07982.jpg', // The Tower at night
            caption: 'Iberdrola Tower'
        }
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07974.jpg',
        align: 'center',
        caption: 'Street lights'
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07988.jpg',
        align: 'center',
        caption: 'Night vibe'
    },
    {
        type: 'photo',
        url: 'images/day1/DSC07987.jpg',
        align: 'center',
        caption: 'Reflections'
    },
];

// Export for the script to use
window.bookContent = bookContent;
