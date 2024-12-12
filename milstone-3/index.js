var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameelement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phonelement = document.getElementById('phone');
    var educationelement = document.getElementById('education');
    // const experienceelement=  document.getElementById('experience') as HTMLInputElement;
    var skillselement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (nameelement && emailelement && phonelement && educationelement && skillselement) {
        var name_1 = nameelement.value;
        var email = emailelement.value;
        var phone = phonelement.value;
        var education = educationelement.value;
        // const experience = experienceelement.value;
        var skills = skillselement.value;
        var username = usernameElement.value;
        var uniqpaht = "resume/ ".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var resumeoutput = "\n    <h2>RESUME</h2>\n    <p><strong>NAME:</strong>  <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span> </p>\n    <p><strong>EMAIL:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>PHONE:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n    <h3>EDUCATION</h3>\n    <p> <span id=\"edit-education\" class=\"editable\"> ").concat(education, " </span> </p>\n    <h3>SKILLS</h3>\n    <p> <span id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </span> </p>\n    ");
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeoutput);
        downloadlink.download = uniqpaht;
        downloadlink.textContent = "download your 2024 resume";
        var resumeoutputelement = document.getElementById("resumeoutput");
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
            resumeoutputelement.append(downloadlink);
            makeeditable();
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
function makeeditable() {
    var editableElements = document.querySelectorAll("editable");
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentelement = element;
            var currentvalue = currentelement.textContent || "";
            if (currentelement.tagName === "P" || currentelement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentvalue;
                input_1.classList.add("editing input");
                input_1.addEventListener('blur', function () {
                    currentelement.textContent = input_1.value;
                    currentelement.style.display = "inline";
                    input_1.remove();
                });
                currentelement.style.display = "none";
                (_a = currentelement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentelement);
                input_1.focus();
            }
        });
    });
}
