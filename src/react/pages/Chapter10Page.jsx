import { useState, useMemo } from 'react';
import allIconsData from 'bootstrap-icons/font/bootstrap-icons.json';
import Toc from '../components/Toc.jsx';

const ALL_ICONS = Object.keys(allIconsData);
const COLS = 4;

const GLYPHICONS = [
  'asterisk','plus','euro','eur','minus','cloud','envelope','pencil','glass','music','search','heart',
  'star','star-empty','user','film','th-large','th','th-list','ok','remove','zoom-in','zoom-out','off',
  'signal','cog','trash','home','file','time','road','download-alt','download','upload','inbox',
  'play-circle','repeat','refresh','list-alt','lock','flag','headphones','volume-off','volume-down',
  'volume-up','qrcode','barcode','tag','tags','book','bookmark','print','camera','font','bold','italic',
  'text-height','text-width','align-left','align-center','align-right','align-justify','list',
  'indent-left','indent-right','facetime-video','picture','map-marker','adjust','tint','edit','share',
  'check','move','step-backward','fast-backward','backward','play','pause','stop','forward',
  'fast-forward','step-forward','eject','chevron-left','chevron-right','plus-sign','minus-sign',
  'remove-sign','ok-sign','question-sign','info-sign','screenshot','remove-circle','ok-circle',
  'ban-circle','arrow-left','arrow-right','arrow-up','arrow-down','share-alt','resize-full',
  'resize-small','exclamation-sign','gift','leaf','fire','eye-open','eye-close','warning-sign','plane',
  'calendar','random','comment','magnet','chevron-up','chevron-down','retweet','shopping-cart',
  'folder-close','folder-open','resize-vertical','resize-horizontal','hdd','bullhorn','bell',
  'certificate','thumbs-up','thumbs-down','hand-right','hand-left','hand-up','hand-down',
  'circle-arrow-right','circle-arrow-left','circle-arrow-up','circle-arrow-down','globe','wrench',
  'tasks','filter','briefcase','fullscreen','dashboard','paperclip','heart-empty','link','phone',
  'pushpin','usd','gbp','sort','sort-by-alphabet','sort-by-alphabet-alt','sort-by-order',
  'sort-by-order-alt','sort-by-attributes','sort-by-attributes-alt','unchecked','expand',
  'collapse-down','collapse-up','log-in','flash','log-out','new-window','record','save','open',
  'saved','import','export','send','floppy-disk','floppy-saved','floppy-remove','floppy-save',
  'floppy-open','credit-card','transfer','cutlery','header','compressed','earphone','phone-alt',
  'tower','stats','sd-video','hd-video','subtitles','sound-stereo','sound-dolby','sound-5-1',
  'sound-6-1','sound-7-1','copyright-mark','registration-mark','cloud-download','cloud-upload',
  'tree-conifer','tree-deciduous','cd','save-file','open-file','level-up','copy','paste','alert',
  'equalizer','king','queen','pawn','bishop','knight','baby-formula','tent','blackboard','bed',
  'apple','erase','hourglass','lamp','duplicate','piggy-bank','scissors','bitcoin','btc','xbt',
  'yen','jpy','ruble','rub','scale','ice-lolly','ice-lolly-tasted','education','option-horizontal',
  'option-vertical','menu-hamburger','modal-window','oil','grain','sunglasses','text-size',
  'text-color','text-background','object-align-top','object-align-bottom','object-align-horizontal',
  'object-align-left','object-align-vertical','object-align-right','triangle-right','triangle-left',
  'triangle-bottom','triangle-top','console','superscript','subscript','menu-left','menu-right',
  'menu-down','menu-up',
];

const TOC_ITEMS = [
  { id: 'thumbnails', label: 'Thumbnails' },
  { id: 'media-objects-list', label: 'Media Objects with Media List' },
  { id: 'media-objects-alignment', label: 'Media Objects Alignment' },
  { id: 'media-objects', label: 'Media Objects' },
  { id: 'image-shapes', label: 'Image Shapes' },
  { id: 'all-glyphicons', label: 'All Glyphicons' },
  { id: 'all-bootstrap-icons', label: 'All Bootstrap Icons' },
];

