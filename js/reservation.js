window.onload = function () {

        $("#arriving").datepicker({
            dateFormat:"dd/mm/yy"
        });

        $("#departing").datepicker({
            dateFormat:"dd/mm/yy"
        });

    // Checking if the form is valid when the user clicks on submit
    $("#reservationForm").submit(function (event) {
        var valid = true;

        // Getting the fields
        var arr = $("#arriving").val();
        var dep = $("#departing").val();
        var adults = $("#adults").val();
        var babies = $("#babies").val();
        var children = $("#children").val();


        // Verifying if the fields are valid
        if (!arrivalDate(arr)) {
            $("#arrivingLabel").html("Arriving: <spam class='labelError'>the arriving date shold be at least 2 days from now!</spam>");
            $("#arriving").addClass("error");
            valid = false;
        } else {
            $("#arrLabel").html("Arriving: ");
            $("#arriving").removeClass("error");
        }

        if (!departureDate(arr, dep)) {
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
        } else {
            var reservation = {
                "arriving": arr,
                "departing": dep,
                "adults": adults,
                "babies": babies,
                "children": children,
            };
            saveData("reservation", JSON.stringify(reservation));
        }
    });
}