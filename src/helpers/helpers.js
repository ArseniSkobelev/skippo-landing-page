export class Helper {
    // @ts-ignore
    smoothScroll = ({target}) => {
        const el = document.querySelector(target.getAttribute('data-target'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
}