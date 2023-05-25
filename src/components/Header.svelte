<script lang="ts">
    let isOpen = false;

    function toggleMenu(e) {
        isOpen = !isOpen;
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'visible'

        helper.smoothScroll(e);
    }

    import {Helper} from "../helpers/helpers";

    let helper = new Helper();

</script>

<div class="flex flex-col md:flex-row py-4 md:py-8 items-center w-full z-10 animate_appear_from_top">
    <div class="flex flex-row items-center justify-between md:w-full">
        <div>
            <a href="/">
                <h2 class="lg:bg-gradient-to-r text-4xl from-skippo_purple to-skippo_purple_lighter lg:text-transparent lg:bg-clip-text font-semibold text-white">
                    skippo.
                </h2>
            </a>
        </div>
        <div class={`hidden md:flex md:flex-row md:gap-16 flex-col py-4 md:p-0 text-center w-full md:w-auto text-white mt-4 md:mt-0 font-medium md:font-normal`}>
            <a href="" class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Home</a>
            <a href="" data-target="#about" on:click|preventDefault={helper.smoothScroll}
               class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">About</a>
            <a href="" class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Contribute</a>
        </div>
    </div>
</div>
<div id="animate_container">
    <div class={`${isOpen ? 'animate-appear overflow-clip' : 'hidden'} md:hidden bg-skippo_purple w-full h-full top-0 right-0 absolute z-30 py-7 px-8`}>
        <div class={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col py-4 md:p-0 text-center w-full md:w-auto h-full text-white md:mt-0 font-medium md:font-normal items-center justify-center`}>
            <a href="" on:click={toggleMenu} class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Home</a>
            <a href="" data-target="#about" on:click|preventDefault={toggleMenu}
               class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">About</a>
            <a href="" on:click={toggleMenu} class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Contribute</a>
        </div>
    </div>
</div>
<div class="absolute z-50 py-7 px-8 top-0 right-0 animate_appear_from_top md:hidden">
    <button on:click={toggleMenu} class="flex items-center cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="18" width="18" height="2" rx="1" fill="white"/>
            <rect x="7" y="11" width="14" height="2" rx="1" fill="white"/>
            <rect x="3" y="4" width="18" height="2" rx="1" fill="white"/>
        </svg>
    </button>
</div>