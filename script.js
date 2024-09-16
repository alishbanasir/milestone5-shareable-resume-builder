var _a, _b;
(_a = document.getElementById("formGi")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var imageElement = document.getElementById("image");
    var firstnameElement = document.getElementById("firstname");
    var lastnameElement = document.getElementById("lastname");
    var emailElement = document.getElementById("email");
    var numberElement = document.getElementById("number");
    var locationElement = document.getElementById("loaction");
    var educationElement = document.getElementById("Education");
    var skillsElement = document.getElementById("Skills");
    var experienceElement = document.getElementById("Experience");
    if (imageElement && firstnameElement && lastnameElement && emailElement &&
        numberElement && locationElement && educationElement && skillsElement && experienceElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var number = numberElement.value;
        var location_1 = locationElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var imagefile = (_a = imageElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var image = imagefile ? URL.createObjectURL(imagefile) : "";
        var output = "\n            <br><br>\n            <h2>Congrats, your First Resume Generated!</h2><br><br>\n            ".concat(image ? "<img src=\"".concat(image, "\" alt=\"image\" width=\"150px\" height=\"150px\" class=\"image\">") : "", "\n            <br><br>\n            <p><strong>Firstname:</strong> ").concat(firstname, "</p>\n            <br><br>\n            <p><strong>Lastname:</strong> ").concat(lastname, "</p>\n            <br><br>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <br><br>\n            <p><strong>Phone Number:</strong> ").concat(number, "</p>\n            <br><br>\n            <p><strong>Location:</strong> ").concat(location_1, "</p>\n            <br><br>\n            <h3>Education:</h3>\n            <p>").concat(education, "</p><br><br>\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p><br><br>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p><br><br>\n        ");
        var outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = output;
            // Show the shareable link and download PDF options
            var shareableLinkSection = document.getElementById("shareableLinkSection");
            if (shareableLinkSection) {
                shareableLinkSection.style.display = "block";
                var shareableLink = document.getElementById("shareableLink");
                if (shareableLink) {
                    shareableLink.href = "https://your-resume-site.com/?name=".concat(firstname);
                    shareableLink.textContent = "Click here to view your resume";
                }
            }
        }
    }
    else {
        console.error("One or more input elements are missing or null");
    }
});
// Download PDF logic
(_b = document.getElementById("downloadPdf")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var outputElement = document.getElementById("output");
    if (outputElement) {
        var outputContent = outputElement.textContent || "";
        doc.text("Your Resume", 10, 10); // Add the title
        doc.text(outputContent, 10, 20); // Add the content to the PDF
        doc.save("resume.pdf");
    }
});
