/* INGREDIENT HEART CHECKLIST */
function toggleHeart(element) {
  element.textContent = element.textContent === "🤍" ? "🤎" : "🤍";
}

/* COOKIE RATING SYSTEM (recipe page only) */
document.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".rating.cookies");

  if (!ratings.length) return; // stops running on pages without ratings

  ratings.forEach(rating => {
    const cookies = rating.querySelectorAll(".cookie-icon");

    cookies.forEach(cookie => {
      cookie.addEventListener("click", () => {
        const value = cookie.dataset.value;

        cookies.forEach(c => {
          c.src =
            c.dataset.value <= value
              ? "icons/cookie-color.png"
              : "icons/cookie-white.png";
        });
      });
    });
  });
});

