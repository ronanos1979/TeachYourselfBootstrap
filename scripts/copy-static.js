import { cpSync, existsSync } from 'fs';

const src = 'src/main/webapp';
const dist = 'src/main/webapp/dist';

const dirs = [
    'chapter2', 'chapter3', 'chapter4', 'chapter5',
    'chapter6', 'chapter7', 'chapter8', 'chapter9', 'chapter10',
    'includes', 'css', 'js',
];

for (const dir of dirs) {
    const srcPath = `${src}/${dir}`;
    const destPath = `${dist}/${dir}`;
    if (existsSync(srcPath)) {
        cpSync(srcPath, destPath, { recursive: true });
        console.log(`Copied ${dir}/`);
    }
}

cpSync(`${src}/static.html`, `${dist}/static.html`);
console.log('Copied static.html');

console.log('Static files copied to dist/');
