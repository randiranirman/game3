
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Navbar.css';
const Navbar = ({setShowLogin}) => {

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                   <Link to={'/'}> <  img  src={assets.logo} alt="" /></Link>
                   
                </div>
                <div className="navbar-right">
                    <ul className="navbar-right-list">
                        <Link to={'/apps'} style={{textDecoration:"none"}}><li className="navbar-right-list-item">Apps</li></Link>
                        <Link to={'/blog'} style={{textDecoration:"none"}} ><li className="navbar-right-list-item">Blog</li></Link>
                        <li  onClick={() =>setShowLogin(true)} className="navbar-right-list-item">Sign in</li>
                        <li className="navbar-right-list-item"> <span className="language-icon"><img src={assets.newLanguageicon} alt="" /></span>EN</li>


                    </ul>
                </div>


            </div>
        </>
    )
}

export default Navbar
