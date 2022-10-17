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

function SidePanel(props) {
  return (
    <div className={styles.sidePanel}>
      <ul className={styles.sideLinks}>
        <li><HiOutlineHome /> <Link href="/"><a>Home</a></Link></li>
        <li><FiUsers /> <Link href="/users"><a>Users</a></Link></li>
        <li><BsGraphUp /> <Link href="/investment"><a>Investment</a></Link></li>
        <li><MdOutlineSavings /> <Link href="/savings"><a>Savings</a></Link></li>
        <li><IoWalletOutline /> <Link href="/wallet"><a>Wallet</a></Link></li>
        <li><AiOutlineUser /> <Link href="/profile"><a>Profile</a></Link></li>
        </ul>

        <ul className={styles.account}>
          <li> <HiOutlineKey /> <Link href="/change">Change password</Link></li>
          <li><IoLogOutOutline /><Link href="/">Logout</Link></li>
        </ul>
    </div>
  )
}

export default SidePanel