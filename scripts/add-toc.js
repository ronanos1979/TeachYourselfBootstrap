import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';
import path from 'path';

const TOC_DIV = '<div id="toc"></div>';

const TOC_SCRIPT = `    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var headings = document.querySelectorAll('.container h1');
            if (!headings.length) return;
            var items = Array.from(headings).map(function (h) {
                if (!h.id) {
                    h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                }
                return '<a href="#' + h.id + '" class="list-group-item">' + h.textContent.trim() + '</a>';
            });
            document.getElementById('toc').innerHTML =
                '<div class="panel panel-default">' +
                '<div class="panel-heading"><strong>Contents</strong></div>' +
                '<div class="list-group" style="margin-bottom:0">' + items.join('') + '</div>' +
                '</div>';
        });
    </script>`;

function addToc(filePath) {
  let content = readFileSync(filePath, 'utf8');

  if (content.includes('id="toc"')) {
    console.log(`SKIP (already has TOC): ${filePath}`);
    return;
  }

  // Insert <div id="toc"></div> after the first <h1> or <h2> closing tag
  const headingMatch = content.match(/<\/h[12]>/);
  if (!headingMatch) {
    console.log(`SKIP (no h1/h2 found): ${filePath}`);
    return;
  }
  const headingEnd = content.indexOf(headingMatch[0]) + headingMatch[0].length;
  content = content.slice(0, headingEnd) + '\n        ' + TOC_DIV + content.slice(headingEnd);

  // Insert TOC script before the jQuery <script> tag or before </body>
  const jqueryComment = content.indexOf('<!-- jQuery');
  const jqueryScript = content.indexOf('<script src="');
  const bodyClose = content.lastIndexOf('</body>');

  let insertBefore = -1;
  if (jqueryComment !== -1) {
    insertBefore = jqueryComment;
  } else if (jqueryScript !== -1) {
    insertBefore = jqueryScript;
  } else if (bodyClose !== -1) {
    insertBefore = bodyClose;
  }

  if (insertBefore === -1) {
    console.log(`SKIP (no insertion point): ${filePath}`);
    return;
  }

  content = content.slice(0, insertBefore) + TOC_SCRIPT + '\n\n    ' + content.slice(insertBefore);

  writeFileSync(filePath, content, 'utf8');
  console.log(`UPDATED: ${filePath}`);
}

// Find all HTML files in chapter folders, skip chapter10 (already done)
const files = [
  'src/main/webapp/chapter2/grid.html',
  'src/main/webapp/chapter3/basic_bootstrap_template.html',
  'src/main/webapp/chapter3/bootstrap_starter_template.html',
  'src/main/webapp/chapter3/jumbotron.html',
  'src/main/webapp/chapter3/the_bootstrap_theme.html',
  'src/main/webapp/chapter4/a_basic_bootstrap_page.html',
  'src/main/webapp/chapter4/a_basic_bootstrap_page_with_stylesheet.html',
  'src/main/webapp/chapter5/clearfix_problem1.html',
  'src/main/webapp/chapter5/grid_columns.html',
  'src/main/webapp/chapter5/offsetting_ordering_and_nesting_columns.html',
  'src/main/webapp/chapter5/responsive_web_layout.html',
  'src/main/webapp/chapter5/three_column_layout.html',
  'src/main/webapp/chapter6/a_label_path_with_stylesheet.html',
  'src/main/webapp/chapter6/jumbotron.html',
  'src/main/webapp/chapter7/typography.html',
  'src/main/webapp/chapter8/tables.html',
  'src/main/webapp/chapter9/forms.html',
  'src/main/webapp/chapter11/buttons_and_buttongroups.html',
];

files.forEach(addToc);
