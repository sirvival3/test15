import Link from "next/link"

export default function AssignmentItem({ data }: any) {
  return (
    <div className='border-2'>
      <Link href={`/assignments/${data.id}`}>
        <div>Id: {data.id}</div>
        <div>Fag: {data.topic}</div>
        <div>Titel: {data.title}</div>
        <div>Deadline: {data.deadline}</div>
      </Link>
    </div>
  )
}
