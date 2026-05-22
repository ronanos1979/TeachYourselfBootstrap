export default function Toc({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="panel panel-default">
      <div className="panel-heading"><strong>Contents</strong></div>
      <div className="list-group" style={{ marginBottom: 0 }}>
        {items.map(item => (
          <a key={item.id} href={`#${item.id}`} className="list-group-item">{item.label}</a>
        ))}
      </div>
    </div>
  );
}
