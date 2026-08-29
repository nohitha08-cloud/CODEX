/* =========================================
   FARM DNA - MAIN JAVASCRIPT
   Navigation & Dashboard Interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE ROUTES
    ========================================= */

    const pages = {
        dashboard: "index.html",
        dna: "dnapage.html",
        crops: "crops.html",
        water: "water.html",
        weather: "weather.html",
        pest: "pest.html",
        soil: "soil.html",
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

    const detailsBtn =
        document.getElementById("detailsBtn");

    if (detailsBtn) {

        detailsBtn.addEventListener("click", () => {

            window.location.href = "dnapage.html";

        });

    }


    /* =========================================
       WEATHER CARD
    ========================================= */

    const weatherCard =
        document.querySelector(".weather-card");

    if (weatherCard) {

        weatherCard.style.cursor = "pointer";

        weatherCard.addEventListener("click", () => {

            window.location.href = "weather.html";

        });

    }


    /* =========================================
       FARM INTELLIGENCE CARDS
    ========================================= */

    const metricCards =
        document.querySelectorAll(".metric-card");

    metricCards.forEach(card => {

        card.style.cursor = "pointer";

        const title =
            card.querySelector("h3");

        if (!title) return;

        const text =
            title.textContent.toLowerCase();

        card.addEventListener("click", () => {

            if (text.includes("soil")) {

                window.location.href = "soil.html";

            }

            else if (text.includes("crop")) {

                window.location.href = "crops.html";

            }

            else if (text.includes("water")) {

                window.location.href = "water.html";

            }

        });

    });


    /* =========================================
       AI ACTION BUTTON
    ========================================= */

    const actionBtn =
        document.getElementById("actionBtn");

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

    mobileButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const mobilePages = [
                "index.html",
                "dnapage.html",
                "crops.html",
                "ai.html",
                "index.html"
            ];

            if (mobilePages[index]) {

                window.location.href =
                    mobilePages[index];

            }

        });

    });


    /* =========================================
       ACTIVE SIDEBAR
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

            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

        }

    });


    /* =========================================
       TOAST
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

});
