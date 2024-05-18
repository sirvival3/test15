import { changePremium, changeUSername, getSession } from "../actions/actions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

    return (
      <main className="p-4">
        <h1>Profil</h1>
        <p>
          Velkommen, <b>{session.username}</b>
        </p>
        <span>Du er <b>{session.role}</b></span>
        {/* <form action={changePremium}>
          <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>     
        </form> */}
        {/* <form action={changeUSername}>
          <input type="text" name="username" required placeholder={session.username} />
          <button>Update</button>
        </form> */}
      </main>
    );
  }
  