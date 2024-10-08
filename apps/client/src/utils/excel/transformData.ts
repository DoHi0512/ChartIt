export const transformToBar = (data: any) => {
  const [header, ...rows] = data;
  const value = rows.map((row: any) => {
    const result: Record<string, number | string> = {};
    header.forEach((key: any, idx: number) => {
      const value = row[idx];
      result[key] = value;
    });
    return result;
  });
  return {
    keys: header?.slice(1),
    value: value,
    indexBy: header?.slice(0, 1),
  };
};
export const transformToPie = (data: any) => {
  const result = data
    .slice(1)
    .map((item: any) => ({ id: item[0], value: item[1] }));

  return result;
};
