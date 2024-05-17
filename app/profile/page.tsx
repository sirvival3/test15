import { changePremium, changeUSername, getSession } from "@/actions/actions";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

    return (
      <main className="p-4">
        <h1>Profile</h1>
        <p>
          Welcome, <b>{session.username}</b>
        </p>
        <span>You are a <b>{session.isPro ? "Premium" : "Free"} user</b></span>
        <form action={changePremium}>
          <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>     
        </form>
        <form action={changeUSername}>
          <input type="text" name="username" required placeholder={session.username} />
          <button>Update</button>
        </form>
      </main>
    );
  }
  