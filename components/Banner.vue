<template>
    <div class="w-full h-60 2xl:h-80 relative text-white overflow-hidden">
        <div class="absolute inset-0">
            <img class="h-60 2xl:h-80 bg-cover bg-center w-full" src="~/assets/images/game-list-banner.png" alt="">
        </div>
        <div class="max-w-[990px] p-6% xl:px-0 container mx-auto absolute h-60 2xl:h-80 inset-0">
            <div class="bg-slide-pre w-4 h-9 inline-block bg-cover absolute top-1/2"></div>
            <div class="bg-slide-next w-4 h-9 inline-block bg-cover absolute left-100% top-1/2"></div>
        </div>
        <div class="absolute w-full bottom-0 font-dinm text-base tracking-wider bg-gradient-to-b  from-light-white to-blue-dark">
            <ul class="max-w-[990px] p-6% xl:px-0 container mx-auto flex flex-row text-base">
                <li class="nav-li">
                    <a href="#" class="nav-link">PUBG MOBILE</a>
                </li>
                <li class="nav-li">
                    <a href="#" class="nav-link">PURCHASE</a>
                </li>
                <li class="nav-li">
                    <a href="#" class="nav-link">REDEEM</a>
                </li>
                <li class="nav-li li-active opacity-100 relative">
                    <a href="#">ITEMS</a>
                    <img class="w-20 h-10 absolute bottom-0" src="~/assets/images/tab-active.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>