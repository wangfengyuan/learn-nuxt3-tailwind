<template>
    <div class="w-full h-60 relative text-white">
        <div class="absolute">
            <img class="h-60 object-cover" src="../assets/images/game-list-banner.png" alt="">
        </div>
        <div class="container px-5 md:p-6% mx-auto absolute h-60 inset-0">
            <div class="bg-slide-pre w-4 h-9 inline-block bg-cover absolute left-5 lg:left-64 top-1/2"></div>
            <div class="bg-slide-next w-4 h-9 inline-block bg-cover absolute right-5 lg:right-64 top-1/2"></div>
        </div>
        <div class="absolute w-full bottom-0 font-dinm text-base tracking-wider bg-gradient-to-b  from-light-white to-blue-dark">
            <ul class="container md:p-6% px-5 mx-auto flex flex-row text-base">
                <li class="mr-8 h-[68px] leading-[68px]"><a href="#" class="opacity-60">PUBG MOBILE</a></li>
                <li class="mr-8 h-[68px] leading-[68px]"><a href="#" class="opacity-60">PURCHASE</a></li>
                <li class="mr-8 h-[68px] leading-[68px]"><a href="#" class="opacity-60">REDEEM</a></li>
                <li class="mr-8 h-[68px] leading-[68px] li-active opacity-100 text-xl relative">
                    <a href="#">ITEMS</a>
                    <img class="w-20 h-10 absolute bottom-0" src="../assets/images/tab-active.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>