import jsPDF from "jspdf";

document.getElementById("formGi")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const imageElement = document.getElementById("image") as HTMLInputElement | null;
    const firstnameElement = document.getElementById("firstname") as HTMLInputElement | null;
    const lastnameElement = document.getElementById("lastname") as HTMLInputElement | null;
    const emailElement = document.getElementById("email") as HTMLInputElement | null;
    const numberElement = document.getElementById("number") as HTMLInputElement | null;
    const locationElement = document.getElementById("loaction") as HTMLInputElement | null;
    const educationElement = document.getElementById("Education") as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById("Skills") as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById("Experience") as HTMLTextAreaElement | null;

    if (
        imageElement && firstnameElement && lastnameElement && emailElement &&
        numberElement && locationElement && educationElement && skillsElement && experienceElement
    ) {
        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const email = emailElement.value;
        const number = numberElement.value;
        const location = locationElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;

        const imagefile = imageElement.files?.[0];
        const image = imagefile ? URL.createObjectURL(imagefile) : "";

        const output = `
            <br><br>
            <h2>Congrats, your First Resume Generated!</h2><br><br>
            ${image ? `<img src="${image}" alt="image" width="150px" height="150px" class="image">` : ""}
            <br><br>
            <p><strong>Firstname:</strong> ${firstname}</p>
            <br><br>
            <p><strong>Lastname:</strong> ${lastname}</p>
            <br><br>
            <p><strong>Email:</strong> ${email}</p>
            <br><br>
            <p><strong>Phone Number:</strong> ${number}</p>
            <br><br>
            <p><strong>Location:</strong> ${location}</p>
            <br><br>
            <h3>Education:</h3>
            <p>${education}</p><br><br>
            <h3>Skills:</h3>
            <p>${skills}</p><br><br>
            <h3>Experience:</h3>
            <p>${experience}</p><br><br>
        `;

        const outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = output;

            // Show the shareable link and download PDF options
            const shareableLinkSection = document.getElementById("shareableLinkSection");
            if (shareableLinkSection) {
                shareableLinkSection.style.display = "block";
                const shareableLink = document.getElementById("shareableLink");
                if (shareableLink) {
                    shareableLink.href = `https://your-resume-site.com/?name=${firstname}`;
                    shareableLink.textContent = "Click here to view your resume";
                }
            }
        }
    } else {
        console.error("One or more input elements are missing or null");
    }
});

// Download PDF logic
document.getElementById("downloadPdf")?.addEventListener("click", function () {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();
    const outputElement = document.getElementById("output");

    if (outputElement) {
        const outputContent = outputElement.textContent || "";
        doc.text("Your Resume", 10, 10); // Add the title
        doc.text(outputContent, 10, 20); // Add the content to the PDF
        doc.save("resume.pdf");
    }
});
