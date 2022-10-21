import React from 'react'
import Link from 'next/link'
import styles from './Dashboard.module.css'
import { HiOutlineHome } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { BsGraphUp } from 'react-icons/bs'
import { MdOutlineSavings } from 'react-icons/md'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineKey } from 'react-icons/hi'
import { IoLogOutOutline } from 'react-icons/io5'

const sideLinks = [
  { icons: <HiOutlineHome />, link: '/home', text: 'Home' },
  { icons: <FiUsers />, link: '/users', text: 'Users' },
  { icons: <BsGraphUp />, link: '#', text: 'Investment' },
  { icons: <MdOutlineSavings />, link: '#', text: 'Savings' },
  { icons: <IoWalletOutline />, link: '#', text: 'Wallet' },
  { icons: <AiOutlineUser />, link: '#', text: 'Admins' },
]

function SidePanel(props) {
  return (
    <div className={styles.sidePanel}>
      <ul className={styles.sideLinks}>
        {sideLinks.map((link, index) => (
          <li key={index}>
            {link.icons} <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
        </ul>

        <ul className={styles.account}>
          <li> <HiOutlineKey /> <Link href="/change">Change password</Link></li>
          <li><IoLogOutOutline /><Link href="/">Logout</Link></li>
        </ul>
    </div>
  )
}

export default SidePanel