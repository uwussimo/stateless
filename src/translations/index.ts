import * as uzbek from './languages/uzbek.json';
import * as english from './languages/english.json';
import * as russian from './languages/russian.json';
import { language } from 'src/interface/types/language.type';

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
