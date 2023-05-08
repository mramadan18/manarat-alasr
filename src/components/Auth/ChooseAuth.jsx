import { NavLink } from "react-router-dom";

const ChooseAuth = ({ pathOne, chooseOne, pathTwo, chooseTwo }) => {
  return (
    <>
      <div className="choose-auth my-3 mx-auto rounded-4 overflow-hidden">
        <NavLink to={pathOne} className="py-1 text-white w-50 d-inline-block">
          {chooseOne}
        </NavLink>
        <NavLink to={pathTwo} className="py-1 text-white w-50 d-inline-block">
          {chooseTwo}
        </NavLink>
      </div>
    </>
  );
};

export default ChooseAuth;
