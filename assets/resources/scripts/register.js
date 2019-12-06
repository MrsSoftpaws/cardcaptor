(submitForm = function () {
    let $ = function (id) {
        return document.getElementById(id);
    }

    let emailValid = $("input-email");
    emailValid.onblur = function () {
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Insert a valid email");
        } else {
            this.setCustomValidity("");
        }
    }

    let validBias = function () {
        if ($("register").$("select").selectedIndex == 0) {
            alert("Please select your bias");
            return false;
        }
    }

})();