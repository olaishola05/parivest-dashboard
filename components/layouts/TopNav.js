import Link from "next/link"

function TopNav () {
  return (
    <nav>
      <ul>
        <li>Parivest</li>
        <li><Link href="/">Home</Link></li>
      </ul>
    </nav>
  )
}

export default TopNav