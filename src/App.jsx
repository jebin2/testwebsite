import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [onScrollHappen, setOnScrollHappen] = createSignal(false);
	const [content, setContent] = createSignal([{
		"head": "Our Services",
		"list": [{
			"title": "Customized Energy Storage Solutions",
			"titleInfo": "We offer comprehensive services encompassing design, manufacturing, and integration of tailored energy storage solutions",
			"subInfo": [{
				"title": "Design Expertise",
				"titleInfo": "Collaborative approach to understand your unique requirements and develop custom solutions that meet specific performance, size, and integration needs."
			}, {
				"title": "Advanced Manufacturing",
				"titleInfo": "State-of-the-art facilities ensuring precision engineering and quality control throughout the production process."
			}, {
				"title": "Scalable Solutions",
				"titleInfo": "Modular designs that allow for scalable installations, adapting to varying power and energy demands, from small-scale C&I applications to large utility-scale projects."
			}, {
				"title": "Safety and Reliability",
				"titleInfo": "Rigorous testing and adherence to international standards (such as IEC, UL, and IEEE) to ensure safe operation and reliability under diverse environmental conditions."
			}]
		}, {
			"title": "Battery Energy Storage Systems (BESS)",
			"titleInfo": "Our BESS solutions leverage cutting-edge battery technologies to optimize energy storage and management",
			"subInfo": [{
				"title": "Grid Integration",
				"titleInfo": "Seamless integration with existing infrastructure or renewable energy sources to stabilize grid fluctuations and support renewable energy integration."
			}, {
				"title": "Advanced Controls",
				"titleInfo": "Intelligent energy management systems with real-time monitoring and predictive analytics for optimized performance and operational efficiency."
			}, {
				"title": "Longevity and Efficiency",
				"titleInfo": "High-performance battery chemistries and management strategies to maximize energy efficiency, minimize degradation, and extend operational lifespan."
			}, {
				"title": "Flexibility",
				"titleInfo": "Customizable configurations to meet specific project requirements, providing versatile solutions for both grid-connected and off-grid applications."
			}]
		}, {
			"title": "UPS Applications",
			"subInfo": [{
				"title": "Domestic Use",
				"titleInfo": "Ensure uninterrupted power supply for homes and residential buildings with reliable UPS solutions powered by advanced BESS technology. Protect sensitive electronics and maintain essential services during power outages."
			}, {
				"title": "Data Centers",
				"titleInfo": "Critical infrastructure demands reliable power continuity. Our UPS solutions provide seamless backup power to data centers, ensuring uninterrupted operation and safeguarding against data loss or downtime."
			}]
		}, {
			"title": "Turnkey Solutions",
			"titleInfo": "From concept to deployment, we offer comprehensive turnkey solutions that streamline the implementation of energy storage projects",
			"subInfo": [{
				"title": "Project Management",
				"titleInfo": "Dedicated project managers oversee every stage, from initial consultation and design to installation, commissioning, and ongoing support."
			}, {
				"title": "Integration Expertise",
				"titleInfo": "Seamless integration with existing infrastructure, ensuring compatibility and optimal performance with minimal disruption."
			}, {
				"title": "Training and Support",
				"titleInfo": "Comprehensive training programs and ongoing support to empower clients with the knowledge and tools to maximize the benefits of their energy storage systems."
			}, {
				"title": "Post-Deployment Services",
				"titleInfo": "Proactive maintenance programs and remote monitoring services to ensure continuous operation and performance optimization."
			}]
		}]
	}, {
		"head": "Industries we serve",
		"list": [{
			"titleInfo": "Our customized energy storage solutions empower businesses and communities across various sectors to embrace sustainable energy practices and achieve operational excellence:",
			"subInfo": [{
				"title": "Commercial & Industrial (C&I)",
				"titleInfo": "Enhance energy reliability, reduce peak demand charges, and optimize energy consumption with tailored BESS solutions for commercial facilities, data centers, manufacturing plants, and more.",
			}, {
				"title": "Renewable Energy Integration",
				"titleInfo": "Support renewable energy projects with scalable storage solutions that store excess energy and ensure stable grid operation."
			}, {
				"title": "Utilities",
				"titleInfo": "Optimize grid stability, peak shaving, and frequency regulation with advanced ESS deployments tailored to utility-scale applications."
			}, {
				"title": "Telecommunications",
				"titleInfo": "Ensure continuous power supply for critical telecom infrastructure with resilient BESS solutions."
			}, {
				"title": "Transportation",
				"titleInfo": "Enhance the performance and efficiency of electric vehicle (EV) charging stations with optimized energy storage solutions."
			}]
		}]
	}, {
		"head": "Team",
		"list":[{
			"title": "Executive Team",
			"titleInfo": "At Onetron, we are supported by a team of distinguished members who bring extensive experience and expertise in energy storage solutions. Their leadership helps us innovate develop and deliver cutting-edge solutions in the energy storage industry."
		}, {
			"title": "Advisory Team",
			"subTitle": "Why Advisors Matter for Onetron",
			"titleInfo": "At Onetron, our commitment to delivering cutting-edge energy storage solutions is reinforced by the invaluable expertise of our distinguished advisors. Their collective knowledge and strategic guidance play a pivotal role in shaping our innovation roadmap, market strategy, and operational excellence in the energy storage sector",
			"titleInfo2": "At Onetron, our advisors are integral to our success and leadership in the energy storage solutions industry. Their expertise, strategic guidance, and commitment to innovation empower us to deliver superior value, drive sustainable growth, and shape the future of energy storage technologies. Together, we are dedicated to advancing the transition towards a cleaner, more sustainable energy future."
		}]
	}]);
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
		window.addEventListener('load', function () {
			setTimeout(function () {
				window.scrollTo(0, 0);
			}, 0);
		});
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

		gsap.utils.toArray('.title,.section').forEach(section => {
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

	const scrollToView = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: "auto", block: "start", inline: "start" });
	}


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
									<li><a class="dropdown-item" onClick={[scrollToView, "ourservices"]}>Customized Energy Storage Solutions</a></li>
									<li><a class="dropdown-item" onClick={[scrollToView, "industriesweserve"]}>Battery Energy Storage Systems (BESS)</a></li>
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
				<For each={content()}>
					{(item, index) => (
						<div class="pL150per mT40 title">
							<span class="fw800 fz20">{item.head}</span>
							<For each={item.list}>
								{(list, listindex) => (

									<div class="section mT20 fz20">
										<span class="fw800">{list.title}</span>
										<Show when={list.subTitle}>
											<div>{list.subTitle}</div>
										</Show>
										<div>{list.titleInfo}</div>
										<Show when={list.titleInfo2}>
											<div>{list.titleInfo2}</div>
										</Show>
										<ul>
											<For each={list.subInfo}>
												{(subitem, subindex) => (
													<li>
														<span class="fw800">{subitem.title}:</span> {subitem.titleInfo}
													</li>
												)}
											</For>
										</ul>
									</div>
								)}
							</For>
						</div>
					)}
				</For>
			</div>
			<div style={{ height: "50px" }}></div>
			<footer class="footer">
				<span class="connectwithus fw800">Connect With Us</span>
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