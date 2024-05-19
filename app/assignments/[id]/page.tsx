import { getSession } from "../../actions/actions";
import { getAssignment } from "../../actions/assignmentsActions";

interface assignment {
  topic: string
  title: string
  description: string
  deadline: string
}

export default async function AssignmentDetails({ params }:any) {
  const id = params.id
  const session = await getSession()
  const data: assignment = await getAssignment(params.id)

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
    <div>
      <h1>Opgave {id}</h1>
      <div>Fag: {data.topic}</div>
      <div>Titel: {data.title}</div>
      <div>Beskrivelse: {data.description}</div>
      <div>Deadline: {data.deadline}</div>
    </div>
  )
}
