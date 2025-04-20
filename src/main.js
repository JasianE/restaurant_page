import home from "./home";
import about from "./about";
import menu from "./menu";
import "./style.css"

function main(){
    const body = document.getElementById('content');
    const home_btn = document.getElementById('home-btn');
    const menu_btn = document.getElementById('menu-btn')
    const about_btn = document.getElementById('about-btn')
    /*
    body.appendChild(home())
    body.appendChild(about())
    body.appendChild(menu())
    */
   function handleChange(id){
    if(id == "home-btn"){
        body.innerHTML = '';
        body.appendChild(home())
    } else if(id=="menu-btn"){
        body.innerHTML = '';
        body.appendChild(menu())
    } else {
        body.innerHTML = '';
        body.appendChild(about())
    }
   }
   home_btn.addEventListener("click", (e) => {
    handleChange(e.target.id);
   })
   menu_btn.addEventListener("click", (e) => {
    handleChange(e.target.id);
   })
   about_btn.addEventListener("click", (e) => {
    handleChange(e.target.id);
   })
   
}

main()