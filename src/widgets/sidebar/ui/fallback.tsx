import { CategoriesList } from "root/entities/category";

import { Template } from "./template";

export const Fallback = () => <Template categories={<CategoriesList />} />;
