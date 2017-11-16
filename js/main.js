// MOBILE MENU OPEN AND CLOSE - DO NOT ALTER!!

console.log(
	"If you would like to see some plans for the future of the site you can see them by clearing the console and then running the function 'whatsNext()' "
);
console.log("");
console.log("Enjoy"); //

function menuOpenClose() {
	// OPEN MENU FUNCTION
	if (
		document
			.getElementById("menuSlide")
			.classList.contains("menuMobile" && "slideMenuOpen")
	) {
		document.getElementById("menuSlide").classList.add("menuMobileOpen");
		document.getElementById("x").classList.add("xClose");
		document.getElementById("y").classList.add("yClose");
		document.getElementById("z").classList.add("zClose");
		document.getElementById("background").classList.add("backgroundOn");
		document.getElementById("menuSlide").classList.remove("slideMenuOpen");
		document.querySelector("body").style.overflow = "hidden";
		console.log("That menu open is smooth, am I right?");
	} else {
		// CLOSE MENU FUNCTION
		document.getElementById("menuSlide").classList.remove("menuMobileOpen");
		document.getElementById("x").classList.remove("xClose");
		document.getElementById("y").classList.remove("yClose");
		document.getElementById("z").classList.remove("zClose");
		document.getElementById("background").classList.remove("backgroundOn");
		document.getElementById("menuSlide").classList.add("slideMenuOpen");
		document.querySelector("body").style.overflow = "auto";
		console.log("Yeah, the close is just as smooth.");
	}
}

//  menuOpenClose();

document.getElementById("menuBtn").addEventListener("click", function() {
	menuOpenClose();
});

document.getElementById("background").addEventListener("click", function() {
	menuOpenClose();
});

// WHAT'S NEXT CONSOLE LOG LIST
// PLAYS IN ORDER WITH setTimeout() GIVING THE TIME FUNCTION FOR DISPLAY

function whatsNext() {
	// console.clear();
	console.log("Hi there.");
	console.log(
		"So this is the part of the site will keep some updates for what changes and updates I want to make for the site."
	);
	console.log("");
	console.log("So here we go.");

	setTimeout(function() {
		console.log(
			//TRWhitaker.io idea
			"First off I would like to refactor the style of the site with Sass, it is currently built in plain CSS which is great but Sass could just make life that little easier"
		);
		console.log("");
	}, 1500);

	setTimeout(function() {
		console.log(
			//Other Projects
			"As well as this site I also have some side projects currently in the works at different levels of production such as the following"
		);
		console.log("");
	}, 3000);

	setTimeout(function() {
		console.log(
			//Framelines bio
			"Framelines.photo is all aobut my Film Photography, This site will mainly be a blog about my experience shooting film and different film cameras that I have owned over the years."
		);
		console.log(
			//Framelines Concept
			"I would like to rebuild this site completely from the ground up with Google's AMP, after going to the AMP Sydney event I can really see the benefit of building something fast and performant using AMP."
		);
		console.log("");
	}, 4500);

	setTimeout(function() {
		console.log(
			//Photography website name.
			"I am also looking at building a website specifically for my Jewllery and product photography, this is a big passion of mine and I want to continue with this as a business."
		);
		console.log("");
	}, 6000);

	setTimeout(function() {
	console.log(
		//CSS Framework
		"I am currently looking into building a CSS framework with one of my classmates from GA and a great developer Gareth Jones. This will ideally be something light weight and animation driven. Gareth and I wanted to start this project as we thought that having something like this in our portfolio's would be really good to have."
	);
}, 7500);

}
