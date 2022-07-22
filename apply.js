const myForm = document.querySelector('#my-form')
const msg = document.querySelector('.msg')
const fName = document.querySelector('#fName')
const lName = document.querySelector('#lName')
const email = document.querySelector('#email')
const users = document.querySelector('#users')
const DOB = document.querySelector('#dob')
const gender = document.querySelector('#gender')
const tBody = document.querySelector('tbody');

const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let date = (`${day}-${month}-${year}`)




myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const courses = document.querySelectorAll('input[name="courses"]:checked')
    const gender = document.querySelector('input[name="gender"]:checked');

    if(courses.length < 1){
        msg.classList.add("error");
        msg.innerHTML = "Please select a course";
        setTimeout(() => {msg.classList.remove('error'); msg.innerHTML = ''}, 5000)
    } else if (gender === null) {
            msg.classList.add("error");
            msg.innerHTML = "Please select your gender";
            setTimeout(() => {msg.classList.remove('error'); msg.innerHTML = ''}, 5000);
    }else{addTable(gender, courses)}

    

})

const addTable = (gender, courses) =>{
    document.querySelector('.applicants-table').classList.remove('hide');
    let userCourse = [...courses];
    fName.value[0].toUpperCase();
    const newRow = document.createElement('tr')
    newRow.innerHTML =`
    <td>${fName.value} ${lName.value}</td>
    <td>${gender.value}</td>
    <td>
    <ul>
    ${userCourse.map(course => `<li>${course.value}</li>`).join('')}
    </ul>
    </td>
    <td>${date}</td>
    
    `
    tBody.append(newRow)

}