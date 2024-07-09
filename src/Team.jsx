import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { For } from "solid-js"
import { Show } from "solid-js"

gsap.registerPlugin(ScrollTrigger);

function Team() {
    const [onScrollHappen, setOnScrollHappen] = createSignal(false);
    const [content, setContent] = createSignal([{
        "head": "Team",
        "list": [{
            "title": "Executive Team",
            "titleInfo": "At Onetron, we are supported by a team of distinguished members who bring extensive experience and expertise in energy storage solutions. Their leadership helps us innovate develop and deliver cutting-edge solutions in the energy storage industry.",
            "memberList": [{
                "role": "Describe the role of each member",
                "background": "Highlight their professional background, including key accomplishments and areas of specialization.",
                "contribution": "Explain how their insights and strategic direction contribute to the company’s growth and success."
            }, {
                "role": "Describe the role of each member",
                "background": "Highlight their professional background, including key accomplishments and areas of specialization.",
                "contribution": "Explain how their insights and strategic direction contribute to the company’s growth and success."
            }, {
                "role": "Describe the role of each member",
                "background": "Highlight their professional background, including key accomplishments and areas of specialization.",
                "contribution": "Explain how their insights and strategic direction contribute to the company’s growth and success."
            }, {
                "role": "Describe the role of each member",
                "background": "Highlight their professional background, including key accomplishments and areas of specialization.",
                "contribution": "Explain how their insights and strategic direction contribute to the company’s growth and success."
            }, {
                "role": "Describe the role of each member",
                "background": "Highlight their professional background, including key accomplishments and areas of specialization.",
                "contribution": "Explain how their insights and strategic direction contribute to the company’s growth and success."
            }]
        }, {
            "title": "Advisory Team",
            "subTitle": "Why Advisors Matter for Onetron",
            "titleInfo": "At Onetron, our commitment to delivering cutting-edge energy storage solutions is reinforced by the invaluable expertise of our distinguished advisors. Their collective knowledge and strategic guidance play a pivotal role in shaping our innovation roadmap, market strategy, and operational excellence in the energy storage sector",
            "titleInfo2": "At Onetron, our advisors are integral to our success and leadership in the energy storage solutions industry. Their expertise, strategic guidance, and commitment to innovation empower us to deliver superior value, drive sustainable growth, and shape the future of energy storage technologies. Together, we are dedicated to advancing the transition towards a cleaner, more sustainable energy future.",
            "memberList": [{
                "role": "Mahendra - Technical Advisor",
                "background": "Dr. Mahendra holds a Ph.D. in Electrical Engineering from [University], with over 20 years of experience in battery technology and energy storage systems.",
                "contribution": "His expertise in advanced battery chemistries and grid integration strategies ensures that our solutions are at the forefront of technological innovation."
            }, {
                "role": "Harish Chandra Prasad - Strategic Advisor",
                "background": "Harish Chandra Prasad brings a wealth of experience in business development and market strategy, having led successful initiatives in the renewable energy sector.",
                "contribution": "Her strategic insights guide our market expansion efforts and partnerships, strengthening our position as a leader in customized energy storage solutions."
            }, {
                "role": "Harish Chandra Prasad - Strategic Advisor",
                "background": "Harish Chandra Prasad brings a wealth of experience in business development and market strategy, having led successful initiatives in the renewable energy sector.",
                "contribution": "Her strategic insights guide our market expansion efforts and partnerships, strengthening our position as a leader in customized energy storage solutions."
            }, {
                "role": "Harish Chandra Prasad - Strategic Advisor",
                "background": "Harish Chandra Prasad brings a wealth of experience in business development and market strategy, having led successful initiatives in the renewable energy sector.",
                "contribution": "Her strategic insights guide our market expansion efforts and partnerships, strengthening our position as a leader in customized energy storage solutions."
            }, {
                "role": "Harish Chandra Prasad - Strategic Advisor",
                "background": "Harish Chandra Prasad brings a wealth of experience in business development and market strategy, having led successful initiatives in the renewable energy sector.",
                "contribution": "Her strategic insights guide our market expansion efforts and partnerships, strengthening our position as a leader in customized energy storage solutions."
            }]
        }]
    }]);
    const advisory = [{
		"head": "Why we think Advisory board is important",
		"list": [{
			"title": "Industry Leadership and Experience",
			"subInfo": [{
				"title": "Navigating Complex Challenges",
				"titleInfo": "Energy storage solutions involve intricate technical, regulatory, and market dynamics. Our advisors bring decades of industry experience, providing invaluable insights into navigating these complexities effectively."
			}, {
				"title": "Insights into Emerging Trends",
				"titleInfo": "With a pulse on emerging technologies and market trends, our advisors ensure that Onetron remains at the forefront of innovation. They guide us in identifying and capitalizing on new opportunities in renewable energy integration, grid stability, and sustainable energy solutions."
			}]
		}, {
			"title": "Technical Expertise and Innovation",
			"subInfo": [{
				"title": "Advanced Technology Adoption",
				"titleInfo": "Advisors with deep technical backgrounds in battery chemistry, grid management, and renewable energy systems drive our adoption of state-of-the-art technologies. Their expertise ensures that our solutions are not only cutting-edge but also robust, efficient, and scalable."
			}, {
				"title": "R&D and Innovation Roadmap",
				"titleInfo": "Our advisors contribute significantly to our R&D efforts, shaping an innovation roadmap that aligns with market demands and regulatory standards. They help us anticipate future challenges and develop proactive solutions that meet the evolving needs of our clients and partners."
			}]
		}, {
			"title": "Strategic Direction and Market Expansion",
			"subInfo": [{
				"title": "Market Strategy and Business Development",
				"titleInfo": "Strategic advisors guide our market expansion initiatives and business development strategies. They leverage their extensive networks and industry insights to forge strategic partnerships and penetrate new markets, including commercial, industrial, and utility-scale applications."
			}, {
				"title": "Risk Management and Compliance",
				"titleInfo": "Advisors play a crucial role in risk management and compliance, ensuring that Onetron adheres to stringent industry regulations and standards. Their proactive approach mitigates risks, enhances operational efficiency, and strengthens our reputation as a reliable partner in the energy storage industry."
			}]
		}, {
			"title": "Collaborative Approach and Stakeholder Engagement",
			"subInfo": [{
				"title": "Building Stakeholder Trust",
				"titleInfo": "By fostering collaborative relationships with stakeholders, including clients, investors, and regulatory bodies, our advisors bolster stakeholder trust and confidence in Onetron’s capabilities. Their strategic guidance facilitates seamless project execution and supports sustainable long-term partnerships."
			}, {
				"title": "Adaptive Leadership",
				"titleInfo": "In a dynamic industry landscape, advisors provide adaptive leadership and strategic foresight. They assist us in navigating market uncertainties, optimizing resource allocation, and maintaining agility to capitalize on emerging opportunities effectively."
			}]
		}, {
			"title": "Commitment to Sustainability and Innovation",
			"subInfo": [{
				"title": "Driving Sustainability Initiatives",
				"titleInfo": "Advisors champion sustainability initiatives within Onetron, advocating for the integration of renewable energy sources and energy-efficient technologies. Their commitment to sustainability aligns with our mission to deliver environmentally responsible solutions that drive positive societal impact."
			}, {
				"title": "Corporate Social Responsibility (CSR)",
				"titleInfo": "Our advisors guide our CSR initiatives, ensuring that Onetron’s business practices uphold ethical standards and contribute positively to local communities and global sustainability goals."
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
            <div class="mLR10Per">
                <For each={content()}>
                    {(item, index) => (
                        <div class="mT40 title">
                            <span class="fw800 fz20">{item.head}</span>
                            <For each={item.list}>
                                {(list, listindex) => (
                                    <>
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
                                        <Show when={list.memberList}>
                                            <div class="card-container section mT20">
                                                <For each={list.memberList}>
                                                    {(mlist, mlistindex) => (
                                                        <div class="card" style="width: 18rem;">
                                                            <img src="..." class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                <h5 class="card-title">{mlist.role}</h5>
                                                                <p class="card-text">{mlist.background}</p>
                                                                <p class="card-text">{mlist.contribution}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </For>
                                            </div>
                                        </Show>
                                    </>
                                )}
                            </For>
                        </div>
                    )}
                </For>
                    <div>
				<For each={advisory}>
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
            </div>
        </>
    )
}

export default Team