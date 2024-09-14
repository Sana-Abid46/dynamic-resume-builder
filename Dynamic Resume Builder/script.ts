document.getElementById('resume-form')?.addEventListener("submit", function (event) {
    event.preventDefault();
 
const NameEle = document.getElementById('name') as HTMLInputElement;
const emailEle = document.getElementById('email') as HTMLInputElement;
const phoneEle = document.getElementById('Phone') as HTMLInputElement;
const educationEle = document.getElementById('Education') as HTMLInputElement;
const experienceEle = document.getElementById('experience') as HTMLInputElement;
const skillsEle = document.getElementById('skills') as HTMLInputElement;


let name = '';
let email = '';
let phone = '';
let education = '';
let experience = '';
let skills = '';

if (NameEle && emailEle && phoneEle && educationEle && experienceEle && skillsEle) {
    name = NameEle.value;
    email = emailEle.value;
    phone = phoneEle.value;
    education = educationEle.value;
    experience = experienceEle.value;
    skills = skillsEle.value;
}else {
    console.error('one or more element are missing')
    return;
}

const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong>${name}</p>
<p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>`
    

    const resumeOutputElement = document.getElementById("resume-output");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error("The resume output element is missing");
    }

});
