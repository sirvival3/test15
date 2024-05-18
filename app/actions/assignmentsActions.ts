import { getSession } from "./actions"

export const getAssignmentList = async ()=>{
    const session = await getSession()

    // CHECK USER IN DB
    const res = await fetch('https:/www.bogstav.dk/api/assignment.php', {
        method: 'POST',
        body: JSON.stringify({
            userid: session.userId,
            token: session.token,
            action: "read",
            classroomids: "1",
        }),
    })
    const data = await res.json()

    console.log(data)

    
    // if(formUsername!==data.username){
    //     return {error:"Wrong Credentials!"}
    // }

    return data
    // return
}