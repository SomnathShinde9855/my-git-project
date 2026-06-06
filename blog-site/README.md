# Personal Blog Website

A static personal blog website built with React and Vite. This project demonstrates React component architecture, prop passing, and JSX usage through a multi-component blog layout.

## Project Overview

This blog website showcases best practices for building reusable React components and managing component hierarchies. The application consists of a header, about section, and a list of blog articles.

### Component Architecture

```
App (Root)
├── Header         - Displays the blog name
├── About          - Shows blog logo and description
└── ArticleList    - Renders list of articles
    └── Article   - Individual article card (mapped)
```

## Features

- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Component-Based Architecture**: Modular, reusable components with clear prop interfaces
- **Dynamic Content**: Blog data managed in `blog.js` and passed via props
- **Styled Cards**: Article cards with hover effects and smooth transitions
- **Accessible Images**: Blog logo with proper alt text for accessibility

## Project Structure

```
src/
├── App.jsx              # Root component that orchestrates the blog layout
├── App.css              # Styling for the blog application
├── Header.jsx           # Header component (displays blog name)
├── About.jsx            # About section component (logo + description)
├── ArticleList.jsx      # Article list container component
├── Article.jsx          # Individual article card component
├── blog.js              # Blog data: name, about text, and article posts
├── main.jsx             # Application entry point
├── index.css            # Global styles
└── assets/              # Images and static files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the blog-site directory:
   ```bash
   cd blog-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The blog will be available at `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Component Documentation

### App.jsx
**Purpose**: Root component that ties all components together  
**Children**: Header, About, ArticleList  
**Data Flow**: Imports blog data from `blog.js` and passes it to child components

### Header.jsx
**Purpose**: Displays the blog name/title  
**Props**:
- `name` (string): Blog name to display

### About.jsx
**Purpose**: Shows blog logo and description  
**Props**:
- `image` (string): URL to the blog logo image
- `about` (string): Description text about the blog

### ArticleList.jsx
**Purpose**: Container that renders all article components  
**Props**:
- `posts` (array): Array of post objects with id, title, date, and preview  
**Children**: Article components (mapped from posts array)

### Article.jsx
**Purpose**: Individual article card component  
**Props**:
- `title` (string): Article title
- `date` (string): Publication date
- `preview` (string): Preview text of the article

### blog.js
**Purpose**: Centralized data store for blog content  
**Exports**:
- `blog` object: Contains name, about, and image properties
- `posts` array: Contains article objects with id, title, date, and preview

## Customization

### Adding New Articles

Edit `src/blog.js` and add new post objects to the `posts` array:

```javascript
{
  id: 5,
  title: "Your Article Title",
  date: "April 10, 2024",
  preview: "Your article preview text goes here..."
}
```

### Updating Blog Info

Edit `src/blog.js` and modify the `blog` object:

```javascript
export const blog = {
  name: "Your Blog Name",
  about: "Your blog description...",
  image: "your-image-url"
}
```

### Styling

Blog styles are defined in `src/App.css`. Customize colors, fonts, spacing, and other styles to match your design preferences. The styles use CSS custom properties (variables) for theming support.

## Key Learnings

This project demonstrates:
- ✅ Building reusable React components
- ✅ Passing data through props
- ✅ Component composition and hierarchy
- ✅ JSX syntax and rendering
- ✅ Array mapping for dynamic content
- ✅ Conditional rendering
- ✅ CSS styling in React applications
- ✅ Responsive design practices
- ✅ Component documentation and comments

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

This project is built with modern JavaScript and CSS and works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is provided as-is for educational purposes.

## Acknowledgments

Built as a learning exercise for React components and props using the Vite build tool.
