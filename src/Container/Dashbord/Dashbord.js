import NavBarLogic from "../NavBar/NavBarLogic";
import DashbordGridLogic from "./DashbordGrid/DashbordGridLogic";

const Dashbord = (props) => {
  return (
    <div className="dashbord-wrapper flex">
      <NavBarLogic />
      <DashbordGridLogic {...props} />
    </div>
  );
};

export default Dashbord;
