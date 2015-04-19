window.onload = function () {

    // Checking if the form is valid when the user clicks on submit
    $("#reservationForm").submit(function (event) {
        var valid = true;

        // Getting the fields
        var arr = $("#arriving").val();
        var dep = $("#departing").val();
        var adults = $("#adults").val();
        var babies = $("#babies").val();
        var childrens = $("#childrens").val();

        // Verifying if the fields are valid
        if (!reservationDate(arr, new Date().toLocaleDateString("pt-BR"))) {
            $("#arrivingLabel").html("Arriving: <spam class='labelError'>the arriving date shold be at least 2 days from now!</spam>");
            $("#arriving").addClass("error");
            valid = false;
        } else {
            $("#arrLabel").html("Arriving: ");
            $("#arriving").removeClass("error");
        }

        if (!reservationDate(dep, arr)) {
            $("#departingLabel").html("Departing: <spam class='labelError'>the departure date shold be at least 2 days from from arriving date!</spam>");
            $("#departing").addClass("error");
            valid = false;
        } else {
            $("#departingLabel").html("Departure: ");
            $("#departing").removeClass("error");
        }

        // if they are not valid, prevent the form submission
        if (!valid) {
            event.preventDefault();
        }
    });
}