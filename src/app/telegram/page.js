import next from "next";
import Link from "next/link";
import Image from "next/image";

export default function Telegram(){
    return(
  // <div className="bg-gradient-to-l from-black via-gray-700 to-black">
  //   <div>
  //     <h1></h1>

  //   </div>
  //   <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
  //         <img
  //           className="aspect-[2/2] object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
  //           src="./STUMP.png"
  //           alt=""
  //         />
  //       </div>
  // </div>
  <>
  <title>Live Cricket Scores & Predictions - Your Website Name</title>
  <meta name="description" content="Get live cricket scores, ball-by-ball updates, and expert predictions on Telegram!" />
  <div className="bg-gradient-to-l from-black via-gray-700 to-black">
  <div className=" md:mt-[-100px] mt-[50px] max-w-7xl mx-auto place-content-center ">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#FF5E36] mb-4">Get Live Cricket Scores & Expert Predictions on Telegram!</h1>
            <p className="text-gray-100 mb-6">Stay on top of the game with live updates, ball-by-ball commentary, and expert analysis.</p>
            <a target="_blank" href="https://t.me/+aFtcHx3h4A0zNjc1" className="animate-bounce inline-flex items-center px-4 py-2 bg-[#FF5E36] text-white font-bold rounded-md hover:bg-[#FF5E36]/80">
              Join Our Telegram Channel for Live Scores & Predictions!
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          <div className="w-full mt-[-30px] md:mt-[50px] md:w-1/2 mt-6 md:mt-0">
            <Image src="/STUMP.png" alt="Cricket match in progress" width={640} height={480} className="" />
          </div>
        </div>

        <div className="mt-[-70px] mb-[50px] md:mt-[-180px]">
          <h2 className="text-2xl font-semibold text-[#FF5E36] mb-4">Expert Cricket Predictions</h2>
          <p className="text-gray-100">Get valuable insights from our team of cricket experts to make informed decisions and enhance your cricket experience.</p>
          <ul className="list-disc pl-4 mt-4 text-gray-100">
            <li>Match winner predictions</li>
            <li>Top scorer predictions</li>
            <li>Other insightful analysis (optional, based on your predictions)</li>
          </ul>
        </div>

        <div className="flex items-center justify-center mb-[50px] md:mt-[50px]">
          <p className="text-gray-100 mr-4">Join our Telegram channel now:</p>
          <div className="inline-flex items-center">
            <a target="_blank" href="https://t.me/+aFtcHx3h4A0zNjc1">
              <img src="https://telegram.org/img/t_logo.svg" alt="Telegram logo" width="40" height="40" className="animate-pulse rounded-full mr-2" />
            </a>
            <a href="https://t.me/+aFtcHx3h4A0zNjc1">
              <span className="text-[#FF5E36] font-bold">Join STUMPLINE Live Predictions</span>
            </a>
          </div>
        </div>
        </div>
        </div>
        </div>
        </>

       
          

    )
}