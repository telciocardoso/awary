
import Sidebar from "../Sidebar";
import Card from '../Card';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Main (){
    return (
            <div> 
                <section className="section">
                    <Sidebar />
                 </section>
                 <section className="section-center-1">
                    <Card />
                 </section>
                 <section className="section-center-1">
                    <Card />
                 </section>
                 <section className="section-center-1">
                    <Card />
                 </section>
                 <section className="section-center-1">
                    <Card />
                 </section>

            </div>
                
    );
}

export default Main;