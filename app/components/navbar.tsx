import Link from "next/link";
// import { getSession } from "@/actions/actions";

// import LogoutForm from "./logoutForm";

export default async function Navbar() {
//   const session = await getSession()
//   console.log(session)

  return (
    <nav>
        <Link href="/">Homepage</Link>
        {/* {session.isLoggedIn && <Link href="/premium">Premium</Link>}
        {session.isLoggedIn && <Link href="/profile">Profile</Link>}
        {!session.isLoggedIn && <Link href="/login">Login</Link>}
        {session.isLoggedIn && <LogoutForm/>} */}
    </nav>
  )
}