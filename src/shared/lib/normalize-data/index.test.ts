import { describe, expect, test } from 'vitest'

import { normalizeData } from '.'

const mockArr = Array(5)
  .fill(undefined)
  .map((_, idx) => ({ id: idx + 1, title: `Item ${idx + 1}` }))

const expectedResult = {
  1: {
    id: 1,
    title: `Item 1`,
  },
  2: {
    id: 2,
    title: `Item 2`,
  },
  3: {
    id: 3,
    title: `Item 3`,
  },
  4: {
    id: 4,
    title: `Item 4`,
  },
  5: {
    id: 5,
    title: `Item 5`,
  },
}

describe('Normalize data', () => {
  test('Test if function works correctly', () => {
    expect(normalizeData(mockArr)).toStrictEqual(expectedResult)
  })
})
