type CategoriesResponse = Array<{
  id: number;
  title: string;
}>;

export const getCategoriesReq = () =>
  new Promise<CategoriesResponse>((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          title: "Дом",
        },
        {
          id: 2,
          title: "Работа",
        },
        {
          id: 3,
          title: "Хобби",
        },
        {
          id: 4,
          title: "Книги",
        },
        {
          id: 5,
          title: "Планы на выходные",
        },
        {
          id: 6,
          title: "Учёба",
        },
        {
          id: 7,
          title: "Планы на лето",
        },
      ]);
    }, 2000);
  });
