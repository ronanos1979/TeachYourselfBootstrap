export function LabelsPage() {
  return (
    <main className="container chapter-page labels-page">
      <h1>A Label Bootstrap Page</h1>
      <p>
        <span className="label label-default">Default</span>{' '}
        <span className="label label-primary">Primary</span>{' '}
        <span className="label label-success">Success</span>{' '}
        <span className="label label-info">Info</span>{' '}
        <span className="label label-warning">Warning</span>{' '}
        <span className="label label-danger">Danger</span>
      </p>

      <h1>Badges</h1>
      <p><a href="#top">Badge e.g. showing number of messages in Inbox <span className="badge">4</span></a></p>

      <h1>Wells</h1>
      <p>This is standard content.</p>
      <p className="well">This content is inside a well.</p>
      <p className="well well-lg">This content is inside a large well.</p>
      <p className="well well-sm">This content is inside a small well.</p>
      <blockquote>This content is inside a blockquote.</blockquote>
      <div className="well"><blockquote>This content is inside a blockquote inside a well.</blockquote></div>

      <h1>Panels</h1>
      <div className="panel panel-default">
        <div className="panel-heading">This is a panel heading without a title.</div>
        <div className="panel-body">This content is in a panel.</div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading"><h3 className="panel-title">Panel title</h3></div>
        <div className="panel-body">This content is in a panel.</div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">This content is in a panel.</div>
        <div className="panel-footer">This content is in a panel footer.</div>
      </div>
    </main>
  );
}

export function JumbotronPage() {
  return (
    <main className="container chapter-page jumbotron-page">
      <h1>A Label Bootstrap Page</h1>
      <div className="jumbotron">
        <h1>This is a Jumbotron</h1>
        <p>This is content inside the jumbotron</p>
        <p><a className="btn btn-primary btn-lg" href="#top" role="button">Learn more</a></p>
      </div>
    </main>
  );
}
