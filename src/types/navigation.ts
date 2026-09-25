export type Page =
  | { name: 'home' }
  | { name: 'category'; category: string }
  | { name: 'game'; gameId: string }
  | { name: 'cloud' };

export type NavigateFn = (page: Page) => void;
