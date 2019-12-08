(function () {
    let $ = function (id) {
        return document.getElementById(id);
    };

    let emailValid = $("input-email");
    emailValid.addEventListener("blur", function () {
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Insert a valid email");
        } else {
            this.setCustomValidity("");
        }
    });

    let select = $("select");
    select.addEventListener("change", function () {
        let buttonSubmit = document.getElementById("buttonSubmit");

        if ($("select").selectedIndex == 0) {
            buttonSubmit.disabled = true;
        } else {
            buttonSubmit.disabled = false;
        }
    });

})();