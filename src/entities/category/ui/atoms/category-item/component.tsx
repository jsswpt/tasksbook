import { Template } from "./template";

type Component = {
  icon: JSX.Element;
  title: string;
  id: number;
};

export const Component = ({ icon, id, title }: Component) => (
  <Template icon={icon} title={title} id={id} />
);
