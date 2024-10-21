import { MenuList } from "@mui/material";

type TemplateProps = {
  items: JSX.Element;
};

export const Template = ({ items }: TemplateProps) => (
  <MenuList component="div">{items}</MenuList>
);
