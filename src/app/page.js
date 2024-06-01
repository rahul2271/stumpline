import Link from "next/link"
import Image from "next/image"

export default function Header(){
    return(
        <>

        {/* HEADER NAV */}
        <header className='bg-gradient-to-l from-black via-gray-700 to-black  md:mx-auto md:w-full mx-auto w-full'>
      <img className=' mx-auto  relative  h-[150px] w-[195px] md:h-[160px] md:w-[210px] md:mx-[10px]' src="./Main.png" alt="stumpline" />
          <ul className='mt-[-10px] md:mt-[-90px] md:pb-[50px] pb-[20px] flex   md:text-xl  md:place-content-center lg:flex md:space-x-6 lg:place-content-center text-[17px] text-[#FF5E36] space-x-6  place-content-center font-bold'>
            
            <li>
              <Link className="hover:text-white" href="/">
              Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white animate-pulse"  href="/services">
              Live Score
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/about">
              About
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
          
        </header>

        {/* HERO SECTION */}
        <div className="relative w-full bg-gradient-to-l from-black via-gray-700 to-black ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">

          <div className="md:mt-[-10px] flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">We&apos; Live</p>
            </div>
            <p className="text-sm font-medium">Join our app &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-black tracking-tight text-[#FF5E36] md:text-4xl lg:text-6xl">
          Live Cricket Scores: Faster Than a Yorker!
          </h1>
          <p className="mt-8 text-lg text-[#FF5E36]/50">
          Every ball, every boundary, every wicket - all delivered instantly so you never miss a moment of the action.  Get the fastest live cricket scores on the web, right here!
          </p>
          {/* <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
            </div> */}
            <div>
              <button
                type="button"
                className="mt-8 rounded-md bg-[#FF5E36] animate-pulse px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Download Now
              </button>
            </div>
          {/* </form> */}
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[2/2] object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
            src="./m1.png"
            alt=""
          />
        </div>
      </div>
        </div>

        {/* FEATURES */}
        <div className="pt-[50px] bg-gradient-to-l from-black via-gray-700 to-black mx-auto w-full md:pt-[70px] px-2 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-9 w-9 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#FF5E36]">Secured User Data</h3>
          <p className="mt-4 text-sm text-gray-300">
            Your safety is our first priority.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-9 w-9 text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#FF5E36]">Fastest Live Scores</h3>
          <p className="mt-4 text-sm text-gray-300">
            Instant Score Updations.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-9 w-9 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#FF5E36]">Light & Dark Version</h3>
          <p className="mt-4 text-sm text-gray-300">
            You can use our application as long as you want without hurting your eyes.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-9 w-9 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#FF5E36]">Free of Cost</h3>
          <p className="mt-4 text-sm text-gray-300">
            Premium Services at 0 cost.
          </p>
        </div>
      </div>
        </div>

        {/* TESTIMONIAL */}
        <div class="bg-gradient-to-l from-black via-gray-700 to-black min-w-screen min-h-screen flex items-center justify-center">
    <div class="w-full  border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <h1 class="text-6xl md:text-7xl font-bold mb-5 text-[#FF5E36]">What people <br/>are saying.</h1>
                <h3 class="text-xl mb-5 font-light text-[#FF5E36]">Our exclusive appliation users.</h3>
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-[#FF5E36]"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                </div>
            </div>
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./man.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Ajay Kumar, Chennai</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> I can't always be glued to the TV, but with this site, I never miss a single ball. Live scores, updates, and even commentary - it's got everything I need to stay on top of the game. No more scrambling to find the channel or refreshing unreliable apps.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./women.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Priya Sharma, Mumbai</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>The live scorecard is incredibly detailed, providing stats for every player and every over. It's perfect for analyzing trends and performances. Plus, the historical data is a massive bonus.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Rahul Kapoor, Delhi</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>This Application is my secret weapon for staying in the loop. I can follow the live scores while I'm on the go, checking in during work breaks or while commuting. It keeps me updated on the action without demanding my full attention.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Ali Khan, Bangalore</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> It's like watching the match with friends, even when you're miles apart. It adds a whole new dimension to the viewing experience.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./women.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Nikita Verma, Kolkata</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>It's a fantastic resource for anyone who's curious about the sport and wants to learn more. Now I can finally understand what my friends and family are talking about during matches!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Vijay Singh, Bhopal</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> This Application captures that old-school charm perfectly. The clean interface and focus on the core information - the score, the wickets, the partnerships -  reminds me of listening to the commentary on the radio back in the day.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

        {/* FAQS */}
        <section className=" md:pt-[50px] bg-gradient-to-l from-black via-gray-700 to-black mx-auto  px-2 py-10 md:px-0">
      <div>
        <div className="pt-[20px] mx-auto text-center lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#FF5E36] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 lg:mx-auto">
            Clear your doubts here !!!
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-[#FF5E36] shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-white">How accurate are your live scores?</span>

          
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-300">
              Our system utilizes real-time data feeds from official sources and partners, ensuring minimal delay. We are fastest among others.
              </p>
            </div>
          </div>
          <div className="cursor-pointer rounded-md border border-[#FF5E36] shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-white">Is the app free to use?</span>

          
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-300">
              Our app offers a basic version with essential features like live scores and ball-by-ball commentary free of charge. We may also offer a premium version with additional features like detailed player statistics, in-depth match analysis, or ad-free viewing (if applicable)
              </p>
            </div>
          </div>


            
        </div>
        <p className="textbase mt-6 text-center text-gray-500">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-[#FF5E36] hover:underline">
            Contact our support
          </a>
        </p>
      </div>
        </section>
  
        {/* FOOTER NAV */}
        <section className="justify-center mx-auto bg-gradient-to-l from-black via-gray-700 to-black relative overflow-hidden py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
            <img className="hidden md:block h-[250px] w-[250px]" src="./Main.png" alt="" />
              </div>
            </a>
          </div>
          <div className="place-content-center mx-auto p-8">
            <ul className="md:-m-5 md:flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-bold text-l text-[#FF5E36] hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-bold text-l text-[#FF5E36] hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a className="font-bold text-l text-[#FF5E36] hover:text-white" href="#">
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-bold text-l text-[#FF5E36] hover:text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-max mx-auto p-8">
            <div className="-m-1.5 flex md:flex-wrap">
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#FF5E36] hover:border-white">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                        fill="#FF5E36"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#FF5E36] hover:border-white">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                        fill="#FF5E36"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#FF5E36] hover:border-white">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                        fill="#FF5E36"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>





        </>
    )
}