/**************************************************
 * Studio Info & Conditionals
 **************************************************/

let studioName = "Stellar Film Productions";
let moviesThisYear = 3;

document.addEventListener("DOMContentLoaded", () => {
    const infoDiv = document.getElementById("info");
    if (infoDiv) {
        infoDiv.textContent = `${studioName} has ${moviesThisYear} exciting films releasing this year! 🍿`;
    }
});

/**************************************************
 * Functions
 **************************************************/

function greetDirector(name) {
    alert(`Hello! I'm ${name}, your director for this cinematic journey! 🎬`);
}

function toggleLights() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black" ? "#f4f4f4" : "black";
    document.body.style.color =
        document.body.style.color === "white" ? "black" : "white";
}

/**************************************************
 * Movie Cards
 **************************************************/

const movies = [
	{
		title: "KUYO",
		poster: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=800&auto=format&fit=crop",
		description: "A thrilling journey into the unknown, blending suspense and adventure."
	},
	{
		title: "COACH CARTER",
		poster: "https://images.pexels.com/photos/264337/pexels-photo-264337.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "A powerful story of discipline, teamwork, and belief."
	},
	{
		title: "LUCKIEST GIRL ALIVE",
		poster: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "An investigation into hidden pasts and the secrets we keep."
	},
	{
		title: "JAMIES HALLOWEEN VLOG",
		poster: "https://images.pexels.com/photos/23879716/pexels-photo-23879716.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "A spooky night adventure captured in thrilling vlogs."
	},
	{
		title: "BIG GIRLS DON'T CRY",
		poster: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800&auto=format&fit=crop",
		description: "A heartfelt drama about resilience, friendship, and finding your voice."
	}
];

document.addEventListener("DOMContentLoaded", () => {
    const movieCardsDiv = document.getElementById("movieCards");

    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const desc = document.createElement("p");
        desc.textContent = `"${movie.description}"`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);

        movieCardsDiv.appendChild(card);
    });
});

/**************************************************
 * DOM Buttons
 **************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greetBtn");
    if (greetButton) greetButton.addEventListener("click", () => greetDirector("Alex Nova"));

    const toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) toggleBtn.addEventListener("click", toggleLights);
});
