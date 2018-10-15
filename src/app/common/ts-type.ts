
export class Book {
  id: number;
  cover: string;
  intro: string;
  lastModified: string;
  name: string;
  author: string;
  category: string;
  state: string;
  isAdd: string;
  catalog: object[];
}

export class Chapter {
  id: number;
  bookId: number;
  content: string;
  next: number;
  last: number | null;
  title: string;
}
