type UserResponse = {
  id: number;
  first_name: string;
  last_name: string;
  nick_name: string;
  avatar?: string;
};

export const authorizeOnLoadReq = () =>
  new Promise<UserResponse>((res) => {
    setTimeout(() => {
      res({
        avatar: "",
        first_name: "Johnn",
        id: 1,
        last_name: "Doe",
        nick_name: "jsswpt",
      });
    }, 1000);
  });
