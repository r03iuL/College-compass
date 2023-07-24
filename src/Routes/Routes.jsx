import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Layout/Home/Home';
import Colleges from "../Layout/Colleges/Colleges";
import Admission from './../Layout/Admission/Admission';
import MyAdmission from "../Layout/MyAdmission/MyAdmission";
import Registration from './../Layout/Registration/Registration';
import Error from './../Layout/Error/Error';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/Admission",
        element: <Admission></Admission>,
      },
      {
        path: "/MyAdmission",
        element: <MyAdmission></MyAdmission>,
      },
      
      {
        path: "/Login",
        element: <login></login>,
      },
      
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      
    ],
  },{
    path:"*",
    element:<Error></Error>
  }
]);
