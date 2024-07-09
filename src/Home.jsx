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
	}, []);

	return (
		<>
			<div id="frontpage">
				<div class="welcome pL150per fz40">Welcome to Onetron</div>
				<div class="pL150per mainContent fz20 pT40">
					<div class="fw800">Innovative Energy Storage Solutions for a Sustainable Future</div>
					<div class="pT40">At Onetron, we specialize in delivering bespoke solutions for energy storage systems (ESS) and battery energy storage systems (BESS). With a commitment to innovation, safety, and scalability, we serve diverse industries including renewable energy, automotive, telecommunications, commercial, industrial sectors, and beyond. With a commitment to innovation, reliability, and environmental stewardship, we deliver cutting-edge technologies that redefine how energy is stored, managed, and utilized.</div>

					<div class="pT40 vision">
						<span class="fw800">Our Vision</span> is to be one of the global leaders in energy storage solutions, driving the transition towards a clean and sustainable energy ecosystem through innovation and excellence.
					</div>
				</div>
			</div>
		</>
	)
}

export default Home