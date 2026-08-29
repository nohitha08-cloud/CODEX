/* =========================================
   FARM DNA - MAIN JAVASCRIPT
   Page Navigation + Interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE ROUTES
    ========================================= */

    const pages = {
        dashboard: "home.html",
        dna: "dnapage.html",
        crops: "crops.html",
        water: "water.html",
        weather: "weather.html",
        pest: "pest.html",
        ai: "ai.html"
    };


    /* =========================================
       SIDEBAR NAVIGATION
    ========================================= */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            const section = item.dataset.section;

            if (pages[section]) {
                window.location.href = pages[section];
            }

        });

    });


    /* =========================================
       QUICK ACTION CARDS
    ========================================= */

    const quickCards = document.querySelectorAll(".quick-card");

    quickCards.forEach(card => {

        card.addEventListener("click", () => {

            const action = card.dataset.action;

            if (pages[action]) {
                window.location.href = pages[action];
            }

        });

    });


    /* =========================================
       FARM DNA BUTTON
    ========================================= */

    const dnaBtn = document.getElementById("dnaBtn");

    if (dnaBtn) {

        dnaBtn.addEventListener("click", () => {

            window.location.href = "dnapage.html";

        });

    }


    /* =========================================
       DNA DETAILS BUTTON
    ========================================= */

    const detailsBtn = document.getElementById("detailsBtn");

    if (detailsBtn) {

        detailsBtn.addEventListener("click", () => {

            window.location.href = "dnapage.html";

        });

    }


    /* =========================================
       AI ACTION BUTTON
    ========================================= */

    const actionBtn = document.getElementById("actionBtn");

    if (actionBtn) {

        actionBtn.addEventListener("click", () => {

            showToast(
                "FarmDNA AI",
                "Irrigation reminder scheduled for tomorrow morning."
            );

        });

    }


    /* =========================================
       NOTIFICATION BUTTON
    ========================================= */

    const notificationBtn =
        document.getElementById("notificationBtn");

    if (notificationBtn) {

        notificationBtn.addEventListener("click", () => {

            showToast(
                "Farm Alert",
                "Soil moisture is 14% below your normal pattern."
            );

        });

    }


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const mobileButtons =
        document.querySelectorAll(".mobile-nav button");

    mobileButtons.forEach(button => {

        button.addEventListener("click", () => {

            const section = button.dataset.section;

            if (pages[section]) {

                window.location.href =
                    pages[section];

            }

        });

    });


    /* =========================================
       TOAST SYSTEM
    ========================================= */

    function showToast(title, message) {

        const toast =
            document.getElementById("toast");

        if (!toast) return;

        const titleElement =
            toast.querySelector("strong");

        const messageElement =
            toast.querySelector("span");

        if (titleElement) {
            titleElement.textContent = title;
        }

        if (messageElement) {
            messageElement.textContent = message;
        }

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }


    /* =========================================
       ACTIVE PAGE HIGHLIGHT
    ========================================= */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    navItems.forEach(item => {

        const section =
            item.dataset.section;

        if (
            pages[section] &&
            pages[section].toLowerCase() === currentPage
        ) {

            item.classList.add("active");

        }

    });


    /* =========================================
       KEYBOARD SHORTCUTS
    ========================================= */

    document.addEventListener("keydown", event => {

        /* D = Dashboard */
        if (event.key.toLowerCase() === "d") {
            window.location.href = "home.html";
        }

        /* F = Farm DNA */
        if (event.key.toLowerCase() === "f") {
            window.location.href = "dnapage.html";
        }

        /* C = Crops */
        if (event.key.toLowerCase() === "c") {
            window.location.href = "crops.html";
        }

        /* W = Water */
        if (event.key.toLowerCase() === "w") {
            window.location.href = "water.html";
        }

        /* T = Weather */
        if (event.key.toLowerCase() === "t") {
            window.location.href = "weather.html";
        }

        /* P = Pest */
        if (event.key.toLowerCase() === "p") {
            window.location.href = "pest.html";
        }

    });

});
