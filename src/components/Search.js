import { useLoaderData } from "react-router-dom";
import { useState } from "react";


// export const loader = async () => {
//     let response = await fetch(`http://localhost:4000/statements?q=${}`)
//     return await response.json();

// }

const Search = () => {
    // const statements = useLoaderData();
    // console.log(statements)
    // const [showModal, setShowModal] = useState(false);
    // const [itemClicked, setItemClicked] = useState(null);

    return ( 
        <>
        <form action="/statements">
            <input type="search"  name="q" placeholder="Search..."/>
        </form>
        </>
     );
}
 
export default Search;