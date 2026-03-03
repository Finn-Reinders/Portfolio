# Test-Driven Development (TDD) Plan for Portfolio Project

## 1. Overview
This document outlines a TDD approach for the portfolio project, which is a React-based web application. The project consists of multiple components, pages, and supporting data/assets. The goal is to ensure robust, maintainable, and well-tested code.

## 2. Main Features & Components
- **Pages**: Home, Contact, Project
- **Core Components**: App, Navbar, Footer, Loader, Hero, Projects, ScrollIndicator, Shapes, Cursor, Main, Mobile, Inner, Spacer, SplitText, ThreeScene, Wip
- **Data**: Project data (projectData.js)
- **Assets**: Images, SVGs, Videos, Fonts

## 3. TDD Process
For each feature/component:
1. **Write tests first** (unit, integration, UI/behavioral as appropriate)
2. **Implement the feature/component**
3. **Run tests and refactor** until all pass

## 4. Test Cases (Examples)

### App Component
- Renders without crashing
- Correctly routes to Home, Contact, Project pages
- Navbar and Footer are present on all pages

### Navbar Component
- Renders navigation links
- Highlights active page
- Responsive behavior (mobile/desktop)

### Loader Component
- Displays loading animation on initial load
- Hides after content is ready

### Hero Component
- Renders main hero section
- Animations trigger as expected

### Projects Component
- Renders list of projects from data
- Clicking a project navigates to Project page

### Project Page
- Loads correct project data based on route param
- Displays project details and assets

### Contact Page
- Renders contact form or info
- Validates form input (if present)

### ScrollIndicator, Shapes, Cursor, etc.
- Render and animate as expected
- Respond to user interactions

### Data
- projectData.js exports valid project array


## 5. Deployment
This project is deployed via **GitHub Pages**. The build output is pushed to the `gh-pages` branch and served as a static site.