
//HEADER AND NAVICATION BAR
var navi=document.querySelector(".navi-none");
var icon_change=document.querySelector(".bi-list");
console.log(icon_change);
function menuList(){
    let navi_none=navi.getAttribute("class");

    if(navi_none =="navi-none"){
        
        navi.setAttribute("class","navi-visible");
        icon_change.setAttribute("class","bi-box-arrow-in-right");
    }
    else{
      
        navi.setAttribute("class","navi-none");
        icon_change.setAttribute("class","bi-list");
    
    }
    
}
// click to change section 


var section_about=document.querySelector(".about-home");
var section_home=document.querySelector(".home");
var section_education=document.querySelector(".education");
var section_demo=document.querySelector(".project");

var section_skills=document.querySelector(".skills");
var section_animation=document.querySelector(".animet")

function sectionChecker(class_name){
   
    
    if(section_animation.getAttribute("class")!="animet-up"){
        section_animation.setAttribute("class","animet-up")
    }
    else{
        section_animation.setAttribute("class","animet-down")
    }
    console.log(class_name);
    switch(class_name){
        case ".about-home":
            setTimeout(()=>{
                section_about.setAttribute("class","about-me-visible");
                section_home.setAttribute("class","home-none");
                section_demo.setAttribute("class","home-none");
                section_skills.setAttribute("class","home-none");
                section_education.setAttribute("class","home-none");
                
            },500)
            break;
         case ".home":
            setTimeout(()=>{
                section_about.setAttribute("class","home-none");
                section_home.setAttribute("class","home");
                section_demo.setAttribute("class","home-none");
                section_skills.setAttribute("class","home-none");
                section_education.setAttribute("class","home-none");
                
            },500)
            break;
         case ".project":
            setTimeout(()=>{
                section_about.setAttribute("class","home-none");
                section_home.setAttribute("class","home-none");
                section_demo.setAttribute("class","project");
                section_skills.setAttribute("class","home-none");
                section_education.setAttribute("class","home-none");
                
            },500)
            break;

        case ".skills":
            setTimeout(()=>{
                section_about.setAttribute("class","home-none");
                section_home.setAttribute("class","home-none");
                section_demo.setAttribute("class","home-none");
                section_skills.setAttribute("class","skills");
                section_education.setAttribute("class","home-none");
                
            },500)
            break;

        case ".education":
            setTimeout(()=>{
                section_about.setAttribute("class","home-none");
                section_home.setAttribute("class","home-none");
                section_demo.setAttribute("class","home-none");
                section_skills.setAttribute("class","home-none");
                section_education.setAttribute("class","education");
                
            },500)
            break;
        
            default:
                console.log("wrong");
                console.log(class_name)

        }
    
}
var social_visible1=document.querySelector(".animat-5");
var social_visible2=document.querySelector(".animat-4");
var social_visible3=document.querySelector(".animat-3");
var social_visible4=document.querySelector(".animat-2");
var social_visible5=document.querySelector(".animat-1");
function socialAnimat(){
    console.log(social_visible1.getAttribute("class"))
    if(social_visible1.getAttribute("class")=="animat-5"){
        animatVis()
    }
    else{
        animatNone()
    }  
      function animatVis(){
        setTimeout(e=>{
            social_visible1.setAttribute("class","animat-vis-5");
            console.log(social_visible1.getAttribute("class"));

        },300);
        
        setTimeout(e=>{
           social_visible2.setAttribute("class","animat-vis-4");
        },600);
       
        setTimeout(e=>{
           social_visible3.setAttribute("class","animat-vis-3");
        },900);
        
        setTimeout(e=>{
            social_visible4.setAttribute("class","animat-vis-2");
        },1200);
       
        setTimeout(e=>{
            social_visible5.setAttribute("class","animat-vis-1");
        },1500); 
        
        
    }

    function animatNone(){
        setTimeout(e=>{
            social_visible1.setAttribute("class","animat-5");
        },300);
        
        setTimeout(e=>{
           social_visible2.setAttribute("class","animat-4");
        },600);
       
        setTimeout(e=>{
           social_visible3.setAttribute("class","animat-3");
        },900);
        
        setTimeout(e=>{
            social_visible4.setAttribute("class","animat-2");
        },1200);
       
        setTimeout(e=>{
            social_visible5.setAttribute("class","animat-1");
        },1500);
    }

}


