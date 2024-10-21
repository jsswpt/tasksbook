type UserResponse = {
  id: number;
  first_name: string;
  last_name: string;
  nick_name: string;
  avatar?: string;
};

export const authorizeOnLoadReq = () =>
  new Promise<UserResponse>((res, rej) => {
    setTimeout(() => {
      if (Date.now() % 2 === 0) {
        rej(new Error("Some error"));
      }
      res({
        avatar: "",
        first_name: "Johnn",
        id: 1,
        last_name: "Doe",
        nick_name: "jsswpt",
      });
    }, 1000);
  });
