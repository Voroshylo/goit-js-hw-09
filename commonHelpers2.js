import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},o=document.querySelector(".feedback-form");o.addEventListener("input",t=>{const{name:a,value:r}=t.target;e[a]=r.trim()});document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(Object.assign(e,t),document.querySelector('[name="email"]').value=e.email,document.querySelector('[name="message"]').value=e.message)});o.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),Object.keys(e).forEach(a=>e[a]=""),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
