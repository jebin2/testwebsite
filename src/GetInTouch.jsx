import './App.css'
import { createSignal, createEffect } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GetInTouch() {
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
                <div class="mT40 title">
                    <span class="fw800 head"></span>
                    <div class="mT20">
                        <div class="section fz20">
                            <section class="contact-section bg-light">
                                <div class="container">
                                    <div class="row gy-3 align-items-center">
                                        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                                            <h2 class="mb-3">TOGETHER, WE CAN DELIVER THE BEST SOLUTION</h2>
                                            <p class="lead fz20 text-secondary mb-3">Explore the future of energy storage with OneTron. Contact us today to discuss your project requirements or schedule a consultation with our team of experts. Together, let's create a customized energy storage solution that meets your specific needs and drives your success.</p>

                                            <div class="contact-info d-flex mb-3">
                                                <div class="icon-container fs-4">
                                                    <i class="bi bi-geo-alt-fill"></i>
                                                </div>
                                                <div>
                                                    <span>Address</span>
                                                    <address>Chennai, India</address>
                                                </div>
                                            </div>

                                            <div class="contact-info d-flex mb-3">
                                                <div class="icon-container">
                                                    <i class="bi bi-telephone-fill"></i>
                                                </div>
                                                <div>
                                                    <span>Phone</span>
                                                    <p>
                                                        <a class="link-secondary text-decoration-none" href="tel:+15057922430">1234567890</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="contact-info d-flex mb-3">
                                                <div class="icon-container">
                                                    <i class="bi bi-envelope-at-fill"></i>
                                                </div>
                                                <div>
                                                    <span>Email</span>
                                                    <p>
                                                        <a class="link-secondary text-decoration-none" href="mailto:example@example.com">example@example.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-lg-6">
                                            <div class="contact-form">
                                                <h3 class="h4 mb-4">Send us a message</h3>
                                                <form>
                                                    <div class="form-group mb-4">
                                                        <label for="name">Name</label>
                                                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                                    </div>
                                                    <div class="form-group mb-4">
                                                        <label for="email">Email</label>
                                                        <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                                    </div>
                                                    <div class="form-group mb-4">
                                                        <label for="message">Message</label>
                                                        <textarea class="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GetInTouch;