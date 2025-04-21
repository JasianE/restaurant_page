"use strict"
export default function about(){
    const about_div = document.createElement('div');
    about_div.classList.add("about-container")
    const aboutText = [
        { tag: "h2", text: "☕ About Us" },
        { tag: "p", text: "Welcome to Brew & Bite, your cozy neighborhood café where good vibes meet great flavor." },
        { tag: "p", text: "Founded in 2020, Brew & Bite was born out of a love for quality coffee, homemade treats, and meaningful connection. Whether you're grabbing a quick espresso on the way to work or settling in for an afternoon chat over matcha and muffins, we’re here to make your day a little better." },
        { tag: "p", text: "Our mission is simple:" },
        { tag: "strong", text: "Serve fresh, serve kind, serve local." },
        { tag: "p", text: "Everything we make is crafted with care — from our fair-trade beans to our locally-sourced pastries. We believe in sustainability, community, and the magic of a really good cup of coffee." },
        { tag: "p", text: "Thanks for stopping by. We’re glad you’re here." }
      ];
      
      const aboutContainer = document.getElementById("about-container");
      
      // Loop and create elements
      aboutText.forEach(item => {
        const el = document.createElement(item.tag);
        el.textContent = item.text;
        about_div.appendChild(el);
      });
      
    return about_div;
};