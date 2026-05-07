import pastaImg from "./images/pasta-2.jpg";
import pastaImg2 from "./images/pasta-3.jpg";
import cocktailImg from "./images/mojito.jpg";
import wineImg from "./images/wine.jpg";
import tiramisuImg from "./images/tiramisu.jpg";
import drinksImg from "./images/Italian wines.jpg";
import pizzaImg from "./images/pizza.jpg";
import dessertImg from "./images/desserts.jpg";
import interiorImg from "./images/interior.jpg";
import saladImg from "./images/salad.jpg";
import saladImg2 from "./images/salad-2.jpg";
import dumplingImg from "./images/dumplings.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear existing content

  // Hero Section
  const hero = document.createElement("section");
  hero.classList.add("hero");
  hero.innerHTML = `
    <div class="hero-content">
      <h1>Verde & Vino</h1>
      <p>Where nature meets flavor</p>
    </div>
  `;

  // About Section
  const about = document.createElement("section");
  about.classList.add("about-section");
  about.innerHTML = `
    <div class="container">
      <h2>About Verde & Vino</h2>
      <p class="about-text">
        For over three generations, Vine & Verde has celebrated the artistry of authentic Italian fine dining, blending timeless Tuscan traditions with the vibrant spirit of Lagos.
        Inspired by the warmth of Italian hospitality, our kitchen brings together handcrafted recipes, fresh ingredients, and refined flavors to create an unforgettable dining experience where elegance, culture, and passion meet at every table.
      </p>
      <p class="about-text">
        At Verde & Vino, we believe that food is more than sustenance—it's a celebration of life, family, and community. 
        Every ingredient is carefully selected, every dish is prepared with love, and every meal is an invitation to experience the warmth of Italian hospitality.
      </p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="feature-title">Fresh Ingredients</h3>
          <p class="feature-text">Sourced daily from local farms and imported directly from Italy</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
          </div>
          <h3 class="feature-title">Family Recipes</h3>
          <p class="feature-text">Traditional recipes passed down through generations</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" /></svg>
          </div>
          <h3 class="feature-title">Expert Chefs</h3>
          <p class="feature-text">Trained and passionate about authentic cuisine</p>
        </div>
      </div>
    </div>
  `;

  //  Reviews Section (Slider)
  const reviews = document.createElement("section");
  reviews.classList.add("reviews-section");
  reviews.innerHTML = `
    <div class="container">
      <h2 class="review-h2" style="text-align:center; color: var(--color-vino); margin-bottom: 2.5rem;">What Our Customers Say</h2>
      
      <div class="review-slider-wrapper">
        <button id="prev-slide" class="slide-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div class="review-grid-container">
          <div class="review-image-box">
            <img id="slider-image" src="" alt="Delicious Italian Food">
          </div>
          
          <div class="review-text-box">
            <h3 id="slider-title" class="review-heading"></h3>
            <p id="slider-text" class="review-paragraph"></p>
            <p id="slider-author" class="review-author"></p>
          </div>
        </div>

        <button id="next-slide" class="slide-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  `;

  //  Socials Section
  const socials = document.createElement("section");
  socials.classList.add("socials-section");
  socials.innerHTML = `
    <div class="container">
      <div class="socials-header">
        <h2 class="windsong-medium">Follow Our Journey</h2>
        <p>@VerdeAndVino</p>
      </div>
      
      <div class="socials-grid">
        <div class="social-img-wrapper"><img src="${pastaImg}" alt="Pasta" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${interiorImg}" alt="Restaurant Interior" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${wineImg}" alt="Wine Pouring" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${cocktailImg}" alt="Virjin Mojito" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${pastaImg2}" alt="Pata" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${saladImg2}" alt="salad" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${drinksImg}" alt="Wine" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${dessertImg}" alt="Dessert" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${tiramisuImg}" alt="Tiramisu" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${pizzaImg}" alt="Pizza" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${dumplingImg}" alt="Dumpling" class="social-img"></div>
        <div class="social-img-wrapper"><img src="${saladImg}" alt="Salad" class="social-img"></div>
        
      </div>
    </div>
  `;

  content.appendChild(hero);
  content.appendChild(about);
  content.appendChild(reviews);
  content.appendChild(socials);

  const reviewData = [
    {
      image: pastaImg,
      title: "THE BEST PASTA I'VE EVER HAD",
      text: "Omo, I don't know what you spent your weekend eating, but I had the Spaghetti Pomodoro. Bowls and bowls of it. Honestly, I blame the Chef. Not only did he give in to my repetitive requests, but he did so delectably. The fresh basil and perfectly al dente pasta had me practically begging for more.",
      author: "- Sarah Oyedele",
    },
    {
      image: wineImg,
      title: "A PERFECT WINE PAIRING",
      text: "The ambiance is incredible, but the Chianti Classico paired with the Arancini completely stole the show. It’s rare to find a place that honors the rustic traditions of Tuscany while feeling so modern and welcoming. It's my new favorite spot.",
      author: "- David L.",
    },
    {
      image: tiramisuImg,
      title: "UNFORGETTABLE TIRAMISU",
      text: "If you come here, save room for dessert. The Tiramisu is light, airy, and has the absolute perfect balance of espresso and mascarpone. It literally melts in your mouth. Five stars, without a doubt.",
      author: "- Maria C.",
    },
  ];

  let currentIndex = 0;

  const sliderImg = document.getElementById("slider-image");
  const sliderTitle = document.getElementById("slider-title");
  const sliderText = document.getElementById("slider-text");
  const sliderAuthor = document.getElementById("slider-author");

  function updateSlider(index) {
    const data = reviewData[index];
    sliderImg.src = data.image;
    sliderTitle.textContent = data.title;
    sliderText.textContent = data.text;
    sliderAuthor.textContent = data.author;
  }

  updateSlider(currentIndex);

  document.getElementById("prev-slide").addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    currentIndex =
      currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
  });
}
