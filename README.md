# Interactive Photo Book

A beautiful, data-driven interactive photo book template with dark mode, scroll animations, and meaningful layouts.

## How it Works
This project uses a simple structure:
- **`index.html`**: The main page. Open this file in your browser to view the book.
- **`script.js`**: Handles the logic, rendering elements, and scroll animations.
- **`style.css`**: Contains all the design rules, dark mode colors, and typography.
- **`content.js`**: **This is where your magic happens.** It contains all the photos, text, and structure of your book.
- **Table of Contents**: A navigation menu is automatically generated at the top based on your 'chapter' items.

## How to Add Content
You do not need to edit HTML. All content is managed in `content.js`.
The `bookContent` array contains a list of items that will be shown in order.

### Available Content Types

#### 1. Chapter Title
Creates a large section heading.
```javascript
{
    type: 'chapter',
    title: 'Summer 2025',
    description: 'A trip to remember.'
}
```

#### 2. Text Paragraph
Adds a block of text.
```javascript
{
    type: 'text',
    content: 'We arrived early in the morning...'
}
```

#### 3. Single Photo
Adds a photo. By default, single photos will alternate alignment (left/right).
```javascript
{
    type: 'photo',
    url: 'images/photo1.jpg',
    caption: 'Optional caption here'
}
```
**Forcing Alignment:**
You can force a photo to be center, left, or right aligned.
```javascript
{
    type: 'photo',
    url: 'images/photo2.jpg',
    align: 'center' // 'left', 'right', or 'center'
}
```

#### 4. Stacked Row (Multi-Photo)
Displays multiple photos in a single horizontal row. Great for related shots.
**Image Normalization:** You can add `normalize: 'min' | 'max' | 'avg'` to force all images in the row to the same height.
```javascript
{
    type: 'row',
    normalize: 'avg', // Optional. Forces uniform height based on average of images.
    photos: [
        { url: 'images/a.jpg', caption: 'Left' },
        { url: 'images/b.jpg', caption: 'Right' }
    ]
}
```

#### 5. Split Component (Photo + Text)
Displays text on one side and a photo on the other.
```javascript
{
    type: 'split',
    layout: 'text-left', // Text on left, Photo on right
    text: 'This specific moment was magical.',
    photo: {
        url: 'images/magic.jpg',
        caption: 'The magic moment'
    }
}
```

## Tips
- **Images**: You can use local paths (e.g., `images/my-pic.jpg`) or web URLs.
- **Order**: The book renders in the exact order of the array. Rearrange items by moving them up or down in the list.
- **Customization**: If you want to change colors or fonts, edit `style.css`.
