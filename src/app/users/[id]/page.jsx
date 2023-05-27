import GoBack from "@/components/GoBack/GoBack"


async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data

}

const UserPage = async({params}) => {
  
  const user = await getUser(params.id)
  
  return (
    <>
      <div>
          <h1>User Detail</h1>
      </div>
      <div className="flex flex-col justify-center mx-auto container items-center w-1/6">
        <img className="rounded-full" src={user.avatar} alt={user.id} />
        <h1>{user.first_name} {user.last_name}</h1>
        <p>{user.email}</p>
      </div>
      <GoBack/>
    
    </>
  )
}

export default UserPage