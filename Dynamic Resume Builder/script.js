var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var NameEle = document.getElementById('name');
    var emailEle = document.getElementById('email');
    var phoneEle = document.getElementById('Phone');
    var educationEle = document.getElementById('Education');
    var experienceEle = document.getElementById('experience');
    var skillsEle = document.getElementById('skills');
    var name = '';
    var email = '';
    var phone = '';
    var education = '';
    var experience = '';
    var skills = '';
    if (NameEle && emailEle && phoneEle && educationEle && experienceEle && skillsEle) {
        name = NameEle.value;
        email = emailEle.value;
        phone = phoneEle.value;
        education = educationEle.value;
        experience = experienceEle.value;
        skills = skillsEle.value;
    }
    else {
        console.error('one or more element are missing');
        return;
    }
    var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong>".concat(name, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    var resumeOutputElement = document.getElementById("resume-output");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
});
var btn = document.getElementById('btn');
