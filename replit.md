# COMATRA FISH MARINE Website

## Overview
A complete website for COMATRA FISH MARINE, a sustainable aquaculture and fishing company operating in West Africa (Côte d'Ivoire, Benin, Togo). The site showcases their services, products, agency locations, and contact information.

## Project Architecture
- **Frontend**: Vanilla HTML, CSS, JavaScript (no framework)
- **Backend**: Node.js static file server
- **Deployment**: Autoscale (stateless website)
- **Port**: 5000 (configured for Replit)

## Key Features
- Responsive design with modern UI/UX
- French language content
- Company branding with blue color scheme
- Contact form with validation
- Image gallery with auto-scroll
- Mobile-friendly navigation
- Smooth scrolling and animations

## File Structure
```
├── index.html          # Main homepage
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript interactions
├── server.js           # Node.js static server
├── package.json        # Node.js configuration
└── attached_assets/    # Project assets
```

## Development Setup
- Server runs on http://0.0.0.0:5000
- Uses Node.js 20+ runtime
- No external dependencies (vanilla JavaScript)
- Configured for Replit proxy/iframe environment

## Recent Changes (October 2025)

### Products Page (produits.html)
- Added extensive photo gallery with 30 images (matching home page style)
- Removed double bullet points from service lists
- Enhanced responsive design
- **Gallery vertical scrolling**: Changed from horizontal to vertical infinite scroll animation
- **Infinite scroll**: Properly implemented seamless loop with 15 original + 15 duplicate images
- **Mobile icon centering**: Card and service icons are now centered on mobile devices

### Contact Page (contact.html)
- Styled submit button with gradient background and hover effects
- Updated contact information to display France headquarters
- Added France administrative headquarters to agencies section
- Transformed FAQ section into interactive accordions with smooth animations

### Home Page (index.html)
- Removed African universities from partners section (Université de Côte d'Ivoire, Université du Bénin, Université du Togo)
- Transformed partners section from grid layout to descriptive paragraph format
- Enhanced partner presentation with professional text highlighting Université de Montpellier, IRD Montpellier, and INRA

### Technical Updates
- Added FAQ accordion JavaScript functionality in script.js
- Enhanced CSS with accordion animations and submit button styling
- Improved overall responsive design across all pages
- Fixed gallery animation calculations for seamless vertical infinite scroll
- Added mobile-specific CSS for centered icons on cards and services

## Deployment Configuration
- Target: Autoscale (stateless website)
- Command: `node server.js`
- Port: 5000 (frontend accessible)
- No build step required (static files)