import { redirect } from "next/navigation"
import { getSession } from "../actions/actions"

import AssignmentList from "./components/assignmentList"

export default async function Assignments() {
  const session = await getSession()

  // console.log(list)

  if (!session.isLoggedIn) {
    redirect("/")
  }
  if (session.isBlocked) {
    redirect("/isblocked")
  }

  return (
    <main className='p-4'>
      <h1>Assignments</h1>
      <AssignmentList />
    </main>
  )
}
