import { CategoryItem } from "../..";
import { Template } from "./template";

const Item = <CategoryItem isFallback />;

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
