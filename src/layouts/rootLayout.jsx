import { Outlet } from "react-router-dom";
import Footers from "../components/footers";
import Navbar from "../components/navbar";

const RootLayout = () => {
    return <>
    <Navbar/> 
    <Outlet/>
    <Footers/>
   

    </>;

}

export default RootLayout