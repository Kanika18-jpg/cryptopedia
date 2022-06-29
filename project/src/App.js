import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import CoinPage from "./Pages/CoinPage";

const useStyles = makeStyles({

    App:{

        backgroundColor:"#14161a",
        color:"white",
        minHeight: "100vh",

    },
});
function App() {


        const classes = useStyles();


    
    return (
        <BrowserRouter>
        <div className={classes.App}>
            <Header />
          
        <Routes>
         <Route path="/" element={<Home/>} exact/>
         <Route path="/coins/:id" element={<CoinPage/>} exact/>
        </Routes>


            
        </div>
        </BrowserRouter>
    )
}

export default App;