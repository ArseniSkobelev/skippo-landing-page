<script>
    import "../app.css"

    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col h-full w-full md:items-center px-8">
    <div class="flex flex-col md:w-full md:max-w-[1100px] gap-4">
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
        <div class="block md:hidden absolute top-0 right-0 z-0">
            <svg width="646" height="360" viewBox="0 0 646 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V285.155C0 285.155 92.8625 292.871 264.052 345.91C435.242 398.95 646 285.155 646 285.155V0H0Z"
                      fill="url(#paint0_linear_10_10)"/>
                <defs>
                    <linearGradient id="paint0_linear_10_10" x1="66.2402" y1="304.277" x2="263.554" y2="-90.4019"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6245F3"/>
                        <stop offset="1" stop-color="#917EF0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <Header/>
        <Hero/>
        <!--  content  -->
        <div class="z-10">
            <slot/>
        </div>
    </div>
</div>