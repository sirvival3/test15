import Link from "next/link";
import { getSession } from "../actions/actions";

import LogoutForm from "./logoutForm";

export default async function Navbar() {
  const session = await getSession()

  return (
    <nav className="border-b-2 border-gray-100">
        <Link className="p-2" href="/">Hjem</Link>
        <Link className="p-2" href="/blogs">Blog</Link>
        {session.isLoggedIn && <Link className="p-2" href="/assignments">Opgavesæt</Link>}
        {session.isLoggedIn && <Link className="p-2" href="/dashboard">Dashboard</Link>}
        {!session.isLoggedIn && <Link className="p-2" href="/login">Login</Link>}
        {session.isLoggedIn && <LogoutForm/>}
    </nav>
  )
}