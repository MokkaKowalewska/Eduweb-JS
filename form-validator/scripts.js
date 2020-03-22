(function() {
  const form = document.querySelector("#myForm"),
    fields = document.querySelectorAll("[data-error]"),
    errors = [];

  function isNotEmpty(field) {
    return field.value !== "";
  }

  function isAtLeast(field, min) {
    return field.value.length >= min;
  }

  function isEmail(field) {
    return field.value.indexOf("@") !== -1;
  }


  function displayErrors() {
    let ul = document.querySelector("ul.errors");

    if (!ul) {
      ul = document.createElement("ul");
      ul.classList.add("errors");
    }

    ul.innerHTML = "";

    errors.forEach(function(error) {
      let li = document.createElement("li");

      li.textContent = error;

      ul.appendChild(li);
    });

    form.parentNode.insertBefore(ul, form);
  }

  form.addEventListener(
    "submit",
    function(e) {
      e.preventDefault();



      for (let i = 0; i < fields.length; i++) {
        let field = fields[i],
          isValid = false;

        if (field.type === "text") {
          isValid = isNotEmpty(field);
        } else if (field.type === "email") {
          isValid = isEmail(field);
        } else if (field.type === "select-one") {
          isValid = isNotEmpty(field);
        } else if (field.type === "textarea") {
          isValid = isAtLeast(field, 3);
        }

        if (!isValid) {
          field.classList.add("error");
          errors.push(field.dataset.error);
        } else {
          field.classList.remove("error");
        }
      }
      console.log(errors);

      if (errors.length) {
        displayErrors(errors);
      } else {
        form.submit();
      }
    },
    false
  );
})();
