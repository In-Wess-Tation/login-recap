import '../App.css';
import { Formik, Field, Form } from 'formik';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

    return ( 
        <Formik
            initialValues={{
                email: "", 
                password: ""
            }}
            onSubmit={async(values) => {
                //Vi laver et fetch med en POST method
                fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                .then(response => response.json())
                .then(data => {
                    Cookies.set("token", data.accessToken)
                    console.log(data)
                    //Vi laver en const der bruger "useNavigate" og bruger den her
                    //Det den gør er at når man logger ind bliver man redirected til forsiden
                    navigate("/");
                })
                console.log(values)
            }}
        >

        <Form>
            <h1>Login</h1>
            <Field name="email" type="email"/>
            <Field name="password" type="password"/>
            <button type="submit">Log in</button>
        </Form>


        </Formik>
     );
}
 
export default Login;