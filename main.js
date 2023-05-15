
var stName = document.querySelectorAll("#student-name")[0];
var fName = document.querySelectorAll("#father-name")[0];
var rollNumber = document.querySelectorAll("#roll-number")[0];

var days = document.querySelectorAll(".class-timings");
var subject = document.querySelectorAll("#subject")[0];

var errorMsg = document.querySelectorAll("#error-msg")[0];

function registerNewStudent() {
    var student = {
        name: stName.value,
        fathersName: fName.value,
        rollNumber: rollNumber.value,
        subject: subject.value,
    }
    for (var i = 0; i < days.length; i++) {
        if (days[i].checked) {
            student.classDays = days[i].value
        }
    }

    if (student.name &&
        student.fathersName &&
        student.rollNumber &&
        student.subject &&
        student.classDays
    ) {
        printStudentData(student);
        saveStudentInDB(student);
    }
    else {
        errorMsg.innerHTML = 'All fields are required.';
        errorMsg.style.color = "red";

        setTimeout(function () {
            errorMsg.innerHTML = "";
        }, 3000)
    }
}


var stdntDiv = document.querySelectorAll("#students-data")[0];
function printStudentData(student) {
    // printWithBacktick(student);
    printWithDOMNodes(student)
}

function printWithBacktick(student) {

    var data = `<div style=" margin: 15px; padding: 20px;     border-radius: 20px; width:200px; background-color: grey; color:white; font-size:20px; text-transform: capitalize; border:4px solid blue;">
        <h2> ${student.name}</h2>
        <h2>${student.fathersName}</h2>
        <h2>${student.rollNumber}</h2>
        <h3>${student.classDays}</h3>
        <h3>${student.subject}</h3>
    
    </div>`;
    stdntDiv.innerHTML += data;
}



var allStudentsData = [];
function getStudentsData() {
    var studentsData = localStorage.getItem('studentsData');
    if (studentsData) {
        allStudentsData = JSON.parse(studentsData);
    }
    console.log(allStudentsData);
    for (var i = 0; i < allStudentsData.length; i++) {
        // printWithBacktick(allStudentsData[i]);
        printWithDOMNodes(allStudentsData[i]);
    }
}
getStudentsData();



function saveStudentInDB(student) {
    allStudentsData.push(student);
    localStorage.setItem("studentsData", JSON.stringify(allStudentsData));
}
function printWithDOMNodes(student) {
    var div = document.createElement('DIV');

    var h2StName = createElementNodes("H2", student.name);
    var h2FathersName = createElementNodes("H2", student.fathersName);
    var h2RolNumber = createElementNodes("H2", student.rollNumber);
    var h3ClassDays = createElementNodes("H3", student.classDays);
    var h3Subject = createElementNodes("H3", student.subject);

    div.appendChild(h2StName);
    div.appendChild(h2FathersName);
    div.appendChild(h2RolNumber);
    div.appendChild(h3ClassDays);
    div.appendChild(h3Subject);
    div.setAttribute('style', 'background-color:rgb(127, 212, 172) ;border-right: 5px solid yellow; border-bottom: 5px solid black; border-left: 5px solid red; border-top: 5px solid blue; padding:20px ;font-size:20px; border-radius: 20px;  margin:20px ; color:white; width:200px')

    stdntDiv.appendChild(div);
    var delBut = document.createElement('button');
    var delText = document.createTextNode('delete');
    delBut.appendChild(delText);
    delBut.setAttribute('onclick', 'delButton(this)')
    div.appendChild(delBut)


}
function delButton(deleteELement) {


    stdntDiv.removeChild(deleteELement.parentNode)
}

function createElementNodes(elementName, textContent) {
    var element = document.createElement(elementName);
    var elementText = document.createTextNode(textContent);
    element.appendChild(elementText);
    return element;
}