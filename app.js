gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


const toggleBtn = document.getElementById('burger');
const slideBox = document.getElementById('panel');
const allsite = document.getElementById('allsite');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;



  if (isOpen) {
    gsap.to(slideBox, {
		duration: 0.6,
		right: '0',
		backgroundColor: 'rgba(0, 0, 0, 0.960)',
		ease: 'power4.out'
    });
  } else {
    // Анимация скрытия
    gsap.to(slideBox, {
		duration: 0.4,
		right: '-100%',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		ease: 'power2.in'
    });
  }
});


function closePanel() {
  gsap.to(slideBox, { duration: 0.4, right: '-100%', ease: "power3.in"});
  isOpen = false;
}


if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.vet1', { rotate: '0deg', scale:1 }, {
		rotate: '-15deg', scale:1.3, left: 0,
		scrollTrigger: {
			trigger: '.saz',
			start: 'center',
			end: '2600',
			scrub: true
		}
	})
	gsap.fromTo('.vet2', { rotate: '0deg', scale:1 }, {
		rotate: '15deg', scale:1.3, right: 0,
		scrollTrigger: {
			trigger: '.saz',
			start: 'center',
			end: '2600',
			scrub: true
		}
	})
		gsap.fromTo('.loza1', { rotate: '0deg', scale:1 }, {
		rotate: '13deg', scale:1.1, left: '-8%', 
		scrollTrigger: {
			trigger: '.main',
			start: 'start',
			end: '1720',
			scrub: true
		}
	})
			gsap.fromTo('.loza3', { rotate: '0deg', scale:1 }, {
		rotate: '-13deg', scale:1.1, right: '-11%', 
		scrollTrigger: {
			trigger: '.main',
			start: 'start',
			end: '1720',
			scrub: true
		}
	})
		gsap.fromTo('footer', { border: `gray 0vw solid;`}, {
		border: `gray 2vw solid;`,
		scrollTrigger: {
			trigger: '.opa',
			start: 'top',
			end: '720',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}gsap.registerPlugin(ScrollTrigger, SplitText);

document.querySelectorAll('.foot-2 .p2, .foot-3 .p2, .foot-4 .p2').forEach((title) => {
  const split = new SplitText(title, { type: "chars" });

  gsap.from(split.chars, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.03,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      once: true // чтобы анимация проигрывалась только один раз
    }
  });
});
document.querySelectorAll('.foot-2 .p1, .foot-3 .p1, .foot-4 .p1').forEach((title_1) => {
  const split_1 = new SplitText(title_1, { type: "chars" });

  gsap.from(split_1.chars, {
    opacity: 0,
    duration: 1.8,
    ease: "power4.out",
    scrollTrigger: {
      trigger: title_1,
    //   start: "top 90%",
    //   end: "bottom 60%",
      toggleActions: "play none none reverse",
      once: true, // чтобы анимация проигрывалась только один раз
    }
  });
});
