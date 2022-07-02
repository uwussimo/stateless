import * as uzbek from './languages/uzbek.json';
import * as english from './languages/english.json';
import * as russian from './languages/russian.json';

type language = 'uz' | 'en' | 'ru';
export const i18n = (language: language): any => {
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
