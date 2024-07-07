import './App.css'
import { createSignal, createEffect } from 'solid-js';

function App() {

	const enableHoverForFropFown = (dropdownElement, toggle = ".dropdown-toggle") => {
		const showDropdown = () => {
			const bsDropdown = new bootstrap.Dropdown(dropdownElement.querySelector(toggle));
			bsDropdown.show();
		};

		const hideDropdown = () => {
			const bsDropdown = new bootstrap.Dropdown(dropdownElement.querySelector(toggle));
			bsDropdown.hide();
		};

		dropdownElement.addEventListener('mouseenter', showDropdown);
		dropdownElement.addEventListener('mouseleave', hideDropdown);
	}
	createEffect(() => {
		const dropdownElements = document.querySelectorAll('.dropdown');
		dropdownElements.forEach(dropdownElement => enableHoverForFropFown(dropdownElement));
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
			<nav class="navbar navbar-expand-lg pL50 pR50">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img src="/logo.png" alt="" width="125" height="24" class="d-inline-block align-text-top" />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="/">Home</a>
							</li>
							<li class="nav-item dropdown" id="ourservicedropdown">
								<a class="nav-link dropdown-toggle removeBrowserDefaultOutline" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-trigger="hover focus">
									Our Services
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Customized Energy Storage Solutions</a></li>
									<li><a class="dropdown-item" href="#">Battery Energy Storage Systems (BESS)</a></li>
									<li><a class="dropdown-item" href="#">UPS Applications</a></li>
									<li><a class="dropdown-item" href="#">Turnkey Solutions</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Industries we serve</a>
							</li>

							<li class="nav-item dropdown" id="teamdropdown">
								<a class="nav-link dropdown-toggle removeBrowserDefaultOutline" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-trigger="hover focus">
									Team
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Executive Team</a></li>
									<li><a class="dropdown-item" href="#">Advisory Team</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="#">Why Choose Us?</a>
							</li>
							<li class="nav-item">
								<a class="nav-link getintouch" aria-current="page" href="https://powin.com/contact/" target='blank'>Get in touch</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div>
				<div class="welcome pL150per">Welcome to Onetron</div>
				<div class="pL150per mainContent">
					<div class="fw800">Innovative Energy Storage Solutions for a Sustainable Future</div>
					<div class="pT20">At Onetron, we specialize in delivering bespoke solutions for energy storage systems (ESS) and battery energy storage systems (BESS). With a commitment to innovation, safety, and scalability, we serve diverse industries including renewable energy, automotive, telecommunications, commercial, industrial sectors, and beyond. With a commitment to innovation, reliability, and environmental stewardship, we deliver cutting-edge technologies that redefine how energy is stored, managed, and utilized.</div>

					<div class="pT20">
						<span class="fw800">Our Vision</span> is to be one of the global leaders in energy storage solutions, driving the transition towards a clean and sustainable energy ecosystem through innovation and excellence.</div>
				</div>
			</div>
			{/* Footer */}
			<nav class="navbar fixed-bottom bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Fixed bottom</a>
				</div>
			</nav>
		</>
	)
}

export default App