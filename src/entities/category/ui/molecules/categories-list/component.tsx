import { DirectionsSubwayOutlined, SoapOutlined } from "@mui/icons-material";
import { observer } from "mobx-react-lite";

import { categoryModel } from "root/entities/category";

import { CategoryItem } from "../..";
import { Template } from "./template";

export const Component = observer(() => {
  const { categories } = categoryModel;

  return (
    <Template
      items={
        <>
          {categories?.map(({ id, title }) => (
            <CategoryItem
              icon={
                id % 2 === 0 ? <SoapOutlined /> : <DirectionsSubwayOutlined />
              }
              id={id}
              title={title}
            />
          ))}
        </>
      }
    />
  );
});
