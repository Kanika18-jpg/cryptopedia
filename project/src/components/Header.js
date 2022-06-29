import React from "react";
import {useNavigate} from "react-router-dom";
import {AppBar,Container,Typography,Toolbar,Select, MenuItem,createTheme,ThemeProvider} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { CryptoState } from "../CryptoContext";
const useStyles = makeStyles({
    title: {
            flex: 1,
            color: 'gold',
            fontFamily:"Montserrat",
            fontweight: "bold",
            cursor:"pointer",
    },
});
const Header = () =>{

    const classes =useStyles();
    const { currency, setCurrency } = CryptoState();
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
          primary: {
              main:"#fff",
          },
          type: 'dark',
        },
      });
    return(
        <ThemeProvider theme={darkTheme}>
       <AppBar color="transparent" position="static">

        <Container>
            <Toolbar>
            <Typography  onclick={()=>navigate("/")} 
            variant="h6" style= {{fontWeight:'bold'}}
            className={classes.title}   >
             CryptoPedia 
            </Typography>
            
            <Select  variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}>

            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
             </Toolbar>
        </Container>


       </AppBar>
       </ThemeProvider>
    );
}

export default Header;