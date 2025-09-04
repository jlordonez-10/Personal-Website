import { scrollReveal } from "../utils/scroll-reveal.js";

export const setUpAboutMe = () => {
    animations();
};

const animations = () => {
    scrollReveal.reveal("#about me .images-container .image", {
        origin: "left",
        delay: 200,
    });

    scrollReveal.reveal("#about-me .content", {
        origin: "right",
        delay: 400,
    });
};
