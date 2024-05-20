import { getSession } from "./actions"

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

  // console.log(data)

  if (data.error) {
    return { error: data.error }
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

  // console.log(data)

  if (data.error) {
    return { error: data.error }
  }

  return data
}
