import Link from "next/link"
import Image from 'next/image'
import Logo from '../../public/parivest1.png'
import userPhoto from '../../public/user.jpeg'
import styles from './Layout.module.css';
import { TfiReload } from 'react-icons/tfi'
import { IoIosNotificationsOutline } from 'react-icons/io'

function TopNav (props) {
  return (
    <nav className={styles.topnav}>
      <div className={styles.navImage}>
        <Image src={Logo} alt="logo" layout='responsive' />
      </div>
      <ul className={styles.lists}>
        <li><TfiReload /></li>
        <li><IoIosNotificationsOutline /></li>
        <li>
          <div className={styles.user}>
            <div>
              <span>Sun Kim</span> <br />
              <small>Super Admin</small>
            </div>
            <div className={styles.userImage}>
              <Image src={userPhoto} alt="user" layout='responsive' />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav