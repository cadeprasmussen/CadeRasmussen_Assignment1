var submit = document.getElementById("submit");
var gradeLetter = "";
var finalscore = 0;

submit.addEventListener("click", function gradeCalculator() {
    var assignment = parseInt(document.getElementById("assignment").value) * .5;
    var project = parseInt(document.getElementById("project").value) * .1;
    var quiz = parseInt(document.getElementById("quiz").value) * .1;
    var exam = parseInt(document.getElementById("exam").value) * .2;
    var intex = parseInt(document.getElementById('intex').value) * .1;


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

    localStorage.setItem("gradeLetter", gradeLetter);
    localStorage.setItem("percent", finalscore);

    document.getElementById('estGrade').style.display = 'block';
    document.getElementById('gradeLetter').style.display = 'block';
    document.getElementById('percent').style.display = 'block';

    displayData(finalscore, gradeLetter);
});

function displayData(finalGrade, gradeLetter) {
    document.getElementById("gradeLetter").innerHTML = gradeLetter;
    document.getElementById("percent").innerHTML = toString(finalScore) + "%";
};


addEventListener("load", function () {
    this.document.getElementById("gradeLetter").innerHTML = this.localStorage.getItem("gradeLetter");
    if (this.localStorage.getItem("percent") == null || this.document.getElementById("gradeLetter") == "") {
        this.document.getElementById("percent").style.display = "none";
        this.document.getElementById("gradeLetter").style.display = "none";
    }
    else {
        this.document.getElementById("percent").innerHTML = this.localStorage.getItem("percent") + " %";
    }
    

});


function resetGrade() {
    localStorage.clear()
    this.document.getElementById("gradeLetter").style.display = "none";
    this.document.getElementById("percent").style.display = "none";
}


