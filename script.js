/* =========================================
   FARM DNA - HOME DASHBOARD JAVASCRIPT
   Navigation + Buttons + Interactions
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
       QUICK ACTIONS
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
       FARM DNA - HERO BUTTON
    ========================================= */

    const dnaBtn = document.getElementById("dnaBtn");

    if (dnaBtn) {

        dnaBtn.addEventListener("click", () => {

            window.location.href = "dnapage.html";

        });

    }


    /* =========================================
       FARM DNA - VIEW DETAILS
    ========================================= */

    const detailsBtn =
        document.getElementById("detailsBtn");

    if (detailsBtn) {

        detailsBtn.addEventListener("click", () => {

            window.location.href = "dnapage.html";

        });

    }


    /* =========================================
       AI TAKE ACTION
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
       NOTIFICATION
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

    metricCards.forEach((card, index) => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            /*
                Card 0 = Soil
                Card 1 = Crops
                Card 2 = Water
            */

            const metricPages = [
                "soil.html",
                "crops.html",
                "water.html"
            ];

            if (metricPages[index]) {

                window.location.href =
                    metricPages[index];

            }

        });

    });


    /* =========================================
       FARM INTELLIGENCE "VIEW ALL"
    ========================================= */

    const sectionButtons =
        document.querySelectorAll(".section-header .text-btn");

    sectionButtons.forEach(button => {

        button.addEventListener("click", () => {

            showToast(
                "Farm Intelligence",
                "All farm intelligence modules are available."
            );

        });

    });


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const mobileButtons =
        document.querySelectorAll(".mobile-nav button");

    mobileButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            /*
                Mobile navigation:
                0 = Dashboard
                1 = Farm DNA
                2 = Crops
                3 = AI
                4 = Profile / Dashboard
            */

            const mobilePages = [
                "home.html",
                "dnapage.html",
                "crops.html",
                "ai.html",
                "home.html"
            ];

            if (mobilePages[index]) {

                window.location.href =
                    mobilePages[index];

            }

        });

    });


    /* =========================================
       ACTIVE SIDEBAR ITEM
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
       TOAST FUNCTION
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
       KEYBOARD SHORTCUTS
    ========================================= */

    document.addEventListener("keydown", event => {

        /*
            D = Dashboard
            F = Farm DNA
            C = Crops
            W = Water
            T = Weather
            P = Pest
            S = Soil
            A = AI
        */

        const key = event.key.toLowerCase();

        const shortcuts = {

            d: "home.html",
            f: "dnapage.html",
            c: "crops.html",
            w: "water.html",
            t: "weather.html",
            p: "pest.html",
            s: "soil.html",
            a: "ai.html"

        };

        if (shortcuts[key]) {

            window.location.href =
                shortcuts[key];

        }

    });

});
