/**
 * About Component
 * Displays the blog logo/image and about description
 * Parent: App
 * Props:
 *   - image (string): URL of the blog logo/image
 *   - about (string): About text describing the blog
 */
function About({ image, about }) {
  return (
    <section className="about">
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </section>
  );
}

export default About;
