import { DirectionsSubwayOutlined, SoapOutlined } from "@mui/icons-material";

import { CategoryItem } from "../..";
import { Template } from "./template";

export const Component = () => (
  <Template
    items={
      <>
        {Array(50)
          .fill(0)
          .map((_, idx) => (
            <CategoryItem
              icon={
                idx % 2 === 0 ? <SoapOutlined /> : <DirectionsSubwayOutlined />
              }
              id={idx.toString()}
              title={`Menu item ${idx + 1}`}
            />
          ))}
      </>
    }
  />
);
