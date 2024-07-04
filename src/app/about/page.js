import Link from "next/link";

export default function about(){
    return(
        <section class="pt-10 overflow-hidden bg-gradient-to-l from-black via-gray-700 to-black md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-[#FF5E36] dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 We
                    are from team
                    <br class="block sm:hidden" /> STUMPLINE
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 dark:text-gray-200 md:mt-8">
                Stumpline is the ultimate destination for cricket enthusiasts like you! We're passionate about the game and committed to bringing you the fastest and most reliable live cricket scores.<br/><br/>

                Gone are the days of frantically switching channels or refreshing unreliable apps. With Stumpline, you have everything you need right at your fingertips. Follow ball-by-ball commentary, in-depth statistics, and live score updates for all major cricket matches, domestic and international.<br/><br/>

                But Stumpline is more than just scores. We're a community of cricket lovers. Stay connected, discuss the latest matches, and share your cricketing insights with fellow fans.<br/><br/>

                Join Stumpline today and experience the thrill of cricket like never before!
                </p>

                <p class="mt-4 text-l text-white dark:text-white md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-[#FF5E36] dark:bg-gray-200"></span>
                    <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href="#" title=""
                        class="transition-all duration-200 text-[#FF5E36] dark:text-[#FF5E36] hover:underline">Twitter</a>
                </p>
            </div>

            <div class="relative hidden md:block">

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="main.png" alt="" />
            </div>

        </div>
    </div>
</section>
    )
}