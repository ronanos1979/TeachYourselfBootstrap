import ViewportSize from './ViewportSize.jsx';
import Toc from '../components/Toc.jsx';

function Page({ title, intro, children }) {
  return (
    <main className="container chapter-page chapter5-page">
      <h1>{title}</h1>
      {intro}
      <ViewportSize />
      {children}
    </main>
  );
}

export function ClearfixProblemPage() {
  return (
    <Page
      title="The ClearFix Problem"
      intro={(
        <>
          <Toc items={[
            { id: 'without-clearfix', label: 'Without clearfix (broken at xs)' },
            { id: 'with-clearfix', label: 'With clearfix (fixed at xs)' },
          ]} />
          <p>Resize your browser to <strong>below 768px wide</strong> to see the xs breakpoint where the problem appears.</p>
        </>
      )}
    >
      <h2 id="without-clearfix">Without clearfix (broken at xs)</h2>
      <div className="row clearfix-demo">
        <div className="col-xs-6 col-sm-3 col1">Col 1 is very tall.<br /><br />It has lots of content.<br /><br />Much more than col 2.<br /><br />This extra height is what causes the layout bug below.</div>
        <div className="col-xs-6 col-sm-3 col2">Col 2 - short</div>
        <div className="col-xs-6 col-sm-3 col3">Col 3 - gets pushed to the RIGHT instead of starting at the left edge</div>
        <div className="col-xs-6 col-sm-3 col4">Col 4 - short</div>
      </div>
      <hr />
      <h2 id="with-clearfix">With clearfix (fixed at xs)</h2>
      <div className="row clearfix-demo">
        <div className="col-xs-6 col-sm-3 col1">Col 1 is very tall.<br /><br />It has lots of content.<br /><br />Much more than col 2.<br /><br />This extra height is what causes the layout bug above.</div>
        <div className="col-xs-6 col-sm-3 col2">Col 2 - short</div>
        <div className="clearfix visible-xs-block" />
        <div className="col-xs-6 col-sm-3 col3">Col 3 - starts correctly at the LEFT edge thanks to clearfix</div>
        <div className="col-xs-6 col-sm-3 col4">Col 4 - short</div>
      </div>
    </Page>
  );
}

export function ThreeColumnLayoutPage() {
  return (
    <Page
      title="Three Column Layout"
      intro={<p>Demonstrates how Bootstrap&apos;s <code>col-md-*</code> classes create multi-column layouts. Columns stack below the md breakpoint and sit side by side on medium screens and above.</p>}
    >
      <p className="label-row">Example 1 - Three equal columns</p>
      <p>Resize below 992px: all three columns stack into a single full-width column.</p>
      <section className="row column-demo">
        <aside className="col-md-4"><h2>Column 1 - col-md-4</h2><p>One third of the row at md and above.</p></aside>
        <article className="col-md-4"><h2>Column 2 - col-md-4</h2><p>One third of the row at md and above.</p></article>
        <aside className="col-md-4"><h2>Column 3 - col-md-4</h2><p>One third of the row. 4+4+4=12.</p></aside>
      </section>

      <p className="label-row">Example 2 - Unequal columns: 2+6+4=12</p>
      <section className="row column-demo">
        <aside className="col-md-2"><h2>col-md-2</h2><p>Narrow left sidebar.</p></aside>
        <article className="col-md-6"><h2>col-md-6</h2><p>Main content area.</p></article>
        <aside className="col-md-4"><h2>col-md-4</h2><p>Right sidebar.</p></aside>
      </section>

      <p className="label-row">Example 3 - Responsive columns</p>
      <section className="row column-demo">
        <aside className="col-xs-12 col-sm-6 col-md-4 col-lg-2"><h2>Col 1</h2><p>xs: full | sm: half | md: third | lg: narrow</p></aside>
        <article className="col-xs-12 col-sm-6 col-md-4"><h2>Col 2</h2><p>xs: full | sm: half | md+: third</p></article>
        <aside className="col-xs-12 col-sm-6"><h2>Col 3</h2><p>xs: full | sm+: half</p></aside>
      </section>

      <p className="label-row">Example 4 - col-lg-4 only</p>
      <section className="row column-demo">
        <aside className="col-lg-4"><h2>col-lg-4</h2><p>Full-width below lg, one third at lg+.</p></aside>
        <article className="col-lg-4"><h2>col-lg-4</h2><p>Full-width below lg, one third at lg+.</p></article>
        <aside className="col-lg-4"><h2>col-lg-4</h2><p>Full-width below lg, one third at lg+.</p></aside>
      </section>
    </Page>
  );
}

