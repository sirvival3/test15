import { redirect } from "next/navigation"

import { getSession } from "../../actions/actions"
import { getAssignment } from "../../actions/assignmentsActions"

import Test from "./components/test"
import TaskList from "./components/taskList"

interface assignment {
  topic: string
  title: string
  description: string
  deadline: string
  tasks: string
}

export default async function AssignmentDetails({ params }: any) {
  const session = await getSession()
  const id = params.id
  const data: assignment = await getAssignment(id)

  if (!session.isLoggedIn) {
    redirect("/")
  }
  if (session.isBlocked) {
    redirect("/isblocked")
  }

  return (
    <div>
      <div className='border-2 m-2 p-2'>
        <h1>Opgavesæt {id}</h1>
        <div>Fag: {data.topic}</div>
        <div>Titel: {data.title}</div>
        <div>Beskrivelse: {data.description}</div>
        <div>Deadline: {data.deadline}</div>
      </div>
      <Test />
      <TaskList data={JSON.parse(data.tasks)} num={id} />
    </div>
  )
}
