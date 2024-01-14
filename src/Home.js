import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@mui/material/Button';

export default function Home() {
  // let navigate= useNavigate()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Button color="inherit" onClick={()=>{navigate("Home")}} >Home</Button>
          <Button color="inherit" onClick={()=>{navigate("MyTrips")}} >My Trips</Button>
          <Button color="inherit" onClick={()=>{navigate("Favorite")}} >Favorite</Button> */}

        </Toolbar>
      </AppBar>
    </>

  );
}
