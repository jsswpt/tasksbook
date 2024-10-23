type TasksResponse = {
  category_id: number;
  id: number;
  title: string;
  isDone: boolean;
};

export const getTasksByCategoryIdReq = (categoryId: number) =>
  new Promise<Array<TasksResponse>>((res) => {
    setTimeout(() => {
      res(
        Array(50)
          .fill(0)
          .map((_, idx) => ({
            category_id: categoryId,
            id: categoryId * 50 + idx + 1,
            isDone: idx % 10 === 0,
            title: `Task #${categoryId * 50 + idx + 1} of category #${categoryId}`,
          })),
      );
    }, 5000);
  });
