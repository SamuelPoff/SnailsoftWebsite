
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("nav-menu");
const navMenuItems = document.getElementsByClassName("NavItem");

const navMenuHeight = CalcMenuChildrenHeight();
let previousWidth = 0;

hamburgerBtn.addEventListener("click", function(){

    //Toggles maxHeight value on the Navigation Menu for animation purposes
    if(menu.style.maxHeight == '0px'){
        //Toggles menu on
        menu.style.maxHeight = navMenuHeight.toString(10) + "px";
    }else{
        //Toggles menu off
        menu.style.maxHeight = 0;
    }
    
    
});

function CalcMenuChildrenHeight(){

    let itemArray = Array.from(navMenuItems);
    let runningHeight = 0;

    itemArray.forEach((menuItem) => {
        runningHeight += menuItem.clientHeight;
    });

    return runningHeight;

}

//Doing this check on resize is bad for performance, fine in the short-term
//but find an alternative solution that maybe only triggers an event when the window size crosses
//some exclusive width so it doesnt have to be checked every time
window.addEventListener("resize", function(event){

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    if( menu.style.maxHeight == "0px" ){

        if(width >= 600){
            
            //Hidden menu elements need to be revealed again
            menu.style.maxHeight = navMenuHeight.toString(10) + "px";
            
        }

    }else{

        //If window is moved from big to small, now the nav doesnt start out opened
        //NOTE
        //It does have to animate closing upon doing this which isnt ideal so find a fix eventually.
        if(previousWidth > 600 && width <= 600){
            menu.style.maxHeight = 0;
        }

    }
    
    previousWidth = width;

});
