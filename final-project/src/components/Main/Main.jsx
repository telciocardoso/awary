
import Sidebar from "../Sidebar";
import Card from '../Card';
import Header from '../Header';
import Footer from '../Footer';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Main (){
    return (
            <div> 
                <Header />
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
                 <Footer />

            </div>
                
    );
}

export default Main;