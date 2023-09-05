import '../App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid, please enter a valid email...").required("Email is required"),
    password: Yup.string().min(6, "password is too short!").required("Password is required!")
})

const Login = () => {

    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    return ( 
        <Formik
            initialValues={{
                email: "", 
                password: ""
            }}
            validationSchema={LoginSchema}
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
                    setUser(data.user)
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
            <ErrorMessage name='email' />
            <Field name="password" type="password"/>
            <ErrorMessage name='password' />
            <button type="submit">Log in</button>
        </Form>


        </Formik>
     );
}
 
export default Login;