import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
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
	}]);
	const scrollHandler = () => {
		const scrollY = window.scrollY;
		setOnScrollHappen(scrollY > 0); // Update state based on scroll position
	};
	createEffect(() => {
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


	return (
		<>
			<div class="mLR10Per">
				<For each={content()}>
					{(item, index) => (
						<div class="mT40 title">
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
		</>
	)
}

export default OurServices