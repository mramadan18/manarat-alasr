import Header from "../../components/Header/Header";
import SliderAds from "../../components/Uitily/SliderAds";
import CategoryList from "../../components/Category/CategoryList";
import SliderProductsList from "../../components/Products/SliderProductsList";
import ServicesList from "../../components/Service/ServicesList";
import BrandsList from "../../components/Brand/BrandsList";
import Footer from "../../components/Footer/Footer";
import CustomTheme from "../../components/Custom/CustomTheme";
import { useRef } from "react";

const HomePage = () => {
  const dragOverDiv = useRef();

  const handleDragStart = ({ current }) => {
    current.classList.add("dragging");
  };

  const handleDragOver = (e) => {
    const afterElement = getDragAfterElement(dragOverDiv.current, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement === null) {
      dragOverDiv.current.appendChild(draggable);
    } else {
      dragOverDiv.current.insertBefore(draggable, afterElement);
    }
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggble:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  const handleDragEnd = ({ current }) => {
    current.classList.remove("dragging");
    current.setAttribute("draggable", "false");
    current.style.boxShadow = "none";
  };

  return (
    <>
      <Header />
      <SliderAds />
      <div className="drag-over" ref={dragOverDiv} onDragOver={handleDragOver}>
        <CategoryList
          categoryType="software"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <SliderProductsList
          title="الأكثر مبيعا"
          titleBtn="عرض الكل"
          path="/products"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <ServicesList
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <CategoryList
          categoryType="device"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <SliderProductsList
          title="الأجهزة والطابعات"
          titleBtn="عرض الكل"
          path="/products"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <SliderProductsList
          title="الأحبار"
          titleBtn="عرض الكل"
          path="/products"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <SliderProductsList
          title="الأكسسوارات"
          titleBtn="عرض الكل"
          path="/products"
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <BrandsList
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
      </div>
      <Footer />
      <CustomTheme />
    </>
  );
};

export default HomePage;
