import { FaAllergies, FaClock, FaFacebook, FaHamburger, FaHome, } from "react-icons/fa";

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src="http://creatorsgram.online/wp-content/uploads/fast-and-up.png" className="img" />
            </div>

            <div className="">
                <p> <FaHome /><a className="dashboard">Dashboard</a>
                </p>
                <p><FaClock /><a className="uptime" >UpTime</a></p>
                <p><FaFacebook /><a className="speed" >Speed</a></p>
                <p><FaHamburger /><a className="statuspages" >Status</a></p>
                <p><FaAllergies /><a className="alert"> Alert </a></p>

            </div>

        </div>

    )
}
export default Sidebar;