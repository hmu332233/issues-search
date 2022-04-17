export const normalizeBy = (key: string) => {
  return (data: { [key: string]: any }, item: any) => {
    data[item[key]] = item
    return data;
  }
};

export const normalizeData = <T>(data: any[], key: string): NormalizedData<T> => {
  return {
    ids: data.map(item => item[key]),
    entities: data.reduce(normalizeBy(key), {}),
  };
};