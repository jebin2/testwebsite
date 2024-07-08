import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [onScrollHappen, setOnScrollHappen] = createSignal(false);
	const enableHoverForDropdown = (dropdownElement, toggle = ".dropdown-toggle") => {
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
    const scrollHandler = () => {
		const scrollY = window.scrollY;
		setOnScrollHappen(scrollY > 0); // Update state based on scroll position
	};
	createEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		const dropdownElements = document.querySelectorAll('.dropdown');
		dropdownElements.forEach(dropdownElement => enableHoverForDropdown(dropdownElement));
		const textElement = document.querySelector('.welcome');
		gsap.from(textElement, {
			opacity: 0,         // Start from opacity 0
			y: -50,             // Move down 100px
			duration: 1.5,      // Animation duration
			ease: 'power4.out', // Easing function
			delay: 0          // Delay before animation starts
		});

		gsap.utils.toArray('#ourserives,.section').forEach(section => {
			gsap.fromTo(section,
				{ opacity: 0, y: 100 },
				{
					opacity: 1, y: 0, duration: 1,
					scrollTrigger: {
						trigger: section,
						start: section.className.includes("section") ? 'top 120%' : 'top 80%',
						toggleAction: 'play none none none'
					}
				}
			);
		});
	}, []);


	return (
		<>
			<nav class="navbar fixed-top bg-body-tertiary navbar-expand-lg pL50 pR50">
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
									<li><a class="dropdown-item" href="#ourserives">Customized Energy Storage Solutions</a></li>
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
			<div>
				<div id="ourserives" class="pL150per mT40">
					<span class="fw800 fz20">Our Services</span>
					<div id="cess" class="section mT20 fz20">
						<span class="fw800">Customized Energy Storage Solutions</span>
						<div>We offer comprehensive services encompassing design, manufacturing, and integration of tailored energy storage solutions</div>
						<ul>
							<li>
								<span class="fw800">Design Expertise:</span> Collaborative approach to understand your unique requirements and develop custom solutions that meet specific performance, size, and integration needs.
							</li>
							<li>
								<span class="fw800">Advanced Manufacturing:</span> State-of-the-art facilities ensuring precision engineering and quality control throughout the production process.
							</li>
							<li>
								<span class="fw800">Scalable Solutions:</span> Modular designs that allow for scalable installations, adapting to varying power and energy demands, from small-scale C&I applications to large utility-scale projects.
							</li>
							<li>
								<span class="fw800">Safety and Reliability:</span> Rigorous testing and adherence to international standards (such as IEC, UL, and IEEE) to ensure safe operation and reliability under diverse environmental conditions.
							</li>
						</ul>
					</div>
					<div id="bess" class="section mT20 fz20">
						<span class="fw800">Battery Energy Storage Systems</span>
						<div>
							Our BESS solutions leverage cutting-edge battery technologies to optimize energy storage and management
						</div>
						<ul>
							<li>
								<span class="fw800">Grid Integration:</span> Seamless integration with existing infrastructure or renewable energy sources to stabilize grid fluctuations and support renewable energy integration.
							</li>
							<li>
								<span class="fw800">Advanced Controls:</span> Intelligent energy management systems with real-time monitoring and predictive analytics for optimized performance and operational efficiency.
							</li>
							<li>
								<span class="fw800">Longevity and Efficiency:</span> High-performance battery chemistries and management strategies to maximize energy efficiency, minimize degradation, and extend operational lifespan.
							</li>
							<li>
								<span class="fw800">Flexibility:</span> Customizable configurations to meet specific project requirements, providing versatile solutions for both grid-connected and off-grid applications.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div style={{height: "50px"}}></div>
			<footer class="footer">
				<div class="container fs-2">
						<span>
							<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
								<i class="bi bi-facebook"></i>
							</a>
						</span>
						<span>
							<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
								<i class="bi bi-twitter-x"></i>
							</a>
						</span>
						<span>
							<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
								<i class="bi bi-linkedin"></i>
							</a>
						</span>
						<span>
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
								<i class="bi bi-instagram"></i>
							</a>
						</span>
				</div>
			</footer>
		</>
	)
}

export default App