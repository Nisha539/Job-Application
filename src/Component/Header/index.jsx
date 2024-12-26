import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css' 
 
 
const Header = ()=>{ 


     //------------------------------------------------------------------------------------------------
     // logout button concept : After click on logout btn how to navigate on login page.

          const navigate = useNavigate();

          const onLogout = ()=>{

              Cookies.remove("jwtToken");

              navigate("/login");

          }

     //--------------------------------------------------------------------------------------------------------

     
 
    return ( 
 
        <nav className='my-nav'> 
                <Link to = "/">  
                    <h3 className=' text-success'>Get your Job</h3>
                </Link> 
 
                <ul className='nav-ul-cont'> 
                    <li> 
                        <Link to = "/" className='my-nav-items'>Home</Link> 
                    </li> 
                    <li> 
                        <Link to = "/jobs" className='my-nav-items'>Jobs</Link> 
                    </li> 
                </ul> 
 
                <button onClick={onLogout} className='btn btn-success'>Logout</button> 
 
        </nav> 

    ) 
} 
 
 
export default Header;