import { getSession } from "../actions/actions";
import { redirect } from "next/navigation";

export default async function Blogs() {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

  if(session.isBlocked){
    return(
      <div className="notPremium">
        <h1>Du er blevet blokeret!</h1>
      </div>
    )
  }

    return (
      <main className="p-4">
        <h1>Blogs</h1>
        <p>Welcome</p>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Peach</li>
        </ul>
      </main>
    );
  }
  