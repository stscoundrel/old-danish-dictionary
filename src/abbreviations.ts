const abbreviationMapping = new Map();

abbreviationMapping.set('ags.', 'angelsaksisk.');
abbreviationMapping.set('bdo.', 'bindeord (conjunctio).');
abbreviationMapping.set('bio.', 'biord (adverbium).');
abbreviationMapping.set('dat.', 'datid (imperfectum).');
abbreviationMapping.set('eng.', 'engelsk.');
abbreviationMapping.set('et.', 'enkelttal (singularis).');
abbreviationMapping.set('fho.', 'forholdsord (præpositio).');
abbreviationMapping.set('fk.', 'fælleskon (genus commune).');
abbreviationMapping.set('flt.', 'flertal (pluralis).');
abbreviationMapping.set('f.m.', 'forestillende måde (conjunctivus).');
abbreviationMapping.set('g.', 'grad (gradus).');
abbreviationMapping.set('2g.', 'comparativus.');
abbreviationMapping.set('3g.', 'superlativus.');
abbreviationMapping.set('go.', 'gærningsord (verbum).');
abbreviationMapping.set('hank.', 'hankon (masculinum). ');
abbreviationMapping.set('ht.', 'højtysk.');
abbreviationMapping.set('hunk.', 'hunkøn (femininum).');
abbreviationMapping.set('hvs.', 'henvisende (relativum).');
abbreviationMapping.set('ik.', 'intetkøn (nevbram).');
abbreviationMapping.set('isl.', 'islandsk.');
abbreviationMapping.set('lf.', 'lideform (passivum).');
abbreviationMapping.set('l. tm,', 'lidende tillegsmade (participium, passivum).');
abbreviationMapping.set('n.', 'norsk.');
abbreviationMapping.set('no.', 'navneord (substantivum).');
abbreviationMapping.set('nt.', 'nedertysk.');
abbreviationMapping.set('nut.', 'nutid (presens).');
abbreviationMapping.set('sp.', 'spørgende (interrogativum).');
abbreviationMapping.set('sto.', 'stedord (pronomen).');
abbreviationMapping.set('sv.', 'svensk.');
abbreviationMapping.set('t.', 'tysk.');
abbreviationMapping.set('tm.', 'tillagsmåde (participium).');
abbreviationMapping.set('to.', 'tillægsord (adjectivum).');
abbreviationMapping.set('udråbso.', 'udråbsord (interjectio).');
abbreviationMapping.set('ufor.', 'uforandret.');
abbreviationMapping.set('uvirk.', 'uvirkende (intransitivum).');
abbreviationMapping.set('virk.', 'virkende (transitivum).');
abbreviationMapping.set('æ.', 'ældre.');

export const getAbbreviationMapping = (): Map<string, string> => abbreviationMapping;

export const findFromMapping = (
  content: string,
  abbreviations: Map<string, string>,
): Map<string, string> => {
  const result: Map<string, string> = new Map();

  abbreviations.forEach((value, key) => {
    if (content.includes(key)) {
      result.set(key, value);
    }
  });

  return result;
};
