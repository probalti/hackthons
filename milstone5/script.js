// References to DOM elements
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate and display resume content
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    resumeDisplayElement.innerHTML = resumeHTML;
    // Encode resume content into URL
    var encodedResume = encodeURIComponent(resumeHTML);
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?resume=").concat(encodedResume);
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Load shared resume from URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeData = urlParams.get('resume');
    if (resumeData) {
        // Decode and display the shared resume
        var decodedResume = decodeURIComponent(resumeData);
        resumeDisplayElement.innerHTML = decodedResume;
        // Hide the form
        document.getElementById('resume-form').style.display = 'none';
        shareableLinkContainer.style.display = 'none';
    }
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    var printWindow = window.open('', '', 'height=800,width=800');
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("\n        <html>\n            <head><title>Resume</title></head>\n            <body>".concat(resumeDisplayElement.innerHTML, "</body>\n        </html>\n    "));
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
});
