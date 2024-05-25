import { logout } from "@/app/actions/actions"
import { getAssignmentList } from "../../actions/assignmentsActions"
import AssignmentItem from "./assignmentItem"

interface assignment {
  id: number
  topic: string
  title: string
  deadline: string
}

export default async function AssignmentList() {
  const list: assignment[] | any = await getAssignmentList()
  if (list && list.error) return <>{list.error}</>

  return (
    <>
      {list &&
        list.map(function (data: assignment, index: number) {
          return <AssignmentItem data={data} key={index} />
        })}
    </>
  )
}
