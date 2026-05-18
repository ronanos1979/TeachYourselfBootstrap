import { cpSync, rmSync, mkdirSync } from 'fs';

const dirs = [
    'src/main/webapp/includes/css',
    'src/main/webapp/includes/js',
    'src/main/webapp/includes/fonts',
];

dirs.forEach(d => rmSync(d, { recursive: true, force: true }));
dirs.forEach(d => mkdirSync(d, { recursive: true }));

cpSync('node_modules/bootstrap/dist/css',   'src/main/webapp/includes/css',   { recursive: true });
cpSync('node_modules/bootstrap/dist/js',    'src/main/webapp/includes/js',    { recursive: true });
cpSync('node_modules/bootstrap/dist/fonts', 'src/main/webapp/includes/fonts', { recursive: true });
cpSync('node_modules/jquery/dist/jquery.min.js', 'src/main/webapp/includes/js/jquery.min.js');
cpSync('node_modules/bootstrap-icons/font/bootstrap-icons.min.css', 'src/main/webapp/includes/css/bootstrap-icons.min.css');
cpSync('node_modules/bootstrap-icons/font/fonts', 'src/main/webapp/includes/css/fonts', { recursive: true });

console.log('libs copied to includes/');
