import Users from "@/components/Users/Users"

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data

}

const HomePage = async() => {

  const users =  await fetchUsers()
  

  return (
    <div>
      <h1>Users</h1>
      <div>
        <Users users={users}/>
      </div>
    </div>
  )
}

export default HomePage