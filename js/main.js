
//HEADER AND NAVICATION BAR
var navi=document.querySelector(".navi-none");

function menuList(){
    let navi_none=navi.getAttribute("class")

    if(navi_none =="navi-none"){
       
        navi.setAttribute("class","navi-visible")
    }
    else{
      
        navi.setAttribute("class","navi-none")
    }
}
// click to change section 

var section_about=document.querySelector(".about-me");
var section_home=document.querySelector(".home");
var section_header=document.querySelector(".header-visible");

var section_animation=document.querySelector(".animet")
function myProflie(){
    //ANIMETION
    section_animation.setAttribute("class","animet-up");
   
   setTimeout(()=>{
    section_about.setAttribute("class","about-me-visible");
    section_header.setAttribute("class","header-none");
    section_home.setAttribute("class","home-none");
   },1000)
  
}


function myHome(){
    section_animation.setAttribute("class","animet-down");

    setTimeout(()=>{
        let section_close =document.querySelector(".bi-box-arrow-left")
        section_close.parentElement.parentElement.setAttribute("class","about-me");
        section_home.setAttribute("class","home");
        section_header.setAttribute("class","header-visible");
},1000)
   
    
}

var section_demo=document.querySelector(".project");
function myDemo(){
    section_animation.setAttribute("class","animet-up");
    setTimeout(()=>{
        section_demo.setAttribute("class","project");
        section_header.setAttribute("class","header-none");
        section_home.setAttribute("class","home-none");
    },1000)
  
}
function myHome_demo(){

    section_animation.setAttribute("class","animet-down");

    setTimeout(()=>{
        section_demo.setAttribute("class","about-me");
        section_home.setAttribute("class","home");
        section_header.setAttribute("class","header-visible");
    },1000)
    
}

var section_skills=document.querySelector(".skills");
function mySkills(){
    section_animation.setAttribute("class","animet-up");

    setTimeout(()=>{
    section_skills.setAttribute("class","skills");
    section_header.setAttribute("class","header-none");
    section_home.setAttribute("class","home-none");
},1000)
}
function myHome_skills(){
    section_animation.setAttribute("class","animet-down");

    setTimeout(()=>{
    section_skills.setAttribute("class","about-me");
    section_home.setAttribute("class","home");
    section_header.setAttribute("class","header-visible");
},1000)    
}
var section_education=document.querySelector(".education");
function myEducation(){
    section_animation.setAttribute("class","animet-up");

    setTimeout(()=>{  
    section_education.setAttribute("class","education");
    section_header.setAttribute("class","header-none");
    section_home.setAttribute("class","home-none");
},1000)
}
function myHome_education(){
    section_animation.setAttribute("class","animet-down");

    setTimeout(()=>{
    section_education.setAttribute("class","about-me");
    section_home.setAttribute("class","home");
    section_header.setAttribute("class","header-visible");
},1000)
}