function IconTable({ icons, renderIcon, namePrefix = '' }) {
  const rows = [];
  for (let i = 0; i < icons.length; i += COLS) {
    rows.push(icons.slice(i, i + COLS));
  }
  return (
    <table className="table table-striped table-bordered table-hover table-condensed">
      <thead>
        <tr>
          {Array.from({ length: COLS }, (_, i) => (
            <th key={i} colSpan={2} style={{ width: `${100 / COLS}%` }}>Icon / Name</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map(name => (
              <>
                <td key={name + '-icon'} style={{ textAlign: 'center', width: '40px' }}>
                  {renderIcon(name)}
                </td>
                <td key={name + '-label'}>{namePrefix}{name}</td>
              </>
            ))}
            {row.length < COLS && Array.from({ length: COLS - row.length }, (_, j) => (
              <><td key={`eg-${j}`} /><td key={`el-${j}`} /></>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Thumbnails() {
  return (
    <section>
      <h3 id="thumbnails">Thumbnails</h3>
      <div className="row">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="col-xs-6 col-md-2 thumbnail">
            <img src="https://picsum.photos/seed/picsum/50/50" className="img-rounded" alt={`Thumbnail ${i + 1}`} />
            <div className="caption">Some Caption</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MediaObjectsList() {
  return (
    <section>
      <h3 id="media-objects-list">Media Objects with Media List</h3>
      <ul className="media-list">
        <li className="media">
          <div className="media-left">
            <img src="https://picsum.photos/seed/picsum/200/300" className="media-object img-rounded" style={{ width: 150 }} alt="Left" />
          </div>
          <div className="media-body">
            <h4 className="media-heading">Media Heading with Media List</h4>
            <p>This is the media body content.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

function MediaObjectsAlignment() {
  const variants = [
    { align: 'top', label: 'Media Heading on top which is default' },
    { align: 'middle', label: 'Media Heading in Middle' },
    { align: 'bottom', label: 'Media Heading on bottom' },
  ];
  return (
    <section>
      <h3 id="media-objects-alignment">Media Objects Alignment</h3>
      {variants.map(v => (
        <div key={v.align} className="media">
          <div className="media-left">
            <img src="https://picsum.photos/seed/picsum/200/300" className="media-object img-rounded" style={{ width: 150 }} alt="Left" />
          </div>
          <div className={`media-body media-${v.align}`}>
            <h4 className="media-heading">{v.label}</h4>
            <p>This is the media body content.</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function MediaObjects() {
  return (
    <section>
      <h3 id="media-objects">Media Objects</h3>
      <p>This section is laid out using media-left and media-right. This was guidelines from book.</p>
      <div className="media">
        <div className="media-left">
          <img src="https://picsum.photos/seed/picsum/200/300" className="media-object img-rounded" style={{ width: 150 }} alt="Left" />
        </div>
        <div className="media-body">
          <h4 className="media-heading">Media Heading</h4>
          <p>This is the media body content.</p>
        </div>
        <div className="media-right">
          <img src="https://picsum.photos/seed/picsum/200/300" className="media-object img-rounded" style={{ width: 150 }} alt="Right" />
        </div>
      </div>
    </section>
  );
}

function ImageShapes() {
  return (
    <section>
      <h3 id="image-shapes">Image Shapes</h3>
      <p>This section is laid out using grid layout col-md-4. Ronan tried this. It was not suggested by book.</p>
      <img src="https://picsum.photos/seed/picsum/200/300" className="img-rounded col-md-4 img-responsive" alt="Rounded" />
      <img src="https://picsum.photos/seed/picsum/200/300" className="img-circle col-md-4 img-responsive" alt="Circle" />
      <img src="https://picsum.photos/seed/picsum/200/300" className="img-thumbnail col-md-4 img-responsive" alt="Thumbnail" />
    </section>
  );
}

function GlyphiconSection() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(
    () => search ? GLYPHICONS.filter(n => n.includes(search.toLowerCase())) : GLYPHICONS,
    [search]
  );

  return (
    <section>
      <h3 id="all-glyphicons">All Glyphicons</h3>

      <div className="panel panel-default">
        <div className="panel-heading"><strong>Example: pencil glyphicon</strong></div>
        <div className="panel-body">
          <p>
            <span aria-hidden="true" className="glyphicon glyphicon-pencil" />{' '}
            &mdash; rendered with this code:
          </p>
          <pre><code>{'<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'}</code></pre>
        </div>
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Search glyphicons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className="help-block">Showing {filtered.length} of {GLYPHICONS.length} glyphicons</span>
      </div>
      <div className="table-responsive">
        <IconTable
          icons={filtered}
          renderIcon={name => <span aria-hidden="true" className={`glyphicon glyphicon-${name}`} />}
          namePrefix="glyphicon-"
        />
      </div>
    </section>
  );
}

function BootstrapIconsSection() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(
    () => search ? ALL_ICONS.filter(n => n.includes(search.toLowerCase())) : ALL_ICONS,
    [search]
  );

  return (
    <section>
      <h3 id="all-bootstrap-icons">All Bootstrap Icons</h3>

      <div className="panel panel-default">
        <div className="panel-heading"><strong>Example: pencil icon</strong></div>
        <div className="panel-body">
          <p><i className="bi bi-pencil" /> &mdash; rendered with this code:</p>
          <pre><code>{'<i class="bi bi-pencil"></i>'}</code></pre>
        </div>
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Search icons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className="help-block">Showing {filtered.length} of {ALL_ICONS.length} icons</span>
      </div>
      <div className="table-responsive">
        <IconTable
          icons={filtered}
          renderIcon={name => <i className={`bi bi-${name}`} style={{ fontSize: '1.25rem' }} />}
        />
      </div>
    </section>
  );
}

export default function Chapter10Page() {
  return (
    <main className="container chapter-page chapter10-page">
      <h1>Images, Media Objects and Glyphicons</h1>
      <Toc items={TOC_ITEMS} />
      <Thumbnails />
      <MediaObjectsList />
      <MediaObjectsAlignment />
      <MediaObjects />
      <ImageShapes />
      <GlyphiconSection />
      <BootstrapIconsSection />
    </main>
  );
}
