window.data=function () {
    var user = document.querySelector('#userName').value
    var Fname = document.querySelector('#FatherName').value
    var day = document.querySelector('#rad').value
    var select = document.querySelector('#select').value
    var rollNumber = document.querySelector('#roll_no').value
    

    var one = document.querySelector('#one')
    var two = document.querySelector('#two')
    var three = document.querySelector('#three')
    var four = document.querySelector('#four')
    var five = document.querySelector('#five')

   
    

    // one.innerHTML = `Name : ${user}`
    // two.innerHTML = `Father Name : ${Fname}`
    // three.innerHTML = `Roll No : ${rollNumber}`
    // four.innerHTML = `Day : ${day}`
    // five.innerHTML = `Subject : ${select}`

    var studentData = {
        sName: user,
        fatherName: Fname,
        RollNO: rollNumber,
        Day: day,
        corseName: select
    
    }

    localStorage.setItem('StudentName' , JSON.stringify(studentData));
}


   
    
        
    var getData = localStorage.getItem('StudentName');
    getData = JSON.parse(getData)
    console.log(getData)

     one.innerHTML = `Name : ${getData.sName}`
    two.innerHTML = `Father Name : ${getData.fatherName}`
    three.innerHTML = `Roll No : ${getData.RollNO}`
    four.innerHTML = `Day : ${getData.Day}`
    five.innerHTML = `Subject : ${getData.corseName}`