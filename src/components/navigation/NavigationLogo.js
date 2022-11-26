import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/icon-black.png";
import ResetLocation from "../../helpers/ResetLocation";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ResetLocation();
        props.closeMenu();
      }}
    >
      <img
        style={
          {
            // margin: "2rem 5rem",
          }
        }
        src={IconBlack}
        alt="logo"
      ></img>
    </NavLink>
  );
};

export default NavigationLogo;
