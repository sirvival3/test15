import Task from "./task"

export default function TaskList({ data }: any) {
  console.log(data)
  return (
    <div>
      <h1>TASKLIST</h1>
      {data.map((item: any, index: number) => {
        return <Task key={index} data={item} />
      })}
    </div>
  )
}
