import { redirect } from "next/navigation";
import { getSession } from "../actions/actions";
import { getAssignmentList } from "../actions/assignmentsActions";

export default async function Assignments() {
  const session = await getSession()
  const list = getAssignmentList()

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
        <h1>Assignments</h1>
        <p>Welcome</p>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Peach</li>
        </ul>
      </main>
    );
  }
  