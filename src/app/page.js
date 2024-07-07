import Link from "next/link"


export default function Home(){
    return(
        <>

        {/* HERO SECTION */}
        {/* <div className="relative w-full bg-gradient-to-l from-black via-gray-700 to-black ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">

          <div className="md:mt-[-10px] flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">We&apos; Live</p>
            </div>
            <p className="text-sm font-medium">Join our app &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-medium tracking-tight text-[#FF5E36] md:text-4xl lg:text-6xl">
          Live Cricket Scores: Faster Than a Yorker!
          </h1>
          <p className="mt-8 text-lg text-[#FF5E36]/50">
          Every ball, every boundary, every wicket - all delivered instantly so you never miss a moment of the action.  Get the fastest live cricket scores on the web, right here!
          </p>
            <div>
              <button
                type="button"
                className="mt-8 rounded-md bg-[#FF5E36] animate-pulse px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Download Now
              </button>
            </div>

        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[2/2] object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
            src="./m1.png"
            alt=""
          />
        </div>
      </div>
        </div> */}
        <div className="relative w-full bg-gradient-to-l from-black via-gray-700 to-black">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 animate-slide-in-left">
      <div className="md:mt-[-10px] flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
        <div className="rounded-full bg-white p-1 px-2">
          <p className="text-sm font-medium">We&apos; Live</p>
        </div>
        <p className="text-sm font-medium">Join our Live Line &rarr;</p>
      </div>
      <h1 className="mt-8 text-3xl font-medium tracking-tight text-[#FF5E36] md:text-4xl lg:text-6xl animate-fade-in">
        Live Cricket Scores: Faster Than a Yorker!
      </h1>
      <p className="mt-8 text-lg text-gray-100 animate-fade-in-delay">
        Every ball, every boundary, every wicket - all delivered instantly so you never miss a moment of the action. Get the fastest live cricket scores on the web, right here!
      </p>
      <div className="mt-[20px]">
        <Link
          href='./live'
          className="mt-8 rounded-md bg-[#FF5E36] animate-pulse px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Live Scores
        </Link>
      </div>
    </div>
    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 animate-slide-in-right">
      <img
        className="aspect-[2/2] object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
        src="./m1.png"
        alt=""
      />
    </div>
  </div>
</div>


        {/* FEATURES */}
        {/* <div className="pt-[50px] bg-gradient-to-l from-black via-gray-700 to-black mx-auto w-full md:pt-[70px] px-2 lg:px-8">
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
        </div> */}
        <div className="pt-[50px] bg-gradient-to-l from-black via-gray-700 to-black mx-auto w-full md:pt-[70px] px-2 lg:px-8">
  <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
    <div className="transform transition-transform duration-500 hover:scale-105 animate-slide-in">
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
      <p className="mt-4 text-sm text-gray-300">Your safety is our first priority.</p>
    </div>
    <div className="transform transition-transform duration-500 hover:scale-105 animate-slide-in">
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
      <p className="mt-4 text-sm text-gray-300">Instant Score Updations.</p>
    </div>
    <div className="transform transition-transform duration-500 hover:scale-105 animate-slide-in">
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
        comming soon.
      </p>
    </div>
    <div className="transform transition-transform duration-500 hover:scale-105 animate-slide-in">
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
      <p className="mt-4 text-sm text-gray-300">Premium Services at 0 cost.</p>
    </div>
  </div>
</div>


        {/* TESTIMONIAL */}
        <div className="bg-gradient-to-l from-black via-gray-700 to-black min-w-screen min-h-screen flex items-center justify-center">
    <div className="w-full  border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-[#FF5E36]">What people <br/>are saying.</h1>
                <h3 className="text-xl mb-5 font-light text-[#FF5E36]">Our exclusive users.</h3>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-[#FF5E36]"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-[#FF5E36] ml-1"></span>
                </div>
            </div>
            <div className="-mx-3 md:flex items-start">
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./man.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Ajay Kumar, Chennai</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span> I cant always be glued to the TV, but with this site, I never miss a single ball. Live scores, updates, and even commentary - its got everything I need to stay on top of the game. No more scrambling to find the channel or refreshing unreliable apps.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./women.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Priya Sharma, Mumbai</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>The live scorecard is incredibly detailed, providing stats for every player and every over. Its perfect for analyzing trends and performances. Plus, the historical data is a massive bonus.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Rahul Kapoor, Delhi</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>This Web is my secret weapon for staying in the loop. I can follow the live scores while I am on the go, checking in during work breaks or while commuting. It keeps me updated on the action without demanding my full attention.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Ali Khan, Bangalore</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span> Its like watching the match with friends, even when you arere miles apart. It adds a whole new dimension to the viewing experience.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./women.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Nikita Verma, Kolkata</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Its a fantastic resource for anyone who s curious about the sport and wants to learn more. Now I can finally understand what my friends and family are talking about during matches!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="man.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Vijay Singh, Bhopal</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span> This web captures that old-school charm perfectly. The clean interface and focus on the core information - the score, the wickets, the partnerships -  reminds me of listening to the commentary on the radio back in the day.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
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
              <span className="flex text-lg font-semibold text-white">Is the website free to use?</span>

          
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-300">
              Our Website offers a basic version with essential features like live scores and ball-by-ball commentary free of charge. We may also offer a premium version with additional features like detailed player statistics, in-depth match analysis, or ad-free viewing (if applicable)
              </p>
            </div>
          </div>


            
        </div>
        <p className="textbase mt-6 text-center text-gray-500">
          Can&apos;t find what you&apos;re looking for?
          <a href="#" title="" className="font-semibold text-[#FF5E36] hover:underline">
            Contact our support
          </a>
        </p>
      </div>
        </section>
  





        </>
    )
}