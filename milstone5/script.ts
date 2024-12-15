// References to DOM elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Generate and display resume content
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;
    resumeDisplayElement.innerHTML = resumeHTML;

    // Encode resume content into URL
    const encodedResume = encodeURIComponent(resumeHTML);
    const shareableURL = `${window.location.origin}${window.location.pathname}?resume=${encodedResume}`;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Load shared resume from URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeData = urlParams.get('resume');
    if (resumeData) {
        // Decode and display the shared resume
        const decodedResume = decodeURIComponent(resumeData);
        resumeDisplayElement.innerHTML = decodedResume;

        // Hide the form
        (document.getElementById('resume-form') as HTMLElement).style.display = 'none';
        shareableLinkContainer.style.display = 'none';
    }
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow?.document.write(`
        <html>
            <head><title>Resume</title></head>
            <body>${resumeDisplayElement.innerHTML}</body>
        </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
});
