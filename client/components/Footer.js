import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <BottomNavigation
      showLabels
      value={1}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    ></BottomNavigation>
  );
};

export default Footer;
