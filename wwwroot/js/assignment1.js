/*var submit = $("submit");*/
var gradeLetter = "";
var finalscore = 0;

//Declaring my event listener with jquery

$("#submit").click(function () {
    var assignment = ($("#assignment").val()) * .5;
    var project = ($("#project").val()) * .1;
    var quiz = ($("#quiz").val()) * .1;
    var exam = ($("#exam").val()) * .2;
    var intex = ($('#intex').val()) * .1;

    finalscore = assignment + project + quiz + exam + intex;

    if (finalscore >= 94) {
        gradeLetter = "A";
    }
    else if (finalscore < 94 && finalscore >= 90) {
        gradeLetter = "A-";
    }
    else if (finalscore < 90 && finalscore >= 87) {
        gradeLetter = "B+";
    }
    else if (finalscore < 87 && finalscore >= 84) {
        gradeLetter = "B";
    }
    else if (finalscore < 84 && finalscore >= 80) {
        gradeLetter = "B-";
    }
    else if (finalscore < 80 && finalscore >= 77) {
        gradeLetter = "C+";
    }
    else if (finalscore < 77 && finalscore >= 74) {
        gradeLetter = "C";
    }
    else if (finalscore < 74 && finalscore >= 70) {
        gradeLetter = "C-";
    }
    else if (finalscore < 70 && finalscore >= 67) {
        gradeLetter = "D+";
    }
    else if (finalscore < 67 && finalscore >= 64) {
        gradeLetter = "D";
    }
    else if (finalscore < 64 && finalscore >= 60) {
        gradeLetter = "D-";
    }
    else {
        gradeLetter = "E";
    }

    //Displaying the final grade letter and score to the user. 
    alert("You're Estimate Grade is a(n): " + gradeLetter + " \n with " + finalscore + "%" );

    //$.localStorage.setItem("gradeLetter", gradeLetter);
    //$.localStorage.setItem("percent", finalscore);

    //$('#estGrade').style.display = 'block';
    //$('#gradeLetter').style.display = 'block';
    //$('#percent').style.display = 'block';

    //displayData(finalscore, gradeLetter);
});


function displayData(finalGrade, gradeLetter) {
    $("#gradeLetter").innerHTML = gradeLetter;
    $("#percent").innerHTML = toString(finalGrade) + "%";
};


("load", function () {
    this.$("#gradeLetter").innerHTML = this.localStorage.getItem("#gradeLetter");
    if (this.localStorage.getItem("percent") == null || this.$("gradeLetter") == "") {
        this.$("#percent").style.display = "none";
        this.$("#gradeLetter").style.display = "none";
    }
    else {
        this.$("#percent").innerHTML = this.localStorage.getItem("#percent") + " %";
    }
    

});


function resetGrade() {
    localStorage.clear()
    this.$("gradeLetter").style.display = "none";
    this.$("percent").style.display = "none";
    };




