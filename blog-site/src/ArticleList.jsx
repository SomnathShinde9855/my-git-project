/**
 * ArticleList Component
 * Renders a list of Article components from an array of posts
 * Parent: App
 * Children: Article (mapped over posts array)
 * Props:
 *   - posts (array): Array of post objects containing title, date, and preview
 */
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <section className="article-list">
      {posts.map((post) => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </section>
  );
}

export default ArticleList;
