// slider

	let slideIndex = 1,
		slides = document.querySelectorAll(".slider-item"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.querySelectorAll(".dot"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next");

	function showSlide(n) {

		if (n > slides.length) {
			slideIndex = 1;
		} else if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = "none");
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("dot-active");
	}
	showSlide();

	function nextSlide(n) {
		showSlide(slideIndex += n);
	};

	function currentSlide(n) {
		showSlide(slideIndex = n);
	}

	prev.addEventListener("click", function() {
		nextSlide(-1);
	});

	next.addEventListener("click", function() {
		nextSlide(1);
	});

	dotsWrap.addEventListener("click", function(e) {
		for(let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
