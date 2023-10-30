import Header from "../../components/Header/Header";
import SliderAds from "../../components/Uitily/SliderAds";
import CategoryList from "../../components/Category/CategoryList";
import SliderProductsList from "../../components/Products/SliderProductsList";
import ServicesList from "../../components/Service/ServicesList";
import BrandsList from "../../components/Brand/BrandsList";
import Footer from "../../components/Footer/Footer";
import CustomTheme from "../../components/Custom/CustomTheme";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HomePage = () => {
  const [components, setComponents] = useState([
    {
      id: "1",
      content: <CategoryList categoryType="software" />,
    },
    {
      id: "2",
      content: (
        <SliderProductsList
          title="الأكثر مبيعا"
          titleBtn="عرض الكل"
          path="/products"
        />
      ),
    },
    {
      id: "3",
      content: <ServicesList />,
    },
    {
      id: "4",
      content: <CategoryList categoryType="device" />,
    },
    {
      id: "5",
      content: (
        <SliderProductsList
          title="الأجهزة والطابعات"
          titleBtn="عرض الكل"
          path="/products"
        />
      ),
    },
    {
      id: "6",
      content: (
        <SliderProductsList
          title="الأحبار"
          titleBtn="عرض الكل"
          path="/products"
        />
      ),
    },
    {
      id: "7",
      content: (
        <SliderProductsList
          title="الأكسسوارات"
          titleBtn="عرض الكل"
          path="/products"
        />
      ),
    },
    {
      id: "8",
      content: <BrandsList />,
    },
  ]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setComponents(items);
  }

  return (
    <>
      <Header />
      <SliderAds />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="components">
          {(provided) => (
            <div
              className="container-dragble"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {components.map(({ id, content }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {content}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* {components.map((component, index) => {
        return (
          <div
            key={index}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            {component.content}
          </div>
        );
      })} */}
      {/* <div className="drag-over" ref={dragOverDiv} onDragOver={handleDragOver}>
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
      </div> */}
      <Footer />
      <CustomTheme />
    </>
  );
};

export default HomePage;
