import HomeRepo from "./HomeRepo";
import ProductDetailsRepo from "./ProductDetailsRepo";
import CategoryRepo from "./CategoryRepo";
import CategoryDetail from "./CategoryDetail";
export default ($axios) => ({
  home: HomeRepo($axios),
  productDetail: ProductDetailsRepo($axios),
  category: CategoryRepo($axios),
  categoryDetail: CategoryDetail($axios)
})
