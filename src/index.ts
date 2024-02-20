import path from 'path';
import { DictionaryEntry } from './models';
import { read } from './reader';
import { parse } from './parser';
import { findFromMapping, getAbbreviationMapping } from './abbreviations';

const COMPRESSED_DICTIONARY_PATH = path.join(`${__dirname}/../resources/dictionary.json.gz`);

export function getDictionary() : DictionaryEntry[] {
  const content = read(COMPRESSED_DICTIONARY_PATH);
  const entries = parse(content);

  return entries;
}

export const findAbbreviations = (content: string) : Map<string, string> => {
  const abbrMap = getAbbreviationMapping();
  return findFromMapping(content, abbrMap);
};

export { DictionaryEntry } from './models';
