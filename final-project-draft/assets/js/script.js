const darkButton = document.querySelector("#dark-mode-toggle");

darkButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "Light Mode";
        darkButton.setAttribute("aria-pressed", "true");
    } else {
        darkButton.textContent = "Dark Mode";
        darkButton.setAttribute("aria-pressed", "false");
    }
});