# Virgin Active Paya Lebar - Coach Profiles Landing Page

A professional landing page showcasing coach profiles for Virgin Active Paya Lebar, featuring filtering by fitness goals and detailed coach information.

## Features

✨ **Core Features**
- **Coach Profile Cards**: Display all coaches with profile pictures, names, specializations, and key info
- **Interactive Filtering**: Filter coaches by fitness goals (Weight Loss, Strength, Cardio, Flexibility, Nutrition, Sports Performance)
- **Detailed Profiles**: Click on any coach to view their full profile with bio, certifications, experience, and contact info
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modal Popup**: Beautiful modal overlay for viewing detailed coach information

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No dependencies required
- **Responsive Design**: Mobile-first approach

## File Structure

```
Virgin-Active-Coaches/
├── index.html          # Main HTML file with page structure
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── data.js             # Coach profiles database
└── README.md           # This file
```

## How to Use

### 1. Setup
- Clone this repository
- Open `index.html` in your web browser

### 2. Add/Edit Coaches
Edit the `data.js` file to add or modify coach profiles:

```javascript
{
    id: 1,
    name: "Coach Name",
    specialty: "Specialization",
    bio: "Bio text...",
    goals: ["weight-loss", "strength"],  // From available goals
    image: "URL_to_profile_image",
    experience: "X+ years",
    certifications: ["Cert1", "Cert2"],
    email: "coach@email.com",
    phone: "+65 1234 5678"
}
```

### 3. Available Goal Categories
- `weight-loss` - Weight Loss
- `strength` - Strength Training
- `cardio` - Cardio & Endurance
- `flexibility` - Flexibility & Mobility
- `nutrition` - Nutrition
- `sports` - Sports Performance

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d32f2f;      /* Virgin Active red */
    --secondary-color: #1976d2;    /* Secondary blue */
    --light-gray: #f5f5f5;
    --dark-gray: #333;
}
```

### Layout
- Modify `grid-template-columns` in `.coaches-grid` to change card columns
- Adjust padding and margins for spacing
- Modify breakpoints in media queries for responsive behavior

### Styling
- Update button colors, shadows, and hover effects
- Modify modal animations
- Customize card hover animations

## Responsive Breakpoints

- **Large screens** (1200px+): 4-5 coaches per row
- **Tablets** (768px-1199px): 2-3 coaches per row
- **Mobile** (480px-767px): 1-2 coaches per row
- **Small phones** (<480px): 1 coach per row

## Features in Detail

### Filter System
- Click filter buttons to show coaches with specific goal specializations
- "All Coaches" button resets filters
- Active filter is highlighted
- Shows empty state if no coaches match filter

### Coach Cards
- Profile picture with zoom animation on hover
- Key information at a glance
- "Click to view full profile" hint
- Smooth elevation effect on hover

### Detailed Profile Modal
- Full-size profile image
- Complete bio and description
- List of specializations with visual tags
- Years of experience and certifications
- Contact information (email and phone)
- Close by clicking X, outside modal, or pressing Escape

## Future Enhancements

- [ ] Backend integration for dynamic coach data
- [ ] Booking system integration
- [ ] Testimonials/reviews section
- [ ] Search functionality
- [ ] Sort by experience or specialization
- [ ] Social media links
- [ ] Available appointment slots
- [ ] Rate/review system

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

To add new coaches or features:
1. Edit `data.js` to add coach profiles
2. Update `styles.css` for any styling changes
3. Modify `script.js` for functionality enhancements

## Support

For questions or issues, please open a GitHub issue on this repository.
