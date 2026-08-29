/* ==================================
   FARM DNA JAVASCRIPT
================================== */


document.addEventListener("DOMContentLoaded", () => {

    const navItems =
        document.querySelectorAll(".nav-item");

    const quickCards =
        document.querySelectorAll(".quick-card");

    const toast =
        document.getElementById("toast");


    /* =========================
       SIDEBAR NAVIGATION
    ========================= */

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

            const section =
                item.dataset.section;

            showToast(
                "FarmDNA",
                sectionMessage(section)
            );

        });

    });


    /* =========================
       QUICK ACTIONS
    ========================= */

    quickCards.forEach(card => {

        card.addEventListener("click", () => {

            const action =
                card.dataset.action;

            showToast(
                "FarmDNA",
                actionMessage(action)
            );

        });

    });


    /* =========================
       DNA BUTTON
    ========================= */

    const dnaBtn =
        document.getElementById("dnaBtn");

    if (dnaBtn) {

        dnaBtn.addEventListener("click", () => {

            showToast(
                "Farm DNA",
                "Your Farm DNA Passport is opening..."
            );

        });

    }


    /* =========================
       DETAILS BUTTON
    ========================= */

    const detailsBtn =
        document.getElementById("detailsBtn");

    if (detailsBtn) {

        detailsBtn.addEventListener("click", () => {

            showToast(
                "DNA Passport",
                "Farm DNA details loaded successfully."
            );

        });

    }


    /* =========================
       AI ACTION
    ========================= */

    const actionBtn =
        document.getElementById("actionBtn");

    if (actionBtn) {

        actionBtn.addEventListener("click", () => {

            showToast(
                "AI Recommendation",
                "Irrigation reminder scheduled for tomorrow morning."
            );

        });

    }


    /* =========================
       NOTIFICATION
    ========================= */

    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );

    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            () => {

                showToast(
                    "Farm Alert",
                    "Soil moisture is 14% below your normal pattern."
                );

            }
        );

    }


    /* =========================
       MOBILE NAV
    ========================= */

    const mobileButtons =
        document.querySelectorAll(
            ".mobile-nav button"
        );

    mobileButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                mobileButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                showToast(
                    "FarmDNA",
                    "Navigation updated."
                );

            }
        );

    });


    /* =========================
       TOAST FUNCTION
    ========================= */

    function showToast(title, message) {

        const titleElement =
            toast.querySelector("strong");

        const messageElement =
            toast.querySelector("span");

        titleElement.textContent = title;

        messageElement.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }


    /* =========================
       NAV MESSAGES
    ========================= */

    function sectionMessage(section) {

        const messages = {

            dashboard:
                "Dashboard overview loaded.",

            dna:
                "Farm DNA Passport loaded.",

            crops:
                "Crop intelligence loaded.",

            water:
                "Water efficiency data loaded.",

            weather:
                "Weather intelligence loaded.",

            pest:
                "Pest intelligence loaded.",

            ai:
                "FarmDNA AI is ready."

        };

        return messages[section] ||
               "Section loaded.";

    }


    /* =========================
       ACTION MESSAGES
    ========================= */

    function actionMessage(action) {

        const messages = {

            crops:
                "Crop health: 91% — Rice is flowering.",

            water:
                "Water efficiency is currently 78%.",

            weather:
                "Today's farming conditions are good.",

            pest:
                "Current pest risk is LOW.",

            soil:
                "Soil health score: 82/100.",

            ai:
                "AI found a new farming insight."

        };

        return messages[action] ||
               "Action completed.";

    }

});
