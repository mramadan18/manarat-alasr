import { useRef } from "react";
import BtnRemoveAndSortComp from "../Uitily/BtnRemoveAndSortComp";
import Service from "./Service";
import {
  faChalkboard,
  faHeadset,
  faTools,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const ServicesList = ({ handleDragStart, handleDragEnd }) => {
  const componentTarget = useRef();

  return (
    <div
      className="container mt-3 draggble"
      ref={componentTarget}
      onDragStart={() => handleDragStart(componentTarget)}
      onDragEnd={() => handleDragEnd(componentTarget)}
    >
      <BtnRemoveAndSortComp target={componentTarget} />
      <div className="service-list my-2 px-2">
        <div className="row">
          <Service icon={faTruck} title={"توصيل سريع"} />
          <Service icon={faChalkboard} title={"تدريب"} />
          <Service icon={faHeadset} title={"دعم فني"} />
          <Service icon={faTools} title={"ضمان الأجهزة"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
