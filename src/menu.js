"use strict"
export default function menu(){
    const menu_div = document.createElement("div");
    menu_div.textContent = "Welcome to the menu!";
    menu_div.classList.add("menu-list")

    const menuItems = [
        "Espresso",
        "Latte",
        "Cappuccino",
        "Americano",
        "Hot Chocolate",
        "Matcha Latte",
        "Blueberry Muffin",
        "Chocolate Croissant",
        "Avocado Toast",
        "Bagel with Cream Cheese"
      ];
      
      // Get the parent container
      const container = document.getElementById("menu-container");
      
      // Create the <ul> element
      const ul = document.createElement("ul");
      ul.classList.add("menu-list");
      
      // Loop through items and append <li> for each
      menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      
      // Append the <ul> to the container
      menu_div.appendChild(ul);
    return menu_div;
};