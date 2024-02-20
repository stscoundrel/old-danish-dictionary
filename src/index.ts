import path from 'path';
import { DictionaryEntry } from './models';
import { read } from './reader';
import { parse } from './parser';

const COMPRESSED_DICTIONARY_PATH = path.join(`${__dirname}/../resources/dictionary.json.gz`);

export function getDictionary() : DictionaryEntry[] {
  const content = read(COMPRESSED_DICTIONARY_PATH);
  const entries = parse(content);

  return entries;
}

export { DictionaryEntry } from './models';
