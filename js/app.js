const navbar=document.querySelector(".nav")
const navlist=document.querySelector(".navcontent")
const link=document.querySelectorAll(".link")
const sections=document.querySelectorAll(".sections")
const arraySections=[...sections]
function navBar(){
    
    arraySections.map((section)=>{
        const li =document.createElement('li')
        const tag=document.createElement('a')
        const sectionName=section.getAttribute('data-nav')
        const sectionNamePart = sectionName.replace(/\s/g, '').toLowerCase();
        tag.setAttribute('href','#'+sectionNamePart)
        li.setAttribute('class',sectionNamePart)
        tag.innerText=sectionName
        li.appendChild(tag);
        navlist.appendChild(li);
        })
}
navBar()

window.addEventListener('scroll',()=>{
    let current='';
    sections.forEach(section=>{
        const sectiontop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset >= (sectiontop-sectionHeight/3)){current=section.getAttribute('id')}
        
    })
    const lilist =document.querySelectorAll(".navcontent li")
    lilist.forEach(li=>{
        li.classList.remove('active')
        if(li.classList.contains(current)){
            li.classList.add('active')
    }
    })
    
});
let lastScrollY=window.scrollY
window.addEventListener('scroll',()=>{
    if(lastScrollY<window.scrollY){
        navlist.style.display='none'
    }
    else{
        navlist.style.display='flex'
    }
    lastScrollY=window.scrollY
})
window.addEventListener('scroll',()=>{
    const clientHeight=document.documentElement.clientHeight
    sections.forEach(section=>{
        const sectiony=section.getBoundingClientRect().y
        const sectionHeight=section.getBoundingClientRect().height
        if(clientHeight>sectiony+sectionHeight*2/3){
            section.classList.add("sectionactive")
        }
    
    })
    
})



