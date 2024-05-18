import { getSession } from "../actions/actions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
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
        <h1>Profil</h1>
        <p>
          Velkommen, <b>{session.username}</b>
        </p>
        <span>Du er <b>{session.role}</b></span>
      </main>
    );
  }
  