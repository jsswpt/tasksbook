import { Template } from './template'

import { category } from '@/entities'

export const Fallback = () => (
  <Template
    children={[
      <category.CategoryItem isFallback key={1} />,
      <category.CategoryItem isFallback key={2} />,
      <category.CategoryItem isFallback key={3} />,
      <category.CategoryItem isFallback key={4} />,
      <category.CategoryItem isFallback key={5} />,
    ]}
  />
)
