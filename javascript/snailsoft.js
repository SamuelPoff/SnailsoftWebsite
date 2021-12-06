
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenuItems = document.getElementsByClassName("NavItem");

function ToggleNavMenu(){
    for(var i = 0;i < navMenuItems.length; i++){
        navMenuItems[i].classList.toggle("hide");
    }
}

hamburgerBtn.addEventListener("click", function(){

    ToggleNavMenu();
    
});

function ElementsHidden(){
    return (navMenuItems[0].classList.contains("hide"));
}


window.addEventListener("resize", function(event){

    if( ElementsHidden() ){

        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
    
        if(width >= 600){
            
            //Hidden menu elements need to be revealed again
            ToggleNavMenu();
    
        }

    }
    

});
