import { writeFile } from 'fs';
import { promisify } from 'util';
import { join as joinPath } from 'path';
import lunr from 'lunr';
import { collectMarkdownText } from './markdown';

const doWriteFile = promisify(writeFile);

const PROJECT_DIR = joinPath('.');

export async function buildSearchIndex() {
  const idx = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('description');
    this.field('contents');


  });

}
