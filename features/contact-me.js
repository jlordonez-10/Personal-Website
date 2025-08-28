import { socialLinks } from "../data-structures/links-data.js";
import { getSocialLinkStructure } from "../utils/structures.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setUpContactMe = () => {
    socialLinks.map((link) => {
        const socialsLink = getSocialLinkStructure(link);
        socialsContainer.appendChild(socialLinks);
    });

    form.addEventListener("submit", sendEmail);
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
