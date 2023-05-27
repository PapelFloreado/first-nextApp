"use client"
import {useRouter}  from "next/navigation"

const Users = ({users}) => {

    const router = useRouter()


  return (
    <ul>
        {
            users.map((user)=>(
                <li className="flex mx-auto container pb-6 mb-10 border-b-2" key={user.id}>
                    <div className="flex justify-around mx-auto basis-full items-center">
                        <h4 className="">
                            {user.id} {user.first_name} {user.last_name}
                        </h4>
                        <p>{user.email}</p>
                        <div>
                            <button className=" bg-slate-400 p-4 rounded-xl" onClick={()=>router.push(`/users/${user.id}`)} type="button">See details</button>
                        </div>
                        <div className="">
                            <img className="rounded-full" src={user.avatar} alt={user.email} />
                        </div>

                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Users