import { redirect } from "next/navigation"

import { getSession } from "../../actions/actions"
import { getAssignment } from "../../actions/assignmentsActions"

import TaskList from "./components/taskList"
import TaskProvider from "./components/taskContext"

type assignment = {
  id: number
  topic: string
  title: string
  description: string
  deadline: string
  tasks: string
}

export default async function AssignmentDetails({ params }: any) {
  const session = await getSession()
  const data: assignment | any = await getAssignment(params.id)

  // console.log(data)

  if (data && data.error) return <>{data.error}</>

  if (!session.isLoggedIn) {
    redirect("/")
  }
  if (session.isBlocked) {
    redirect("/isblocked")
  }

  // console.log(
  //   JSON.stringify([
  //     {
  //       body: "Hvad er 2 + 2?",
  //       type: "math",
  //       answer: { answer: "", validation: false, tries: 0 },
  //       correct_answers: ["4", "fire"],
  //     },
  //     {
  //       body: "Hvad er 6 - 2?",
  //       type: "math",
  //       answer: { answer: "", validation: false, tries: 0 },
  //       correct_answers: ["4", "fire"],
  //     },
  //     {
  //       body: "Hvad er 2 * 2?",
  //       type: "math",
  //       answer: { answer: "", validation: false, tries: 0 },
  //       correct_answers: ["4", "fire"],
  //     },
  //     {
  //       body: "Hvad er 8 : 2?",
  //       type: "math",
  //       answer: { answer: "", validation: false, tries: 0 },
  //       correct_answers: ["4", "fire"],
  //     },
  //   ])
  // )

  return (
    <div>
      <div className='border-2 m-2 p-2'>
        <h1>Opgavesæt {data.id}</h1>
        <div>Fag: {data.topic}</div>
        <div>Titel: {data.title}</div>
        <div>Beskrivelse: {data.description}</div>
        <div>Deadline: {data.deadline}</div>
      </div>
      <TaskProvider>
        <TaskList data={data} />
      </TaskProvider>
    </div>
  )
}
