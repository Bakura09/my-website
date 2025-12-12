// intl-tel-input is loaded via CDN on pages/intl-tel.html
// and exposes a global `intlTelInput` function.

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#phone");
  if (!input) return;
  if (typeof window.intlTelInput !== "function") return;

  window.intlTelInput(input, {
    // If you don't want any dial code shown separately, keep `separateDialCode` false.
    separateDialCode: false,

    // Pick a default to avoid needing geo-IP lookup.
    initialCountry: "us",
  });
});
