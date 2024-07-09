import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function IndustriesWeServe() {
	const [onScrollHappen, setOnScrollHappen] = createSignal(false);
	const [content, setContent] = createSignal([{
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

export default IndustriesWeServe