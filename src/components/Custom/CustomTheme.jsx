import { useState } from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomTheme = () => {
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div className={`custom ${showCustom && "show"}`}>
      <div className="cog" onClick={() => setShowCustom(!showCustom)}>
        <FontAwesomeIcon icon={faCog} className="text-white" />
      </div>
    </div>
  );
};

export default CustomTheme;
