import Cookies from "js-cookie";
import { useLoaderData } from "react-router-dom";

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


    return ( 
    <>
        <h1>Secrets</h1>

    </>

     );
}
 
export default Secrets;