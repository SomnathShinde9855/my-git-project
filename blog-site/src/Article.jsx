/**
 * Article Component
 * Displays a single blog article with title, date, and preview
 * Parent: ArticleList
 * Props:
 *   - title (string): The title of the article
 *   - date (string): The publication date of the article
 *   - preview (string): Preview text of the article
 */
function Article({ title, date, preview }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
