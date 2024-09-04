import NavBarButton from "./NavBarButton";
import { useState } from "react";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    return (
        <>
            <div className="navbarbuttons">
                <NavBarButton type={'home'}/>
                <NavBarButton type={'about'}/>
                <NavBarButton type={'resume'} />
                <NavBarButton type={'portfolio'}/>
                <NavBarButton type={'contact'}/>
            </div>
          

            {/* <nav className="navbar">
                <ul>
                    <li><a href="#block-1">About</a></li>
                    <li><a href="#block-2">Resume</a></li>
                    <li><a href="#block-3">Portfolio</a></li>
                    <li><a href="#block-4">Contact</a></li>
                </ul>
            </nav> */}
        </>

        // create the button
        // position the button properly
        // add functionality to the buttons
            // import 5 different icons



    //   
    );
  }

  export default Navbar