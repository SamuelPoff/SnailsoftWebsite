
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("nav-menu");
const navMenuItems = document.getElementsByClassName("NavItem");

const navMenuHeight = CalcMenuChildrenHeight();

function ToggleNavMenu(){
    for(var i = 0;i < navMenuItems.length; i++){
        navMenuItems[i].classList.toggle("hide");
    }
}

hamburgerBtn.addEventListener("click", function(){

    //ToggleNavMenu();

    //Toggles maxHeight value on the Navigation Menu for animation purposes
    if(menu.style.maxHeight == '0px'){
        console.log("TOGGLING ON");
        menu.style.maxHeight = navMenuHeight.toString(10) + "px";
    }else{
        console.log("TOGGLING OFF");
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

function ElementsHidden(){
    return (navMenuItems[0].classList.contains("hide"));
}


window.addEventListener("resize", function(event){

    if( menu.style.maxHeight == "0px" ){

        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;

        if(width >= 600){
            
            //Hidden menu elements need to be revealed again
            menu.style.maxHeight = navMenuHeight.toString(10) + "px";
    
        }

    }
    

});