export function GridColumnsPage() {
  const widths = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <Page
      title="Bootstrap Grid: The 12-Column System"
      intro={<p>Bootstrap divides every row into <strong>12 equal units</strong>. Columns that do not add up to 12 leave empty space; columns that exceed 12 wrap to the next line.</p>}
    >
      <p className="label-row">Part 1 - Each column width from col-1 to col-12</p>
      {widths.map(width => (
        <section className="row grid-column-demo" key={width}>
          <div className={`col-xs-${Math.min(width, 12)}`}><h2>col-{width} {width === 12 ? '(full width)' : `(${width}/12)`}</h2></div>
        </section>
      ))}

      <p className="label-row">Part 2 - Combining columns in a row</p>
      <section className="row grid-column-demo">
        <aside className="col-md-4"><h2>col-md-4 (1/3)</h2></aside>
        <article className="col-md-4"><h2>col-md-4 (1/3)</h2></article>
        <aside className="col-md-4"><h2>col-md-4 (1/3) - three equal thirds</h2></aside>
      </section>
      <section className="row grid-column-demo">
        <aside className="col-md-2"><h2>col-md-2 (narrow sidebar)</h2></aside>
        <article className="col-md-6"><h2>col-md-6 (main content)</h2></article>
        <aside className="col-md-4"><h2>col-md-4 (wider sidebar) - total = 12</h2></aside>
      </section>

      <p className="label-row">Part 3 - Responsive breakpoints</p>
      <section className="row grid-column-demo">
        <aside className="col-xs-12 col-sm-6 col-md-4 col-lg-2"><h2>xs=full, sm=half, md=third, lg=narrow</h2></aside>
        <article className="col-xs-12 col-sm-6 col-md-4"><h2>xs=full, sm=half, md=third</h2></article>
        <aside className="col-xs-12 col-sm-6"><h2>xs=full, sm=half</h2></aside>
      </section>

      <p className="label-row">Part 4 - Large only</p>
      <section className="row grid-column-demo">
        <aside className="col-lg-4"><h2>col-lg-4 - side by side only at lg</h2></aside>
        <article className="col-lg-4"><h2>col-lg-4 - stacks below lg</h2></article>
        <aside className="col-lg-4"><h2>col-lg-4</h2></aside>
      </section>
    </Page>
  );
}

export function OffsettingOrderingNestingPage() {
  return (
    <Page
      title="Offsetting and Ordering Columns"
      intro={<p>Offsets add blank space to the left of a column; push/pull reorders columns visually without changing HTML source order.</p>}
    >
      <p className="label-row">Offsetting - col-md-offset-N adds empty columns of space</p>
      <p>Row 1: col-md-5 + col-md-6 = 11 columns. The gap on the right is unused space.</p>
      <section className="row offset-demo">
        <aside className="col-md-5"><h2>col-md-5</h2><p>Five columns wide. No offset.</p></aside>
        <section className="col-md-6"><h2>col-md-6</h2><p>Six columns wide, sits immediately after col 1.</p></section>
      </section>
      <p>Row 2: <code>col-md-offset-1</code> pushes the second column one unit right.</p>
      <section className="row offset-demo">
        <aside className="col-md-5"><h2>col-md-5</h2><p>Five columns wide. No offset.</p></aside>
        <section className="col-md-6 col-md-offset-1"><h2>col-md-6 col-md-offset-1</h2><p>Offset by one column.</p></section>
      </section>

      <p className="label-row">Ordering - col-md-push-N and col-md-pull-N swap column order visually</p>
      <p><strong>Before push/pull</strong> - HTML order matches visual order:</p>
      <div className="row offset-demo">
        <div className="col-md-8"><strong>HTML order: 1st.</strong> col-md-8 - wide column on the left.</div>
        <div className="col-md-4"><strong>HTML order: 2nd.</strong> col-md-4 - narrow column on the right.</div>
      </div>
      <p><strong>After push/pull</strong> - same HTML order, but columns swap visually:</p>
      <div className="row offset-demo">
        <div className="col-md-8 col-md-push-4"><strong>HTML order: 1st, but visually RIGHT.</strong> col-md-push-4 shifts this right.</div>
        <div className="col-md-4 col-md-pull-8"><strong>HTML order: 2nd, but visually LEFT.</strong> col-md-pull-8 shifts this left.</div>
      </div>
    </Page>
  );
}

export function ResponsiveWebLayoutPage() {
  return (
    <Page
      title="Responsive Web Layout"
      intro={(
        <>
          <p>These columns use multiple breakpoint classes so their widths change at each screen size.</p>
          <p>Breakpoints in Bootstrap 3: <strong>xs</strong> &lt;768px | <strong>sm</strong> &gt;=768px | <strong>md</strong> &gt;=992px | <strong>lg</strong> &gt;=1200px</p>
        </>
      )}
    >
      <p className="label-row">Three columns: col-sm-6 col-md-4 col-lg-3 col-lg-offset-1</p>
      <p><strong>sm:</strong> half width. <strong>md:</strong> one third. <strong>lg:</strong> one quarter with a one-column offset.</p>
      <div className="row responsive-demo">
        <div className="col-sm-6 col-md-4 col-lg-3 col-lg-offset-1 col-a"><strong>Column 1</strong><br />sm: half-width<br />md: one third<br />lg: one quarter + offset</div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-lg-offset-1 col-b"><strong>Column 2</strong><br />sm: half-width<br />md: one third<br />lg: one quarter + offset</div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-lg-offset-1 col-c"><strong>Column 3</strong><br />sm: wraps to next line<br />md: one third<br />lg: one quarter + offset</div>
      </div>
    </Page>
  );
}
