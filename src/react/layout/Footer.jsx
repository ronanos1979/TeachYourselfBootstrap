const repoUrl = 'https://github.com/ronanos1979/TeachYourselfBootstrap';
const originalSamplesUrl = 'https://github.com/htmljenn/Teach-Yourself-Bootstrap-Code-Samples';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          <a href={repoUrl}>github.com/ronanos1979/TeachYourselfBootstrap</a>
          {' - based on original samples by '}
          <a href={originalSamplesUrl}>htmljenn</a>
        </p>
      </div>
    </footer>
  );
}
