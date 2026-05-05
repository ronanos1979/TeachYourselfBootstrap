import { chapters } from '../chapters.js';

function ChapterCard({ chapter }) {
  return (
    <div className="col-md-6">
      <div className="chapter-card">
        <div className="card-header">{chapter.title}</div>
        <ul>
          {chapter.links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
              {link.description ? <span className="desc">{link.description}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Teach Yourself Bootstrap</h1>
          <p>A hands-on guide to the Bootstrap CSS framework - chapter by chapter examples and exercises.</p>
        </div>
      </section>

      <main className="container">
        <div className="row">
          {chapters.map(chapter => (
            <ChapterCard chapter={chapter} key={chapter.title} />
          ))}
        </div>
      </main>
    </>
  );
}
