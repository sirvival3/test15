import { getAssignmentList } from "../../actions/assignmentsActions"
import AssignmentItem from "./assignmentItem"

interface assignment {
  id: number
  topic: string
  title: string
  deadline: string
}

export default async function AssignmentList() {
  const list: assignment[] = await getAssignmentList()

  return (
    <>
      {list &&
        list.map(function (data: assignment, index: number) {
          return <AssignmentItem data={data} key={index} />
        })}
    </>
  )
}
