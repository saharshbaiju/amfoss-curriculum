import "./sidebar.css"
import { useState } from "react"
export default function Sidebar({onNavigate}){

    const [active, setActive] = useState("home");
    const handleNavigation = (tab_name) => {
        setActive(tab_name);
        onNavigate(tab_name);
    }
     
    return (
            <div className="side bar glass">
                <div className="logo" ><p>MeloFi</p></div>

                <button
                className={active === "home" ? "navbutton active" : "navbutton"}
                onClick={() => handleNavigation("home")}>
                    HOME
                </button>

                <button className={active === "artist" ? "navbutton active" : "navbutton"}
                onClick={() => handleNavigation("artist")}>
                    ARTIST
                </button>

                
        </div>
    )
}