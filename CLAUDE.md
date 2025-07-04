# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page website for OPTIVEK, a Brazilian company specializing in automation and data analysis solutions. The project serves as a portfolio and product showcase for two main products:

1. **AppMacro Professional** - Desktop automation software for Windows
2. **Dinamiky V0.2** - Advanced financial spreadsheet system for Google Sheets

## Development Commands

```bash
# Development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Architecture

### Tech Stack
- **Frontend**: React 19 with Vite
- **Styling**: TailwindCSS 4.1.8 with custom gradients
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.6.3
- **Deployment**: Netlify (configured via public/netlify.toml)

### Key Directories
- `src/pages/` - Main page components for different product landings
- `src/components/` - Reusable UI components (modals, image viewers)
- `public/data/` - JSON configuration and product data
- `public/images/` - Static assets including logos and QR codes

### Page Structure
- `/` - Main OPTIVEK landing page (`LandingPage.jsx`)
- `/macrosuite` - AppMacro Professional product page (`AppMacroPage.jsx`)  
- `/dinamiky` - Dinamiky spreadsheet product page (`DinamikyPage.jsx`)

### Data Configuration
- `public/data/config.json` - Company info, contact details, payment QR codes, availability schedule
- `public/data/products.json` - Product catalog with pricing, features, and metadata
- `public/data/productsInactives.json` - Archived/inactive products

## Design System

### Color Palette
- **Primary**: Cyan (cyan-400, cyan-500)
- **Secondary**: Blue (blue-400, blue-500) 
- **Accent**: Green (green-400, green-500)
- **Background**: Black for dark mode, white for light mode
- **Gradients**: Extensive use of cyan-to-blue and green-to-cyan gradients

### Theme Implementation
- Dark mode is the default and preferred theme
- Theme state managed in localStorage
- Responsive design with mobile-first approach
- Animated elements using custom CSS animations (float, pulse-slow)

### Component Patterns
- Heavy use of conditional styling based on `darkMode` state
- Consistent hover effects with scale transforms
- Gradient borders and backgrounds for visual emphasis
- Icon-driven feature sections with lucide-react icons

## Business Context

### Company Profile
- **OPTIVEK** - Automation and data analysis solutions
- **Founder**: Pedro Henrique Sauthier (Computer Science student at UTFPR)
- **Location**: Pato Branco, Paraná, Brazil
- **Focus**: Helping professionals eliminate repetitive tasks

### Product Positioning
- **AppMacro**: Professional Windows automation tool (R$ 35,90)
- **Dinamiky**: Google Sheets financial management system (R$ 19,90) 
- **Target Market**: Small to medium businesses and financial professionals

### Availability Schedule
- Weekdays: 18:00-23:00 (Brazil time)
- Saturday: 09:00-17:00
- Sunday: Unavailable

## Development Guidelines

### Code Style
- Functional React components with hooks
- Descriptive component and variable names
- Extensive use of conditional styling for dark/light modes
- Complex responsive grid layouts for product showcases

### Content Management
- Product data is JSON-driven for easy updates
- Payment QR codes and contact info centralized in config.json
- Product images hosted on external CDN (imgur.com)

### Performance Considerations
- React 19 for latest optimizations
- Vite for fast development builds
- TailwindCSS for minimal CSS output
- Image optimization through external CDN

### Responsive Breakpoints
- Mobile-first design approach
- Breakpoints: sm, md, lg, xl following TailwindCSS conventions
- Complex grid layouts that adapt across screen sizes

## Special Features

### Dynamic Content
- Real-time availability status based on business hours
- Live countdown timers for limited offers
- Interactive chat widget with predefined responses
- Modal systems for image galleries and product details

### Brazilian Market Adaptations
- All content in Portuguese
- Brazilian Real (BRL) pricing
- WhatsApp integration for customer support
- PIX payment method QR codes

### SEO & Marketing
- Structured product data for better discovery
- Social proof elements (testimonials, case studies)
- Conversion-focused landing page design
- Clear call-to-action buttons throughout

## Future Expansion Plans

Based on GEMINI.md, the company plans to expand into:
- E-commerce platform integration
- Physical products (smart outlets)
- Consultancy services
- Marketing automation systems
- Advanced CRM integration

This codebase serves as the foundation for OPTIVEK's digital presence and product marketing strategy.