import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { chapters } from '../chapters.js';

const repoUrl = 'https://github.com/ronanos1979/TeachYourselfBootstrap';

const chapterGroups = [
  { id: 'chapters-1-6', label: 'Chapters 1-6', min: 1, max: 6 },
  { id: 'chapters-7-12', label: 'Chapters 7-12', min: 7, max: 12 },
  { id: 'chapters-13-18', label: 'Chapters 13-18', min: 13, max: 18 },
  { id: 'chapters-19-24', label: 'Chapters 19-24', min: 19, max: 24 },
];

function NavLink({ href, children }) {
  return href.startsWith('/') ? <Link to={href}>{children}</Link> : <a href={href}>{children}</a>;
}

function ChapterDropdown({ group }) {
  const groupedChapters = chapters
    .filter(chapter => chapter.number >= group.min && chapter.number <= group.max)
    .sort((first, second) => first.number - second.number);

  if (groupedChapters.length === 0) {
    return null;
  }

  return (
    <li className="dropdown">
      <a
        href={`#${group.id}`}
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {group.label} <span className="caret" />
      </a>
      <ul className="dropdown-menu">
        {groupedChapters.map((chapter, chapterIndex) => (
          <Fragment key={chapter.title}>
            {chapterIndex > 0 ? <li role="separator" className="divider" /> : null}
            <li className="dropdown-header">{chapter.title}</li>
            {chapter.links.map(link => (
              <li key={link.href}><NavLink href={link.href}>{link.label}</NavLink></li>
            ))}
          </Fragment>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">Teach Yourself Bootstrap</Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            {chapterGroups.map(group => (
              <ChapterDropdown group={group} key={group.id} />
            ))}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href={repoUrl}>GitHub Source</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
