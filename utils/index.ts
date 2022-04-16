export const normalizeBy = (key: string) => {
  return (data: { [key: string]: any }, item: any) => {
    data[item[key]] = item
    return data;
  }
};

export const normalizeData = (data: any[], key: string) => {
  return {
    ids: data.map(item => item[key]),
    entities: data.reduce(normalizeBy(key), {}),
  };
};