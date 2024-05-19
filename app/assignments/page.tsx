import { redirect } from "next/navigation";
import { getSession } from "../actions/actions";
import { getAssignmentList } from "../actions/assignmentsActions";
import Link from "next/link";

interface assignment {
  id: number
  topic: string
  title: string
  deadline: string
}

export default async function Assignments() {
  const session = await getSession()
  const list: assignment[] = await getAssignmentList()

  if(!session.isLoggedIn){
    redirect("/")
  }

  if(session.isBlocked){
    return(
      <div className="">
        <h1>Du er blevet blokeret!</h1>
      </div>
    )
  }

    return (
      <main className="p-4">
        <h1>Assignments</h1>
        
        {list && list.map(function(data, index) {
          return (
            <div key={index} className="border-2">
              <Link href={`/assignments/${data.id}`}>
                <div>Id: {data.id}</div>
                <div>Fag: {data.topic}</div>
                <div>Titel: {data.title}</div>
                <div>Deadline: {data.deadline}</div>
              </Link>
            </div>
          )
        })}
      </main>
    );
  }
  