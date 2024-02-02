
import Sidebar from "../Sidebar";
import Login from '../Login';
import Header from "../Header";
import Footer from "../Footer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Home (){
    return (
            <div> 
                 <div>
                    <Header />    
                    
                </div>
           
                    <div class="main">
                        <Sidebar />
         
                    </div>              
                <div>
                        <Footer />
                </div>
            </div>
                
    );
}

export default Home;