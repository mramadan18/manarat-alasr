import { useRef } from "react";
import BtnRemoveAndSortComp from "../Uitily/BtnRemoveAndSortComp";
import Category from "./Category";

const CategoryList = ({ categoryType, handleDragStart, handleDragEnd }) => {
  const componentTarget = useRef();

  return (
    <div
      className="container draggble"
      ref={componentTarget}
      onDragStart={() => handleDragStart(componentTarget)}
      onDragEnd={() => handleDragEnd(componentTarget)}
    >
      <BtnRemoveAndSortComp target={componentTarget} />
      <div className="categories-list d-flex justify-content-around my-2">
        {categoryType === "software" ? (
          <>
            <Category
              img={"images/categories/category-1.png"}
              title="الأجهزة وملحقاتها"
              path={"/category/121"}
            />
            <Category
              img={"images/categories/category-2.png"}
              title={"برامج حسب الطلب"}
            />
            <Category
              img={"images/categories/category-3.png"}
              title={"المتاجر الإلكترونية"}
            />
            <Category
              img={"images/categories/category-4.png"}
              title={"تجهيز الكاشير"}
            />
          </>
        ) : (
          <>
            <Category
              img={"/images/categories/category-5.jpeg"}
              title={"الأجهزة والشاشات"}
            />
            <Category
              img={"/images/categories/category-6.jpeg"}
              title={"الطابعات"}
            />
            <Category
              img={"/images/categories/category-7.jpeg"}
              title={"الأحبار"}
            />
            <Category
              img={"/images/categories/category-8.jpeg"}
              title={"الاكسسوارات"}
            />
            <Category
              img={"/images/categories/category-9.jpeg"}
              title={"المستخدم"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
