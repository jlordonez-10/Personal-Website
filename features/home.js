const downloadResumeButton = document.querySelector("#home .download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setUpHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
};

const downloadResume = () => {
    downloadResumeButton.disable = true;

    downloadResumeButton.classList.add("complete");

    const originalIcon = buttonIcon.scr;

    buttonText.textContent = "Complete";
    buttonIcon.src = "./images/icons/check.svg";

    setTimeout(() => {
        downloadResumeButton.classList.remove("complete");
        buttonIcon.src = originalIcon;
        buttonText.textContent = "Resume";
        downloadResumeButton.disable = false;
    }, 3000);
};
