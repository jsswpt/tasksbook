export type Normalized<T> = Record<number, T>

export const normalizeData = <T extends { id: number | string }>(
  data: Array<T>
): Normalized<T> =>
  data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
