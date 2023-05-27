import Link from "next/link"

const Navigation = () => {

  return (
    <>
        <nav className=''>
            <ul className='flex mx-auto container justify-around'>
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className="">
                <Link href="/about">About</Link>
              </li>
              <li className="">
                <Link href="/services">Services</Link>
              </li>
              
            </ul>
          </nav>
    </>
  )
}

export default Navigation