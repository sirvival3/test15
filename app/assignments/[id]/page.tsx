// import { useState } from "react"
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
      <h1>Opgave {id}</h1>
      <div>Fag: {data.topic}</div>
      <div>Titel: {data.title}</div>
      <div>Beskrivelse: {data.description}</div>
      <div>Deadline: {data.deadline}</div>
      <Test />
      <TaskList
        data={[
          {
            body: "Hvad er 2 + 2?",
            type: "math",
            answer: "",
            correct: ["4", "fire"],
          },
          {
            body: "Hvad er 6 - 2?",
            type: "math",
            answer: "",
            correct: ["4", "fire"],
          },
          {
            body: "Hvad er 2 * 2?",
            type: "math",
            answer: "",
            correct: ["4", "fire"],
          },
          {
            body: "Hvad er 8 : 2?",
            type: "math",
            answer: "",
            correct: ["4", "fire"],
          },
        ]}
      />
    </div>
  )
}
