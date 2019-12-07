(submitForm = function () {
        let $ = function (id) {
            return document.getElementById(id);
        }

        let emailValid = $("input-email");
        emailValid.addEventListener("focusout", function () {
                alert("aaaa")
            };

            function validSelect() {
                if ($("select")[0].selectedIndex != 0) {
                    $('#buttonSubmit').prop('disabled', false);
                } else {
                    $('#buttonSubmit').prop('disabled', true);
                }

            }
        });