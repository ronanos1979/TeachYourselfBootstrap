import Toc from '../components/Toc.jsx';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const TOC_ITEMS = [
  { id: 'inline-text', label: 'Inline Text' },
  { id: 'aligning-elements', label: 'Aligning Elements' },
  { id: 'transforming-text-elements', label: 'Transforming Text Elements' },
  { id: 'other-text-blocks', label: 'Other Text Blocks' },
  { id: 'quotations', label: 'Quotations' },
  { id: 'lists', label: 'Lists' },
  { id: 'abbreviations', label: 'Abbreviations' },
  { id: 'address', label: 'Address' },
  { id: 'blockquotes', label: 'Blockquotes' },
];

function HeadingSample({ level }) {
  const Tag = `h${level}`;
  const InlineTag = `span`;

  return (
    <>
      <Tag>{`<h${level}> Bootstrap heading`}</Tag>
      <p>
        This is a paragraph with an{' '}
        <InlineTag className={`h${level}`}>
          inline {`<h${level}>`} heading <small>with secondary text</small>{' '}
          <span className="small">and span class small similar to small tag</span>
        </InlineTag>
      </p>
    </>
  );
}

export default function TypographyPage() {
  return (
    <main className="chapter-page typography-page">
      <div className="page-header">
        <h1 className="text-hide" id="mainhead">Headline</h1>
        <p>The Headline text was hidden from display by CSS. Useful for SEO.</p>
      </div>

      <section className="container starter-template">
        <h1>Typography</h1>
        <Toc items={TOC_ITEMS} />
        {[1, 2, 3, 4, 5, 6].map(level => <HeadingSample level={level} key={level} />)}
      </section>

      <section className="container">
        <p className="lead">Here is some text that is in a paragraph with lead class which is useful at beginning of paragraph</p>
        <p>Here is some text in a paragraph without lead class</p>
        <p>Here is some text inside <span className="lead">span class lead</span> in a paragraph</p>
      </section>

      <section className="container">
        <h3 id="inline-text">Inline Text</h3>
        <del>This is deleted text</del><br />
        <em>This is emphasized text in italics</em><br />
        <ins>This is inserted text</ins><br />
        <mark>This is marked text for reference purposes</mark><br />
        <s>This text has been struck from the document and has a line through it</s><br />
        <small>This text is in small print such as legalese</small><br />
        <strong>This text is emphasized in bold</strong><br />
        <u>This is underlined</u><br />
      </section>

      <section className="container">
        <h3 id="aligning-elements">Aligning Elements</h3>
        {['', 'text-left', 'text-right', 'text-center', 'text-justify', 'text-nowrap'].map(className => (
          <p className={className} key={className || 'default'}><strong>{className || 'Default paragraph text'}.</strong> {lorem}</p>
        ))}
        <div className="clearfix">
          <p className="well pull-left width-30">This well is left aligned. {lorem}</p>
          <p className="well pull-right width-30">This well is right aligned. {lorem}</p>
          <p className="well center-block width-30">This well is centered. {lorem}</p>
        </div>
        <div className="row">
          <p>A Bootstrap 3 implementation</p>
          <div className="col-md-4"><p className="well">This well is left aligned. {lorem}</p></div>
          <div className="col-md-4"><p className="well">This well is centered. {lorem}</p></div>
          <div className="col-md-4"><p className="well">This well is right aligned. {lorem}</p></div>
        </div>
      </section>

      <section className="container">
        <h3 id="transforming-text-elements">Transforming Text Elements</h3>
        {['lowercase', 'uppercase', 'capitalize', 'muted', 'primary', 'success', 'info', 'warning', 'danger', 'default', 'inverse'].map(name => (
          <p className={`text-${name}`} key={name}>This text will be in {name} color or case.</p>
        ))}
      </section>

      <section className="container">
        <h3 id="other-text-blocks">Other Text Blocks</h3>
        <code>This text is in code block.</code><br />
        <p>Here is some <code>inline code</code> in a paragraph.</p>
        <pre><code>This text is in code block.</code></pre>
        <kbd>This text is in keyboard block.</kbd><br />
        <p>Please type <kbd>Y</kbd> for Yes</p>
        <pre>This text is in preformatted block.
It preserves whitespace and line breaks.</pre>
        <p>This is what the output should be of a sample block <samp>This text is in sample block.</samp></p>
        <var>This text is in variable block.</var>
      </section>

      <section className="container">
        <h3 id="quotations">Quotations</h3>
        <blockquote>
          <p>`Twas brillig, and the slithy toves<br />Did gyre and gimble in the wabe;<br />All mimsy were the borogoves,<br />And the mome raths outgrabe.</p>
          <footer>Lewis Carroll in <cite title="The Jabberwocky">The Jabberwocky</cite></footer>
        </blockquote>
      </section>

      <section className="container">
        <h3 id="lists">Lists</h3>
        <ul><li>Unordered list item 1</li><li>Unordered list item 2</li><li>Unordered list item 3</li></ul>
        <ol><li>Ordered list item 1</li><li>Ordered list item 2</li><li>Ordered list item 3</li></ol>
        <ul className="list-unstyled"><li>Unstyled list item 1</li><li>Unstyled list item 2</li><li>Unstyled list item 3</li></ul>
        <ul className="list-inline"><li>Inline list item 1</li><li>Inline list item 2</li><li>Inline list item 3</li></ul>
        <dl className="dl-horizontal">
          <dt>Definition list term 1</dt><dd>Definition list description 1</dd>
          <dt>Definition list term 2</dt><dd>Definition list description 2</dd>
          <dt>Definition list term 3</dt><dd>Definition list description 3</dd>
        </dl>
        <ul className="list-group"><li className="list-group-item">List group item 1</li><li className="list-group-item">List group item 2</li><li className="list-group-item">List group item 3</li></ul>
      </section>

      <section className="container">
        <h3 id="abbreviations">Abbreviations</h3>
        <p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for creating web pages and web applications.</p>
        <p>I wrote a book on <abbr title="Cascading Style Sheets">CSS</abbr> and another on <abbr title="JavaScript" className="initialism">JS</abbr>.</p>
      </section>

      <section className="container">
        <h3 id="address">Address</h3>
        <address><strong>Twitter, Inc.</strong><br />1355 Market Street, Suite 900<br />San Francisco, CA 94103<br /><abbr title="Phone">P:</abbr> (123) 456-7890</address>
      </section>

      <section className="container">
        <h3 id="blockquotes">Blockquotes</h3>
        <blockquote><p>{lorem}</p><footer>Someone famous in <cite title="Source Title">Source Title</cite></footer></blockquote>
        <blockquote className="blockquote-reverse"><p>{lorem}</p><footer>Someone famous in <cite title="Source Title">Source Title</cite></footer></blockquote>
      </section>
    </main>
  );
}
