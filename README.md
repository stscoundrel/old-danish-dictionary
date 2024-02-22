# Old Danish Dictionary

Old Danish Dictionary for Node.js. From Otto Kalkar's Dictionary of elder Danish language.

### Install

`yarn add old-danish-dictionary`

### Usage

The project provides a getter for the whole compressed dataset. You can use it in your script to populate your own database or otherwise use the data.

Should you want to use the data without this Node.js library, you might want to check [Old Danish Dictionary Builder](https://github.com/stscoundrel/old-danish-dictionary-builder).

```javascript
import { getDictionary } from 'old-danish-dictionary'

/**
 * Whole dictionary as array
 * contains over 45 000 entries.
 */
const dictionary = getDictionary()


// Filter words starting with letter T
const tWords = dictionary.filter((entry) => entry.word.charAt(0) === 't')

console.log(tWords)

```

Individual words are returned in format of:

```javascript
{
    headword: string,
    definitions: string[],
}
```

As in the printed book, some definitions are heavily abbreviated. You can map them back to their full meanings.

Find abbreviations used in the definitions.

```javascript
import { findAbbreviations }  from 'cleasby-vigfusson-abbreviations'

// Example: definition of 'Abild'
const content = 'no. (isl. apaldr.) æbletræ; then frucht, som paa then abildhæ staar.'; // etc etc.

// Returns map of abbreviations to meanings.
const result = findAbbreviations(content);

console.log(result);
// "isl." => "islandsk.",
// "n." => "norsk.",
// "no." => "navneord (substantivum).",
// "æ." => "ældre.",

```


### About "Dictionary of the Old Danish Language"

_"Ordbog til det ældre danske Sprog"_ dictionary was published in late 1800s by Otto Kalkar. Old Danish is an ancestor language of Danish, which developed from Old East Norse, the eastern dialect of Old Norse, at the end of the Viking Age. The dictionary itself is called "the dictionary of elder Danish speech" and it covers time period of 1300 - 1700.

Despite its name, Kalkars dictionary is not only a dictionary of "Old Danish", as it covers period from Middle Danish _(=gammeldansk)_ to early Modern Danish _(=ældre nydansk)_. The book covers vocabulary from 1300 - 1700, while the "Old Danish" period stops at 1500s. Due to the large timespan of the dictionary, the oldest vocabulary would be close to the language spoken by Late Viking Age danes, whilst newest entries would not differ much from Danish of the 1800's.

The term "Old Danish" in itself covers multiple periods in Danish language, namely:

- Runic Danish 800 - 1100 (olddansk in Danish. Often included in "Old Norse")
- Early Middle Danish 1100 - 1350 (yngre gammeldansk/middeldansk in Danish)
- Late Middle Danish 1350 - 1525 (ældre gammeldansk/middeldansk in Danish)
