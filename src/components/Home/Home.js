import React, {Component} from 'react';
import './Home.css';


class Home extends Component {
   render() {
 return (
 <div  id="Body">
     <nav className="nav">
         <ul>
             <li>
                 <a href='./'>Home</a>
                 <a href='./login'>Login</a>
                 <a href='./forgetpassword'>Forget Password?</a>
             </li>
         </ul>
     </nav>
 </div>
);
}
}
export default Home;