// glopal variable
const navbar=document.querySelector(".nav")
const navlist=document.querySelector(".navcontent")
const link=document.querySelectorAll(".link")
const sections=document.querySelectorAll(".sections")
const topbtn=document.querySelector(".top-btn")
const arraySections=[...sections]
const togglebutton=document.querySelector(".toggle-button")

//  automatic adding navbar when you add additional sections
function navBar(){
    arraySections.map((section)=>{
        const li =document.createElement('li')
        const tag=document.createElement('a')
        const sectionName=section.getAttribute('data-nav')
        const sectionNamePart = sectionName.replace(/\s/g, '').toLowerCase();
        tag.setAttribute('href','#'+sectionNamePart)
        tag.setAttribute('data-set',sectionNamePart)
        
        li.setAttribute('class','itemSection' +' ' +sectionNamePart)
        tag.innerText=sectionName
        li.appendChild(tag);
        navlist.appendChild(li);
        })
}
navBar()

// smooth scroll to specific seciton
navbar.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.dataset.set){
        document.getElementById(`${e.target.dataset.set}`)
        .scrollIntoView({behavior:"smooth"})
    }
    setTimeout(()=>{
        location.hash=`${e.target.dataset.set}`
    },300)
})

window.addEventListener('scroll',()=>{
    let current='';
    sections.forEach(section=>{
        const sectiontop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset >= (sectiontop-sectionHeight/3)){current=section.getAttribute('id')}
        
    })
    
    // add active class to li when related section in viewport
    const lilist =document.querySelectorAll(".navcontent li")
    lilist.forEach(li=>{
        li.classList.remove('active')
        if(li.classList.contains(current)){

            li.classList.add('active')
            
    }
    })
    
});
let lastScrollY=window.scrollY

// toggle between display and hidden navbar
// window.addEventListener('scroll',()=>{
//     if(lastScrollY<window.scrollY){
//         navlist.style.display='none'
//     }
//     else{
//         navlist.style.display='flex'
//     }
//     lastScrollY=window.scrollY
// })

// adding active class when section in viewport
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    

    }
    else{
         active.classList.remove("your-active-class");
    }
	});
}

 
// scroll to top button

topbtn.addEventListener('click',()=>{
navbar.scrollIntoView(false)    
})

// bar button in small screen
togglebutton.addEventListener('click',()=>{
    navlist.classList.toggle('active')
})