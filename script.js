function mailSubscriber() {
  event.preventDefault();

  var email =
    document.querySelector("#email").value;
  console.log(email);

  addSubscriber(email);
}

function addSubscriber(email) {
  $.ajax({
    type: "POST",
    url: "",
    success: function () {
      console.log("post success");
    },
    error: function (err) {
      console.log(err);
    },
  });
}

// open popup on click contact button
document
  .querySelector("#contact-popup-button")
  .addEventListener("click", function () {
    if (
      document.querySelector(".popup-open") !=
        undefined &&
      document.querySelector(".popup-open") !==
        this.nextElementSibling
    ) {
      document
        .querySelector(".popup-open")
        .classList.remove("popup-open");
    }
    this.nextElementSibling.classList.toggle(
      "popup-open"
    );
  });

// open popup on click social button
document
  .querySelector("#social-popup-button")
  .addEventListener("click", function () {
    if (
      document.querySelector(".popup-open") !=
        undefined &&
      document.querySelector(".popup-open") !==
        this.nextElementSibling
    ) {
      document
        .querySelector(".popup-open")
        .classList.remove("popup-open");
    }
    this.nextElementSibling.classList.toggle(
      "popup-open"
    );
  });

// detect click events outside the popup div to trigger popup close
document
  .querySelector("body")
  .addEventListener("click", function (e) {
    if (
      e.target.classList.contains("popup") ||
      $(e.target).parents(".popup").length
    ) {
      // do nothing
    } else {
      if (
        document.querySelectorAll(".popup-open")
          .length > 0 &&
        (e.target.id != "contact-popup-button" ||
          $(e.target).parents(
            "#contact-popup-button"
          ).length) &&
        (e.target.id != "social-popup-button" ||
          $(e.target).parents(
            "#social-popup-button"
          ).length)
      ) {
        document
          .querySelector(".popup-open")
          .classList.remove("popup-open");
      }
    }
  });

// scroll down to blog section when blog button is back in html
/* document
  .querySelector("#blog-button")
  .addEventListener("click", function () {
    const y =
      document
        .querySelector(".blogs")
        .getBoundingClientRect().top +
      window.scrollY -
      100;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  }); */

// scroll down to mortgage calculator on button click
document
  .querySelector("#mortgage-button")
  .addEventListener("click", function () {
    const y =
      document
        .querySelector(".mortgage-calculator")
        .getBoundingClientRect().top +
      window.scrollY -
      100;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  });
