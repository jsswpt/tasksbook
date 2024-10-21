import { Template } from "./template";

type Component = {
  icon: JSX.Element;
  title: string;
  id: string;
};

export const Component = ({ icon, id, title }: Component) => (
  <Template icon={icon} title={title} id={id} />
);
