import { readFileSync, writeFileSync } from 'fs';
import { chapters } from '../src/react/chapters.js';

function generateLinks(links) {
    return links.map(link => {
        const desc = link.description
            ? `\n                        <span class="desc">${link.description}</span>`
            : '';
        return `                    <li><a href="${link.href}">${link.label}</a>${desc}</li>`;
    }).join('\n');
}

function generateChapterCard(chapter) {
    return `        <div class="col-md-6">
            <div class="chapter-card">
                <div class="card-header">${chapter.title}</div>
                <ul>
${generateLinks(chapter.links)}
                </ul>
            </div>
        </div>`;
}

const chapterCards = chapters.map(generateChapterCard).join('\n');

const template = readFileSync('src/main/webapp/static-template.html', 'utf8');
const output = template.replace('<!-- CHAPTER_CARDS -->', chapterCards);

writeFileSync('src/main/webapp/static.html', output, 'utf8');
console.log(`static.html generated from chapters.js (${chapters.length} chapters)`);
