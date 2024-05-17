import { getSession } from "@/actions/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Premium() {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

  if(!session.isPro){
    return(
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
        <Link href="/profile">
          Go to the profile page to upgrade to premium
        </Link>
      </div>
    )
  }

    return (
      <main className="p-4">
        <h1>Premium</h1>
        <p>Welcome</p>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Peach</li>
        </ul>
      </main>
    );
  }
  