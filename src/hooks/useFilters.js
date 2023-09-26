import { useProductContext } from "../context/ProductsContext";

const useFilters = () => {
  const { filters, setFilters } = useProductContext();

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (product.category === "all" || filters.category === product.category) //la categoria ira cambiando en el estado con los filtros
    );
  };

  return { filterProducts, setFilters, filters };
};

export default useFilters;
