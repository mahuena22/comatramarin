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

## Recent Changes
- Created package.json for Node.js project structure
- Configured COMATRA Server workflow for port 5000
- Set up autoscale deployment configuration
- Verified all functionality working correctly

## Deployment Configuration
- Target: Autoscale (stateless website)
- Command: `node server.js`
- Port: 5000 (frontend accessible)
- No build step required (static files)