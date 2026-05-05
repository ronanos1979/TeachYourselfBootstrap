const contacts = [
  ['Ronan O\'Sullivan', 'Sr Director of Engineering', 'http://www.ronanos.com', 'sw@ronanos.com'],
  ['Matilde O\'Sullivan', 'Chief HR Officer', 'http://www.tillyrs.com', 'tilly@ronanos.com'],
  ['Michael O\'Sullivan', 'Chief Executive Officer', 'http://www.michael.com', 'michael@ronanos.com'],
];

function ContactTable({ className = 'table table-striped table-bordered table-hover table-condensed table-responsive' }) {
  return (
    <table className={className}>
      <caption>Contact Information</caption>
      <thead>
        <tr className="danger"><th>Name</th><th>Title</th><th>URL</th><th>Email</th></tr>
      </thead>
      <tbody>
        {contacts.map(([name, title, url, email], index) => (
          <tr key={email}>
            <td className={index === 0 ? 'success' : undefined}>{name}</td>
            <td className={index === 0 ? 'warning' : undefined}>{index === 0 ? <span className="sr-only">Warning: </span> : null}{title}</td>
            <td>{url}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
      <tfoot><tr><td colSpan="4"><p>Tilly and Michael are my wife and son respectively</p></td></tr></tfoot>
    </table>
  );
}

export default function TablesPage() {
  return (
    <main className="chapter-page tables-page">
      <section className="container starter-template">
        <h1>Bootstrap Starter Template</h1>
        <p className="lead">Use this document as a way to quickly start any new project.<br />All you get is this text and a mostly barebones HTML document.</p>
      </section>
      <section className="container"><ContactTable /></section>
      <section className="container"><ContactTable className="forgot_to_add" /></section>
      <section className="container">
        <div className="panel panel-default">
          <div className="panel-heading">Learn More About Our Company</div>
          <div className="panel-body">Whatever statement about our company.</div>
          <ContactTable className="table table-bordered table-striped table-condensed table-hover table-responsive" />
        </div>
      </section>
    </main>
  );
}
