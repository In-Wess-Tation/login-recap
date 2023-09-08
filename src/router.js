import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Secrets, {loader as secretsLoader} from "./Pages/Secrets";
import ProtectedRoute from "./components/ProtectedRoute";
import Statements from "./Pages/Statements";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/login" element={<Login />}/> 
            {/* <Route path="/secrets" element={<Secrets />} loader={secretsLoader}/>  */}
            <Route
                path="secrets"
                element={
                    <ProtectedRoute>
                        <Secrets />
                    </ProtectedRoute>
                }
                loader={secretsLoader}
            />
            <Route path="/statements" element={<Statements />}/>
                      
        </Route>
    )
)

