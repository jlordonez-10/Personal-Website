import { setUpAboutMe } from "./features/about-me.js";
import { setUpContactMe } from "./features/contact-me.js";
import { setUpFooter } from "./features/footer.js";
import { setUpHome } from "./features/home.js";
import { setUpNavigation } from "./features/navigation.js";
import { setUpProjects } from "./features/projects.js";
import { setUpReferences } from "./features/references.js";

document.addEventListener("DOMContentLoaded", () => {
    setUpHome();
    setUpReferences();
    setUpContactMe();
    setUpProjects();
    setUpNavigation();
    setUpFooter();
    setUpAboutMe();
});
