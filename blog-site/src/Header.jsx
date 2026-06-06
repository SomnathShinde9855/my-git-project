/**
 * Header Component
 * Renders the blog header with the blog name/title
 * Parent: App
 * Props:
 *   - name (string): The name of the blog to display in the header
 */
function Header({ name }) {
  return (
    <header className="header">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
