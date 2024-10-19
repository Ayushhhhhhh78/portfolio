let menu_bar = document.getElementsByClassName('menu')[0]
let portnaav = document.getElementsByClassName('nav-for-port')[0]
let widthofnav = portnaav.offsetWidth;
// console.log(widthofnav)
let menu = () => {
    let source = menu_bar.getAttribute('src');
    if(source == 'images/menu-g.png'){
        menu_bar.setAttribute('src', 'images/menu-w.png')
        portnaav.classList.remove('portnav-off')
        portnaav.classList.add('portnav-on')
        setTimeout(() => {
            portnaav.style.cssText = 'left:0';
        }, 200)
    }else{
        menu_bar.setAttribute('src', 'images/menu-g.png')  
        portnaav.classList.remove('portnav-on')
        portnaav.classList.add('portnav-off')
        if(window.innerWidth > 360){
            setTimeout(() => {
                portnaav.style.cssText = `left:-40vw`;
            }, 200)
        }else{
            setTimeout(() => {
                portnaav.style.cssText = `left:-65vw`;
            }, 200)
        }
        
    }
}


//scrolling functions - 
let scAbout = document.getElementsByClassName('about')[0].offsetTop - 100;
let scrollToAbout = function(){
    window.scrollTo({ top: scAbout, behavior: 'smooth'});
}

let scProjects = document.getElementsByClassName('projects')[0].offsetTop - 100;
let scrollToProjects = function(){
    window.scrollTo({ top: scProjects, behavior: 'smooth'});
}

let scTechStack = document.getElementsByClassName('techStack')[0].offsetTop + 500;
let scrollToTeachStack = function(){
    window.scrollTo({ top: scTechStack, behavior: 'smooth'});
}

let scContact = document.getElementsByClassName('contact')[0].offsetTop + 500;
let scrollToContact = function(){
    window.scrollTo({ top: scContact, behavior: 'smooth'});
}

let scMore = document.getElementsByClassName('more')[0].offsetTop +500;
let scrollToMore = function(){
    window.scrollTo({ top: scMore, behavior: 'smooth'});
    // window.scrollTo(0,scroll.body.scrollHeight)
}
//scrolling functions end 