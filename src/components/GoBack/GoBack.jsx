"use client"
import { useRouter } from "next/navigation"


const GoBack = () => {

    const router = useRouter()
  return (
    <button onClick={()=>router.push("/")} className=" bg-slate-400 p-4 rounded-xl flex justify-center mx-auto mt-10" type="button">Go Back</button>
  )
}

export default GoBack