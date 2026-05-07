import salmonImg from "./images/salmon.jpg";
import drinksImg from "./images/Italian wines.jpg";
import pastaImg from "./images/pasta.jpeg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("menu-page-bg");

  wrapper.innerHTML = `
    <div class="container">
      
      <div class="menu-page-header">
        <h2 class="windsong-regular">Our Menu</h2>
      </div>

      <div class="menu-category-layout">
        <div class="menu-list-side">
          <div class="menu-list-item">
            <h4 class="item-name">GRILLED SALMON</h4>
            <p class="item-desc">FRESH ATLANTIC SALMON, HERBS, CITRUS GLAZE, SEASONAL VEGETABLES</p>
            <p class="item-price">₦8,500 <span class="item-addon">; DOUBLE PORTION ₦15,000</span></p>
          </div>

          <div class="menu-list-item">
            <h4 class="item-name">GARDEN SALAD</h4>
            <p class="item-desc">ORGANIC GREENS, CHERRY TOMATOES, CUCUMBER, BALSAMIC VINAIGRETTE</p>
            <p class="item-price">₦3,500</p>
            <p class="item-addon-line">*VEGAN VERSION (NO CHEESE): ₦3,500</p>
          </div>
        </div>

        <div class="menu-featured-side">
          <div class="category-title-wrapper">
            <h3 class="windsong-medium">Signatures</h3>
          </div>
          <img src="${salmonImg}" alt="Featured Dish" class="featured-img" />
        </div>
      </div>

      <div class="menu-category-layout alt-layout">
        <div class="menu-list-side">
          <div class="menu-list-item">
            <h4 class="item-name">FETTUCCINE ALFREDO</h4>
            <p class="item-desc">CREAMY PARMESAN SAUCE, TOUCH OF NUTMEG, FRESH PARSLEY</p>
            <p class="item-price">₦6,500 <span class="item-addon">; ADD CHICKEN ₦2,000</span></p>
          </div>

          <div class="menu-list-item">
            <h4 class="item-name">LINGUINE ALLE VONGOLE</h4>
            <p class="item-desc">WHITE WINE SAUCE, CLAMS, GARLIC, PARSLEY</p>
            <p class="item-price">₦8,000</p>
          </div>
        </div>

        <div class="menu-featured-side">
          <div class="category-title-wrapper">
            <h3 class="windsong-medium">Classics</h3>
          </div>
          <img src="${pastaImg}" alt="Classic Dish" class="featured-img" /> 
        </div>
      </div>

      <div class="menu-category-layout">
        <div class="menu-list-side">
          
          <div class="menu-list-item">
            <h4 class="item-name">CRISP PALE ALE</h4>
            <p class="item-desc">LOCALLY BREWED, REFRESHING CITRUS NOTES [BEER] [ALCOHOLIC]</p>
            <p class="item-price">₦2,500</p>
          </div>

          <div class="menu-list-item">
            <h4 class="item-name">CLASSIC MARGARITA</h4>
            <p class="item-desc">TEQUILA, FRESH LIME JUICE, AGAVE, SALT RIM [COCKTAIL] [ALCOHOLIC]</p>
            <p class="item-price">₦4,500 <span class="item-addon">; SPICY JALAPEÑO ₦5,000</span></p>
          </div>

          <div class="menu-list-item">
            <h4 class="item-name">SAUVIGNON BLANC</h4>
            <p class="item-desc">BRIGHT, ZESTY, AND CRISP BY THE GLASS [WINE] [ALCOHOLIC]</p>
            <p class="item-price">₦5,000</p>
          </div>

          <div class="menu-list-item">
            <h4 class="item-name">FRESH MINT LEMONADE</h4>
            <p class="item-desc">FRESHLY SQUEEZED LEMONS, MINT LEAVES, CANE SUGAR [NON-ALCOHOLIC]</p>
            <p class="item-price">₦2,000</p>
          </div>

        </div>

        <div class="menu-featured-side">
          <div class="category-title-wrapper">
            <h3 class="windsong-medium">Beverages</h3>
          </div>
          <img src="${drinksImg}" alt="Refreshing Drinks" class="featured-img" /> 
        </div>
      </div>

    </div>
  `;

  content.appendChild(wrapper);
}
