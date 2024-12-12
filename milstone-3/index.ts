document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();


    const nameelement=  document.getElementById('name') as HTMLInputElement;
    const emailelement=  document.getElementById('email') as HTMLInputElement;
    const phonelement=  document.getElementById('phone') as HTMLInputElement;
    const educationelement=  document.getElementById('education') as HTMLInputElement;
    // const experienceelement=  document.getElementById('experience') as HTMLInputElement;
    const skillselement=  document.getElementById('skills') as HTMLInputElement;


    const usernameElement =document.getElementById("username")as HTMLInputElement;


    if(nameelement && emailelement && phonelement && educationelement && skillselement){
        const name = nameelement.value;
        const email= emailelement.value;
        const phone = phonelement.value;
        const education = educationelement.value;
        // const experience = experienceelement.value;
        const skills = skillselement.value;


        const username =usernameElement.value;
        const uniqpaht =`resume/ ${username.replace(/\s+/g,'_')}_cv.html`
    


    const resumeoutput = 
    `
    <h2>RESUME</h2>
    <p><strong>NAME:</strong>  <span id="edit-name" class="editable"> ${name} </span> </p>
    <p><strong>EMAIL:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>PHONE:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>
    <h3>EDUCATION</h3>
    <p> <span id="edit-education" class="editable"> ${education} </span> </p>
    <h3>SKILLS</h3>
    <p> <span id="edit-skills" class="editable"> ${skills} </span> </p>
    `;
      
    const downloadlink =document.createElement('a')
    downloadlink.href ='data:text/html;charset=utf-8,' +encodeURIComponent(resumeoutput)
    downloadlink.download = uniqpaht;
    downloadlink.textContent ="download your 2024 resume";


    const resumeoutputelement = document.getElementById("resumeoutput")
    if(resumeoutputelement){
        resumeoutputelement.innerHTML = resumeoutput


        resumeoutputelement.append(downloadlink)

        makeeditable();
    } 
}
else{
    console.error("one or more output elements are missing")
}
})


function makeeditable (){
    const  editableElements = document.querySelectorAll("editable");
    editableElements.forEach(element => {
         element.addEventListener('click' , function(){
             const currentelement = element as HTMLElement;
             const currentvalue = currentelement.textContent || "" ;


             if(currentelement.tagName ==="P"|| currentelement.tagName === "SPAN") {
                const input = document.createElement("input")
                input.type = "text"
                input.value = currentvalue
                input.classList.add("editing input")

                input.addEventListener('blur', function(){
                    currentelement.textContent = input.value;
                    currentelement.style.display = "inline"
                    input.remove();
                })


                currentelement.style.display = "none";
                currentelement.parentNode?.insertBefore(input ,currentelement)
                input.focus();
             }
         })
    });
}


