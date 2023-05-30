<script>
    import {Helper} from "../helpers/helpers.js"

    let helper = new Helper();
</script>

<div class="flex flex-col md:justify-between md:flex-row z-10 overflow-x-clip mt-8 md:mt-0 h-full md:items-center">
    <div class="animate_appear_from_left flex flex-col h-full gap-16">
        <div class="flex flex-col gap-8 md:gap-0">
            <p class="text-3xl md:text-4xl md:mt-16 md:w-1/2">
                <span><i>Skippo,</i></span> the <span class="text-skippo_purple"><i>techyfied*</i></span> personal chat
                bot you never knew you needed
            </p>
            <p class="md:mt-4 md:w-1/2 md:text-base text-gray-500 animate_appear_from_left">
                *a word defining something that is enhanced or modified with technological features or characteristics
            </p>
            <a>
                <button class="md:mt-8 px-4 py-2 w-full md:w-auto bg-skippo_purple rounded text-white text-center"
                        data-target="#about"
                        on:click|preventDefault={helper.smoothScroll}>
                    FIND OUT MORE
                </button>
            </a>
        </div>
        <div class="hidden 3xl:flex flex-row gap-24">
            <div class="flex gap-4 flex-col w-48 items-start animate_appear_from_left">
                <img src="/img/icons/book.svg" class="h-14 w-auto" alt="">
                <h2><strong>Installation</strong></h2>
                <p class="h-40">
                    Our bot allows for simple installation and self-host possibilities. Follow the link below to access
                    our
                    documentation with installation instructions!
                </p>
                <a href="/installation" class="text-link_blue animate_appear_from_left">
                    Read more -->
                </a>
            </div>
            <div class="flex gap-4 flex-col w-48 items-start animate_appear_from_left">
                <img src="/img/icons/edit.svg" class="h-14 w-auto" alt="">
                <h2><strong>Contribute</strong></h2>
                <p class="h-40">
                    Please follow the link below to access our contribution guide hosted on <a
                        href="https://github.com/ArseniSkobelev/skippo"
                        class="text-link_blue">GitHub</a>.
                </p>
                <a href="/contribute" class="text-link_blue animate_appear_from_left">
                    Read more -->
                </a>
            </div>
        </div>
    </div>
    <div class="animate_appear_from_right mt-16 md:mt-0 flex md:block justify-center">
        <img src="/img/phone-skippo-min.png" width="300" alt="Phone">
    </div>
</div>

<style>
    /* animations */
    @keyframes appearFromTop {
        0% {
            transform: translateY(-30%);
            opacity: 0;
        }
        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    @keyframes appearFromLeft {
        0% {
            transform: translateX(-50%);
            opacity: 0;
        }
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    @keyframes appearFromRight {
        0% {
            transform: translateX(150px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .animate_appear_from_left {
        animation: 1s ease-out 0s 1 appearFromLeft;
    }

    .animate_appear_from_right {
        animation: 1s ease-in-out 0s 1 appearFromRight;
    }
</style>