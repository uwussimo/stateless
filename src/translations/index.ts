import * as uzbek from './languages/uzbek.json';
import * as english from './languages/english.json';
import * as russian from './languages/russian.json';

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
