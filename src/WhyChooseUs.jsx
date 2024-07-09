import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
    const content = [{
		"head": "Why Choose Us",
		"list": [{
			"subInfo": [{
				"title": "Innovation",
				"titleInfo": "Continuous investment in research and development to integrate the latest advancements in battery technology and energy management systems."
			}, {
				"title": "Expertise",
				"titleInfo": "Extensive experience in delivering complex energy storage solutions across diverse industries and applications."
			}, {
				"title": "Quality Assurance",
				"titleInfo": "Stringent quality control measures and adherence to industry standards to deliver products that exceed performance, safety, and reliability expectations."
			}, {
				"title": "Customer-Centric Approach",
				"titleInfo": "Collaborative partnerships with clients to understand their unique challenges and deliver tailored solutions that align with specific operational and financial objectives."
			}]
		}]
	}];
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
            <div class="mLR10Per whychooseus">
				<For each={content}>
					{(item, index) => (
						<div class="mT40 title">
							<span class="fw800 fz20 head">{item.head}</span>
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

export default WhyChooseUs;