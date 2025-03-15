let h1=document.querySelector(".upar");
let navHome=document.querySelector("#home");
let navContact=document.querySelector("#contact");
let RadheGovind=document.querySelector("#radhaGovind");
let navResume=document.querySelector("#resumes");
let navPort=document.querySelector("#portfolio");
let home=document.querySelector(".home");
let resume=document.querySelector(".resume");
let portfolio=document.querySelector(".portfolio");
let RadhaKrishna=document.querySelector(".radhaGovind");
let contact=document.querySelector(".contact");
let lowSection=document.querySelector(".lowSection");

resume.classList.add("hide");
portfolio.classList.add("hide");
contact.classList.add("hide");
RadhaKrishna.classList.add("hide");

navHome.addEventListener("click",()=>{
	h1.classList.remove("hide");
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	home.classList.remove("hide");
});

navResume.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	resume.classList.remove("hide");
});

let a=1;
navContact.addEventListener("click",()=>{
	a++;
	if(a%2==0){
		contact.classList.remove("hide");
	}
	else{
		contact.classList.add("hide");
	}
});

navPort.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	portfolio.classList.remove("hide");
})

RadheGovind.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	RadhaKrishna.classList.remove("hide");
})