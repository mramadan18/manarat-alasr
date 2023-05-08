import Service from "./Service";
import {
  faChalkboard,
  faHeadset,
  faTools,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const ServicesList = () => {
  return (
    <div className="container">
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
