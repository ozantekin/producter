import HomeIcon from '../../assets/icon/home-alt.svg'
import ChatIcon from '../../assets/icon/chat.svg'
import Dashboardcon from '../../assets/icon/dashboard.svg'
import Explorecon from '../../assets/icon/explore.svg'
import Repeatcon from '../../assets/icon/repeat.svg'
import InviteIcon from '../../assets/icon/invite.svg'
import ChatAltIcon from '../../assets/icon/chat-alt.svg'
import BellIcon from '../../assets/icon/bell.svg'
import UserIcon from '../../assets/img/user.svg'

import './Left-Menu.scss'

export default function Menu() {
  return (
    <main className='menu-main'>
      <div className='menu-main-container'>
        <div className='line-6'></div>
        <div className='menu-left-border-left'> </div>
        <div className='menu-top'>
          <ul>
            <li>
              <i>
                <img src={HomeIcon} alt='Home Icon' />
              </i>
              <span> Dashboard </span>
            </li>
            <li>
              <i>
                <img src={ChatIcon} alt='Chat Icon' />
              </i>
              <span> Feedback </span>
            </li>
            <li className='active'>
              <div className='active-text'>
                <i>
                  <img src={Dashboardcon} alt='Task Icon' />
                </i>
                <span> Task </span>
              </div>
              <span className='rectangle'> </span>
            </li>
            <li>
              <i>
                <img src={Explorecon} alt=' Roadmap Icon' />
              </i>
              <span> Roadmap </span>
            </li>
            <li>
              <i>
                <img src={Repeatcon} alt=' Repeat Icon' />
              </i>
              <span> Changelog </span>
            </li>
          </ul>
        </div>

        <div className='menu-bottom'>
          <ul className='menu-bottom-top'>
            <li>
              <i>
                <img src={InviteIcon} alt='Invite Icon' />
              </i>
              <span> Invite People </span>
            </li>
            <li>
              <i>
                <img src={ChatAltIcon} alt='Chat Alt Icon' />
              </i>
              <span> Help & Community </span>
            </li>
            <li>
              <i>
                <img src={BellIcon} alt='Bell Icon' />
              </i>
              <span> Notifications </span>

              <span className='rectangle'> </span>
            </li>
          </ul>
          <ul className='menu-bottom-bottom'>
            <li className='border'></li>
            <li className='user'>
              <div className='user-img'>
                <img src={UserIcon} alt='User Icon' />
              </div>

              <span> Neil Larkins </span>
            </li>
            <li className='border'></li>
            <li className='company'>
              <div className='company-img'> E </div>
              <span> Epodpay Inc. </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
