import { getDictionary } from '../src';

describe('Old Danish Dictionary tests', () => {
  test('Dictionary contains expected amount of entries', () => {
    const result = getDictionary();

    expect(result.length).toBe(45408);
  });

  test('Dictionary entries are parsed in correct object format', () => {
    const result = getDictionary();

    result.forEach((entry) => {
      // Only expected keys.
      expect(Object.keys(entry)).toEqual(['headword', 'definitions']);

      // TODO: should assert headwords are not empty.
      // Current dataset contains 8 empties, so cant be done yet.
    });
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    const skrotte = result.filter((entry) => entry.headword === 'Skrotte')[0];
    const ulovagtig = result.filter((entry) => entry.headword === 'Ulovagtig')[0];
    const vandhagl = result.filter((entry) => entry.headword === 'Vandhagl')[0];

    expect(skrotte.headword).toBe('Skrotte');
    expect(skrotte.definitions[0]).toBe('go. tvivle. M. Hele ordr\u00e6kken synes at hvile p\u00e5 en misforst\u00e5else eller forvanskning.');

    expect(ulovagtig.headword).toBe('Ulovagtig');
    expect(ulovagtig.definitions[0]).toBe('no. ulovlig,ikke gyldig efter loven; (1597) KhS VIL 495 (ovf. III 235b8); teste depr\u00e6hensi, drefine, wlouactige vidre TV 400. Jf logagtig (ovf. II 78122).');

    expect(vandhagl.headword).toBe('Vandhagl');
    expect(vandhagl.definitions[0]).toBe('no. et slags hagl; lade skyde med vandhagl 12 urh\u00f8ns (1642). AL. Efter M: mindste h.');
  });
});
