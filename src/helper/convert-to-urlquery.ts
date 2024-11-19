export const parseRequest = <T extends object>(props: T): { query: URLSearchParams } => {
  const query = new URLSearchParams();
  Object.entries(props).forEach(([key, value]) => value !== undefined && query.append(key, String(value)));
  return { query };
};
