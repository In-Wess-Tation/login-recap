import { useLoaderData } from "react-router-dom";


export const loader = async ({request}) => {

    let url = new URL(request.url)
    let params = url.searchParams.get("q")

    let response = await fetch(
        `http://localhost:4000/statements${params ? `?q=${params}` : ''}`

    );

    return await response.json();

};


const Statements = () => {

//   const [searchParams] = useSearchParams();

//   console.log(searchParams.get("q"));

    const statements = useLoaderData();

    console.log(statements);

     return (
        <>
        <h1>Statements</h1>
        {statements.map(statement => (
                    <div key={statement.id}>
                        <p>{statement.sentence}</p>
                    </div>
                ))} 
        </>
  );

};

 

export default Statements;