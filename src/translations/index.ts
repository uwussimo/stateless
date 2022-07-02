import * as uzbek from './uzbek.json';
import * as english from './english.json';
import * as russian from './russian.json';

export const i18n = (language: string): any => {
  switch (language) {
    case 'uz':
      return uzbek;
    case 'en':
      return english;
    case 'ru':
      return russian;
    default:
      return uzbek;
  }
};
