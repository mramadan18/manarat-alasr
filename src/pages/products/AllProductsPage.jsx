import { useState } from "react";
import Filter from "../../components/Uitily/Filter";
import Header from "../../components/Header/Header";
import SubTitle from "../../components/Uitily/SubTitle";
import Product from "../../components/Products/Product";

const AllProductsPage = () => {
  const [isList, setIsList] = useState(false);

  return (
    <>
      <Header />
      <div className="container mt-3">
        <SubTitle title="ألأكثر مبيعا" sizeTitle="fs-4" />
        <Filter isList={isList} setIsList={setIsList} />

        <div className="row">
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            isFavorite={false}
            isList={isList}
          />
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            isFavorite={false}
            isList={isList}
          />
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            isFavorite={false}
            isList={isList}
          />
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            isFavorite={false}
            isList={isList}
          />
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            isFavorite={false}
            isList={isList}
          />
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
