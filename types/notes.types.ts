export interface INotes {
  id: string;
  note: string;
  isPrivate: boolean;
}

export interface IPostNote {
  note: string;
  isPrivate: boolean;
  user: object | null;
}
