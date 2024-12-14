export type Normalized<T> = Record<number, T>

export const normalizeData = <T extends { id: number }>(
  data: Array<T>
): Normalized<T> =>
  data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
