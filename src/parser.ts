import zlib from 'zlib';
import { DictionaryEntry } from './models';

export const parse = (content: Buffer): DictionaryEntry[] => {
  // Decompress the gzipped data
  const decompressedData = zlib.gunzipSync(content);

  // Parse the JSON content
  return JSON.parse(decompressedData.toString());
};

export default {
  parse,
};
