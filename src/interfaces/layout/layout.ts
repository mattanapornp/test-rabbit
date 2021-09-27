export interface Language {
  code: string;
  name: string;
  translations: any; // TODO: set the specific type for translation
}

export interface Layout {
  language: Language;
}
