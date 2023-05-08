import Category from "./Category";

const CategoryList = ({ categoryType }) => {
  return (
    <div className="container">
      <div className="categories-list d-flex justify-content-around my-2">
        {categoryType === "software" ? (
          <>
            <Category
              img={"images/categories/category-1.png"}
              title={"الأجهزة وملحقاتها"}
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
              img={"images/categories/category-5.jpeg"}
              title={"الأجهزة والشاشات"}
            />
            <Category
              img={"images/categories/category-6.jpeg"}
              title={"الطابعات"}
            />
            <Category
              img={"images/categories/category-7.jpeg"}
              title={"الأحبار"}
            />
            <Category
              img={"images/categories/category-8.jpeg"}
              title={"الاكسسوارات"}
            />
            <Category
              img={"images/categories/category-9.jpeg"}
              title={"المستخدم"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
