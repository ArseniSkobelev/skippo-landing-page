<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<div class="flex flex-col md:flex-row justify-between py-4 md:py-8 items-center z-10 animate_appear_from_top">
    <div class="flex flex-row items-center justify-between w-full">
        <div>
            <a href="/">
                <h2 class="md:bg-gradient-to-r text-4xl from-skippo_purple to-skippo_purple_lighter md:text-transparent md:bg-clip-text font-semibold text-white">
                    skippo.
                </h2>
            </a>
        </div>
        <div class="md:hidden">
            <button on:click={toggleMenu} class="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="18" width="18" height="2" rx="1" fill="white"/>
                    <rect x="7" y="11" width="14" height="2" rx="1" fill="white"/>
                    <rect x="3" y="4" width="18" height="2" rx="1" fill="white"/>
                </svg>
            </button>
        </div>
    </div>
    <div class={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:gap-16 flex-col py-4 md:p-0 text-center w-full md:w-auto text-white mt-4 md:mt-0 font-medium md:font-normal`}>
        <a href="" class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Home</a>
        <a href="" class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">About</a>
        <a href="" class="p-4 lg:p-0 md:hover:text-gray-800 transition-all">Contribute</a>
    </div>
</div>