export interface INotes {
  id: string;
  note: string;
  isPrivate: boolean;
}

export interface IPostNote {
  note: string;
  idUser: string;
  isPrivate: boolean;
}
