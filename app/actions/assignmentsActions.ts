import { redirect } from "next/navigation"
import { getSession, logout } from "./actions"

export const getAssignmentList = async () => {
  const session = await getSession()

  // await new Promise(resolve => setTimeout(resolve, 3000))// Pause
  const res = await fetch("https:/www.bogstav.dk/api/assignment.php", {
    next: { revalidate: 15 },
    method: "POST",
    body: JSON.stringify({
      userid: session.userId,
      token: session.token,
      action: "read",
    }),
  })
  const data = await res.json()
  if (data && data.error && data.error.substring(0, 6) === "logout") {
    redirect("/login")
  }

  // console.log(data)
  if (data && data.error) {
    throw new Error(data.error)
    // return { error: data.error }
  }

  return data
}

export const getAssignment = async (id: number) => {
  const session = await getSession()

  // await new Promise(resolve => setTimeout(resolve, 3000))// Pause
  const res = await fetch("https:/www.bogstav.dk/api/assignment.php", {
    next: { revalidate: 15 },
    method: "POST",
    body: JSON.stringify({
      userid: session.userId,
      token: session.token,
      action: "read",
      id: id,
    }),
  })
  const data = await res.json()
  if (data && data.error && data.error.substring(0, 6) === "logout") {
    redirect("/login")
  }

  // console.log(data)
  if (data && data.error) {
    throw new Error(data.error)
    // return { error: data.error }
  }

  return data
}
