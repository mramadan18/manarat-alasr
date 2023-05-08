import { useState } from "react";
import Filter from "../../components/Uitily/Filter";
import Header from "../../components/Header/Header";
import ProductsView from "../../components/Products/ProductsView";
import SubTitle from "../../components/Uitily/SubTitle";

const AllProductsPage = () => {
  const [isList, setIsList] = useState(false);

  return (
    <>
      <Header />
      <div className="container mt-3">
        <SubTitle title="ألأكثر مبيعا" sizeTitle="fs-4" />
        <Filter isList={isList} setIsList={setIsList} />
        <ProductsView isList={isList} />
      </div>
    </>
  );
};

export default AllProductsPage;
