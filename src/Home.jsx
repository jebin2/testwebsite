import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function Home() {
	createEffect(() => {
		const textElement = document.querySelector('.welcome');
		gsap.from(textElement, {
			opacity: 0,         // Start from opacity 0
			y: -50,             // Move down 100px
			duration: 1.5,      // Animation duration
			ease: 'power4.out', // Easing function
			delay: 0          // Delay before animation starts
		});


		const arrowElement = document.getElementById('arrow-down');
		const aboutOnetronElement = document.getElementById('aboutOnetron');
    // Hide arrow when aboutOnetron section is visible
    ScrollTrigger.create({
		trigger: aboutOnetronElement,
		start: 'top 80%',
		endTrigger: 'footer',
		end: 'bottom center',
		onEnter: () => {
		  arrowElement.style.visibility = 'hidden';
		}
	  });
		gsap.utils.toArray('.mainContent #aboutOnetron').forEach(section => {
			gsap.fromTo(section,
				{ opacity: 0, y: 100 },
				{
					opacity: 1, y: 0, duration: 1,
					scrollTrigger: {
						trigger: section,
						start: "top 90%",
						toggleAction: 'play none none none'
					}
				}
			);
		});
		gsap.utils.toArray('.visionImg').forEach(section => {
			gsap.fromTo(section,
				{ opacity: 0, x: -100 }, // Change y: 100 to x: -100 for left to right
				{
					opacity: 1, x: 0, duration: 1,
					scrollTrigger: {
						trigger: section,
						start: 'top 80%',
						toggleAction: 'play none none none'
					}
				}
			);
		});

		gsap.utils.toArray('.visionText').forEach(section => {
			gsap.fromTo(section,
				{ opacity: 0, x: +100 }, // Change y: 100 to x: -100 for left to right
				{
					opacity: 1, x: 0, duration: 1,
					scrollTrigger: {
						trigger: section,
						start: 'top 80%',
						toggleAction: 'play none none none'
					}
				}
			);
		});

	}, []);

	return (
		<>
			<div id="frontpage">
				<div class="welcome text-center fz40">Welcome to Onetron</div>
				<div class="text-center">
					<div class="mainContent fz20 pT20">
						<span class="subHead">Innovative Energy Storage Solutions for a Sustainable Future</span>
						<span>
							<img
								src="https://img.freepik.com/free-vector/scientists-with-lemon-charging-solar-pannels-wind-turbines-innovative-battery-technology-new-battery-creation-battery-science-project-concept_335657-2121.jpg"></img>
						</span>
					</div>
					<div id="arrow-down" class="arrow-down">
						<i class="bi bi-arrow-down-square"></i>
					</div>

					<div class="mainContent pT40 fz20">
						<div id="aboutOnetron" class="content-section">
							<div class="row align-items-center">
								<div class="col-6 text-center">
									<img class="feature-image" src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg" alt="Energy Management" />
								</div>
								<div class="col-6">
									<h3 class="section-title">Onetron's Expertise</h3>
									<p>At Onetron, we specialize in delivering bespoke solutions for energy storage systems (ESS) and battery energy storage systems (BESS). With a commitment to innovation, safety, and scalability, we serve diverse industries including:</p>
									<div class="industry-boxes">
										<div class="industry-box">Renewable energy</div>
										<div class="industry-box">Automotive</div>
										<div class="industry-box">Telecommunications</div>
										<div class="industry-box">Commercial sectors</div>
										<div class="industry-box">Industrial sectors</div>
									</div>
									<p>With a commitment to <strong>innovation, reliability, and environmental stewardship</strong>, we deliver cutting-edge technologies that redefine how energy is stored, managed, and utilized.</p>
								</div>
							</div>
						</div>

					</div>

				</div>
				<div class="row fz20 pT40 vision">
					<div class="col visionImg">
						<img src="https://img.freepik.com/free-vector/businessman-looking-camera-target-it-s-like-business-looking-way-be-successful-vector-business-illustration-concept_1150-60931.jpg"></img>
					</div>
					<div class="col visionText">
						<span class="fw800">Our Vision</span> is to be one of the global leaders in energy storage solutions, driving the transition towards a clean and sustainable energy ecosystem through innovation and excellence.
					</div>
				</div>
			</div>
		</>
	)
}

export default Home