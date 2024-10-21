import { CategoryItem } from "../..";
import { Template } from "./template";

const Item = <CategoryItem icon={<></>} id="" title="" />;

export const Fallback = () => (
  <Template
    items={
      <>
        {Item}
        {Item}
        {Item}
        {Item}
        {Item}
      </>
    }
  />
);
