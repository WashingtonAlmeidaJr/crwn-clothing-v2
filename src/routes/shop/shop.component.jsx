import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../categories-preview/categories-preview.component";

const Shop = () => {

  return (
    <Routes>
        <Route index element={<CategoryPreview/>}/>
    </Routes>
  );
};

export default Shop;
