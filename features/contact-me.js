import { socialLinks } from "../data-structures/links-data.js";
import { scrollReveal } from "../utils/scroll-reveal.js";
import { getSocialLinkStructure } from "../utils/structures.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setUpContactMe = () => {
    socialLinks.map((link) => {
        const socialsLink = getSocialLinkStructure(link);
        socialsContainer.appendChild(socialsLink);
    });

    form.addEventListener("submit", sendEmail);
    animations();
};

const sendEmail = async (e) => {
    e.preventDefault;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        await emailjs.sendForm(
            "service_es2mqcq",
            "template_nkvl9lr",
            "#form",
            "W356ahJSRqjMrWHf5"
        );
        alert("Message sent successfully");
    } catch (error) {
        alert("Message not sent (service error");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        form.reset();
    }
};

const animations = () => {
    scrollReveal.reveal("#contact-me h2", {
        origin: "top",
        delay: 300,
    });

    scrollReveal.reveal("contact.me .content form", {
        origin: "left",
        delay: 400,
    });

    scrollReveal.reveal("#contact-me .content .info", {
        origin: "right",
        delay: 400,
    });
};
