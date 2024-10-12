
import { assets } from '../../assets/assets'
import './Profile.css'

const Profile = () => {
    return (
        <>
            <div className="profile-container">
                <div className="container-left"><img src={assets.profile_img} alt="" /></div>
                <div className="container-center">
                    <p className="container-center-para">See how You compete with Other gamers <br />Take a 5 minute survey and ger Your Gamer Motivation Profile </p>

                    <p className="container-center-para"> </p>
                        <button className="button">Get Your Profile</button>
                </div>
                <div className="container-right"><img src={assets.profile_img} alt="" /></div>
            </div>

        </>

    )
}

export default Profile
