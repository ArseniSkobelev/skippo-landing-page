<script>
    import {Helper} from "../helpers/helpers.js"

    let helper = new Helper();
</script>

<div class="flex flex-col md:justify-between md:flex-row z-10 overflow-x-clip mt-8 md:mt-0">
    <div class="animate_appear_from_left flex flex-col gap-8 md:block">
        <p class="text-3xl md:text-4xl md:mt-16 md:w-1/2">
            <span><i>Skippo,</i></span> the <span class="text-skippo_purple"><i>techyfied*</i></span> personal chat
            bot you never knew you needed
        </p>
        <p class="md:mt-4 md:w-1/2 md:text-base text-gray-500 animate_appear_from_left">
            *a word defining something that is enhanced or modified with technological features or characteristics
        </p>
        <a>
            <button class="md:mt-8 p-4 w-full md:w-auto bg-black text-white text-center" data-target="#about"
                    on:click|preventDefault={helper.smoothScroll}>
                FIND OUT MORE
            </button>
        </a>
    </div>
    <div class="animate_appear_from_right mt-16 md:mt-0 flex md:block justify-center">
        <img src="/img/phone-skippo-min.png" width="300" alt="Phone">
    </div>
</div>