// import Head from "next/head"
import Link from 'next/link'

export default function header(){
    return(
        <>
<div className='bg-gradient-to-l from-black via-gray-700 to-black  md:mx-auto md:w-full mx-auto w-full'>
<img className=' mx-auto  relative  h-[150px] w-[195px] md:h-[160px] md:w-[210px] md:mx-[10px]' src="./Main.png" alt="stumpline" />
    <ul className='mt-[-10px] md:mt-[-90px] md:pb-[50px] pb-[20px] flex   md:text-xl  md:place-content-center lg:flex md:space-x-6 lg:place-content-center text-[17px] text-[#FF5E36] space-x-6  place-content-center font-light'>
      
      <li>
        <Link className="hover:text-white" href="/">
        Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-white animate-pulse"  href="/live">
        Live Score
        </Link>
      </li>
      <li>
        <Link className="hover:text-white" href="/telegram">
        Predictions
        </Link>
      </li>
      <li>
        <Link className="hover:text-white" href="/blogs">
        Blogs
        </Link>
      </li>
      {/* <li>
        <Link className="hover:text-mypurple" href="/rctechadminpanel">
        Admin Panel
        </Link>
      </li>  */}
      {/* <li>
        <Link className="animate-pulse hover:text-mypurple" href="/contact">
        Contact Us
        </Link>
      </li> */}
      {/* <Image className='hidden lg:block md:block absolute inset-y-0 right-0 mt-[10px]' width={150} height={150} alt='makeinindia' src="/MAKEININDIA.png"/>  
      <Image className='visible md:hidden lg:hidden absolute inset-y-0 right-0 mt-[10px]' width={80} height={80} alt='makeinindia' src="/MAKEININDIA.png"/>          */}
    </ul>
    {/* <Image width={200} height={200} alt='makeinindia' src="/MAKEININDIA.png"/> */}
    {/* <Link href="/contact" className="hidden lg:block ml-[1300px] mt-[-50px] ">
<button
  type="button"
  className="rounded-md bg-[#953ee2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Contact Us
</button>
</Link> */}
</div>
  </>
    )
}