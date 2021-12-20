export interface List {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  listId: number;
  title: string;
}

export interface Bookmark {
  videoId: number;
  time: number;
}