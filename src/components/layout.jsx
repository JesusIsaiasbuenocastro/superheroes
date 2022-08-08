import { Outlet } from "react-router-dom";
import Header from "./header";



const LayOut = () => {
    return ( 
        <>
        <Header></Header>
        <Outlet />
        </>
     );
}
 
export default LayOut;