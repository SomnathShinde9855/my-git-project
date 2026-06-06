/**
 * App Component
 * Root component for the personal blog application
 * This component imports blog data and renders the main blog layout
 * Children: Header, About, ArticleList
 * 
 * The component tree structure:
 * └── App
 *     ├── Header
 *     ├── About
 *     └── ArticleList
 *         └── Article (mapped)
 */

import './App.css'
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'
import { blog, posts } from './blog'

function App() {
  return (
    <div className="app">
      {/* Header component displays the blog name */}
      <Header name={blog.name} />
      
      {/* About component displays blog logo and description */}
      <About image={blog.image} about={blog.about} />
      
      {/* ArticleList component renders all blog posts */}
      <ArticleList posts={posts} />
    </div>
  )
}

export default App
      <section id="spacer"></section>
    </>
  )
}

export default App
