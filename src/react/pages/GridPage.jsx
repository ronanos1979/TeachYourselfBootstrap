const gridRows = [
  { width: 1, count: 12 },
  { width: 2, count: 6 },
  { width: 3, count: 4 },
  { width: 4, count: 3 },
  { width: 5, count: 2 },
  { width: 6, count: 2 },
  { width: 7, count: 1 },
  { width: 8, count: 1 },
  { width: 9, count: 1 },
  { width: 10, count: 1 },
  { width: 11, count: 1 },
  { width: 12, count: 1 },
];

export default function GridPage() {
  return (
    <main className="container chapter-page">
      <h1>Basic Grid System</h1>
      {gridRows.map(row => (
        <div className="row show-grid" key={row.width}>
          {Array.from({ length: row.count }, (_, index) => (
            <div className={`col-md-${row.width}`} key={`${row.width}-${index}`}>
              {`.col-md-${row.width}`}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
