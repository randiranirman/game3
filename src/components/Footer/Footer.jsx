
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <div className="footer-container">
          <div   className="footer-left">
                <p>GAME RECOMMENDER</p>
                <br />
                <p>Quantic Foundry is a market research company focused on gamer motivation. We combine social science with data science to understand what drives gamers.</p>

          </div>
          <div className="footer-center">
            <p>GET SOCIAL</p>
            <div className="footer-center-social-icons">
              <img src={assets.x_icon}alt="" />
              <img src={assets.facebook_icon} alt="" />
            </div>
          </div>

          <div className="footer-right">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li >Contact us </li>
            </ul>
          </div>

        </div>
            
    </>
  )
}

export default Footer
