import { Route , Routes } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Jobs from "./Component/Jobs";
import NotFound from "./Component/NotFound";
import ProtectedRoute from "./Component/protectedRoute";


const App = ()=> (


     <Routes>

         
         <Route path="/" element = {<ProtectedRoute Component = {Home}/> }></Route>

         
         <Route path="/login" element = { <Login/> }></Route>

   
         <Route path="/jobs" element = {<ProtectedRoute Component = {Jobs}/> }></Route>
         

         <Route path="/*" element = { <NotFound/> }></Route>  // after / write anything then we go to not found pg.


     </Routes>
     
    
    )

export default App;