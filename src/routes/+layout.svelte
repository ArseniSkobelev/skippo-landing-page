<script>
    import "../app.css"

    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte";
    import About from "../components/About.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col h-full w-full md:items-center px-8 items-center">
    <div class="flex flex-col md:w-full max-w-[600px] md:max-w-[1100px] 3xl:max-w-[1600px] 4xl:max-w-[2100px] gap-4">
        <div class="hidden md:block absolute top-0 right-0 z-0">
            <svg width="762" height="431" viewBox="0 0 762 431" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M539.557 417.527C353.839 366.196 242.665 160.326 88.9784 111.249C36.3975 94.458 10.4113 52.6829 0.618804 -0.238729L762.208 0.0335377L762.347 388.79C706.959 428.682 633.599 443.519 539.557 417.527Z"
                      fill="url(#paint0_linear_1_15)"/>
                <defs>
                    <linearGradient id="paint0_linear_1_15" x1="41.6991" y1="268.97" x2="362.905" y2="-180.5"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6245F3"/>
                        <stop offset="1" stop-color="#917EF0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="block md:hidden absolute top-0 right-0 z-0 w-full">
            <svg width="100%" height="111" viewBox="0 0 393 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M814 -14V89.3163C814 89.3163 437.649 111 196.5 111C-44.6487 111 -421 89.3163 -421 89.3163V-14H814Z"
                      fill="url(#paint0_linear_14_20)"/>
                <defs>
                    <linearGradient id="paint0_linear_14_20" x1="-294.364" y1="91.6519" x2="-278.938" y2="-78.2404"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6245F3"/>
                        <stop offset="1" stop-color="#917EF0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <Header/>
        <Hero/>
        <About/>
        <!--  content  -->
        <div class="z-10">
            <slot/>
        </div>
    </div>
</div>