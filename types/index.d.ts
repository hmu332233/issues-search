type NormalizedData<T> = {
  ids: string[];
  entities: { [key: string]: T };
};

type SearchItem = {
  id: string;
  title: string;
  contents: string;
  url: string;
};