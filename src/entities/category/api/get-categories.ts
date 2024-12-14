import categoriesJson from '@/shared/mock/category.json'

type Response = Array<{
  id: number
  creator_id: number
  title: string
}>

type GetCategoriesReq = {
  (): Promise<Response>
}

export const getCategoriesReq: GetCategoriesReq = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(categoriesJson.list)
    }, 3000)
  )
