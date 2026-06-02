import Toc from '../components/Toc.jsx';

const TOC_ITEMS = [
  { id: 'button-tags', label: 'Button Tags' },
  { id: 'button-types', label: 'Button Types' },
  { id: 'button-sizes', label: 'Button Sizes' },
  { id: 'button-groups', label: 'Button Groups' },
  { id: 'button-toolbars', label: 'Button Toolbars' },
];

const buttonTypes = [
  ['btn-default', 'Default'],
  ['btn-primary', 'Primary'],
  ['btn-success', 'Success'],
  ['btn-info', 'Info'],
  ['btn-warning', 'Warning'],
  ['btn-danger', 'Danger'],
  ['btn-link', 'Link'],
];

function ButtonTags() {
  return (
    <section className="chapter-11-buttontags">
      <h3 id="button-tags">Button Tags</h3>
      <a className="btn btn-default" href="#button-tags" role="button">Link</a>
      <button className="btn btn-default" type="submit">Button</button>
      <input className="btn btn-default" type="button" value="Input" />
      <input className="btn btn-default" type="submit" value="Submit" />
    </section>
  );
}

function ButtonTypes() {
  return (
    <section className="chapter-11-buttontypes">
      <h3 id="button-types">Button Types</h3>
      {buttonTypes.map(([className, label]) => (
        <button className={`btn ${className}`} key={className} type="button">
          {label}
        </button>
      ))}
    </section>
  );
}

function ButtonSizes() {
  return (
    <section className="chapter-11-buttonsizes">
      <h3 id="button-sizes">Button Sizes</h3>
      <button className="btn btn-lg btn-default" type="button">Large</button>
      <button className="btn btn-primary" type="button">Medium</button>
      <button className="btn btn-success btn-sm" type="button">Small</button>
      <button className="btn btn-xs btn-default" type="button">Extra Small</button>
      <button className="btn btn-danger btn-block" type="button">Block Level Button</button>
      <div className="row">
        <div className="col-xs-6">
          <button className="btn btn-info btn-block" type="button">Half Width Block Level Button</button>
        </div>
      </div>
    </section>
  );
}

function ButtonSet({ sizeClass = '' }) {
  const groupClass = `btn-group${sizeClass ? ` ${sizeClass}` : ''}`;

  return (
    <div className={groupClass} role="group" aria-label={`${sizeClass || 'Default'} speed group`}>
      <button className="btn btn-default" type="button">Fast</button>
      <button className="btn btn-default" type="button">Medium</button>
      <button className="btn btn-default" type="button">Slow</button>
    </div>
  );
}

function ButtonGroups() {
  return (
    <section className="chapter-11-buttongroups">
      <h3 id="button-groups">Button Groups</h3>
      <ButtonSet />
      <ButtonSet sizeClass="btn-group-lg" />
      <ButtonSet sizeClass="btn-group-sm" />
      <ButtonSet sizeClass="btn-group-xs" />

      <div className="btn-group btn-group-justified" role="group" aria-label="Justified link speed group">
        <a href="#button-groups" className="btn btn-default">Fast</a>
        <a href="#button-groups" className="btn btn-default">Medium</a>
        <a href="#button-groups" className="btn btn-default">Slow</a>
      </div>

      <div className="btn-group btn-group-justified" role="group" aria-label="Justified button speed group">
        {['Fast', 'Medium', 'Slow'].map(label => (
          <div className="btn-group" role="group" key={label}>
            <button className="btn btn-default" type="button">{label}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function ButtonToolbars() {
  const groups = [
    { label: 'First group', buttons: ['1', '2', '3', '4'] },
    { label: 'Second group', buttons: ['5', '6', '7'] },
    { label: 'Third group', buttons: ['8'] },
  ];

  return (
    <section className="chapter-11-buttontoolbars">
      <h3 id="button-toolbars">Button Toolbars</h3>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        {groups.map(group => (
          <div className="btn-group" role="group" aria-label={group.label} key={group.label}>
            {group.buttons.map(button => (
              <button className="btn btn-default" type="button" key={button}>{button}</button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Chapter11Page() {
  return (
    <main className="container chapter-page chapter11-page">
      <h1>Buttons and Button Groups</h1>
      <Toc items={TOC_ITEMS} />
      <ButtonTags />
      <ButtonTypes />
      <ButtonSizes />
      <ButtonGroups />
      <ButtonToolbars />
    </main>
  );
}
