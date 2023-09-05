import Cookies from "js-cookie";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const loader = async () => {
    let token = Cookies.get("token")

    try {
      let response = await fetch("http://localhost:4000/secrets", {
        //Standert metoden er "GET", så derfor må man godt udlade den
        headers: {
            //Der skal være mellemrum efter "Bearer"
            Authorization: "Bearer " + token,
            //kunne også stå sådan her "`Bearer ${token}`"
        }
    })

    
    return await response.json()  
    } catch (error) { 
        return error
    }

}

const Secrets = () => {

    const data = useLoaderData();
    console.log(data)
    const { user } = useContext(UserContext);



    return ( 
    <>
        <h1>Secrets</h1>
        
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.id}</p>
    </>

     );
}
 
export default Secrets;