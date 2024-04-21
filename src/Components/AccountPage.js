import '../Styles/AccountSetting.css';
import CameraIcon from './Icons/CameraIcons';

function AccountSetting(){
    return(
        <div className="Background">
            <div className="containers">
                <div className='headding'>
                    <h1>Account Settings</h1>
                </div>
                <div className='mainsections'>
                    <div className='profile-info'>
                        <div className='image-container'>
                            <img src='https://th.bing.com/th/id/OIP.H16qEA7qO-s9u75504DPhAHaLH?rs=1&pid=ImgDetMain' className='Image' alt=''/>
                            <div className='camera-icon'>
                               <CameraIcon/>
                            </div>
                        </div>
                        <div className='text-info'>
                            <h4>Marry Doe</h4>
                            <h8>Marry@Gmail.Com</h8>
                        </div>
                    </div>
                </div>

                <div className='text-container'>
                    <p>Lorem Ipsum Doler Sit Amet, Consetetur Sadipscing<br></br>Elitr , Sed Diam Nonumy Eirmod Tempor Invidunt Ut <br></br> Labore Et Doler Magna Aliquyum Erat, Sed Diam</p>
                </div>

            </div>
        </div>
    )
}

export default AccountSetting;


