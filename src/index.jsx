/* @refresh reload */
import { render, Show } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import './index.css';
import Home from './Home';
import OurServices from './OurServices';
import IndustriesWeServe from './IndustriesWeServe';
import Team from './Team';
import WhyChooseUs from './WhyChooseUs';
import GetInTouch from './GetInTouch';
import { useLocation } from "@solidjs/router";
import { createSignal, onCleanup, onMount  } from 'solid-js';

// refer
// https://www.jpmorgan.com/industries-we-serve
// https://michaelskenny.com/industries-we-serve/

window.addEventListener('load', function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);
});

const Layout = (props) => {
    const location = useLocation();

	const [isBottom, setIsBottom] = createSignal(false);

	const checkIfBottom = () => {
		const scrollTop = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		setIsBottom(scrollTop + windowHeight >= documentHeight - 1);
	};


	const handleNavLinkClick = () => {
		setTimeout(() => {
		  window.scrollTo(0, 0);
		  checkIfBottom();
		}, 0);
	  };
	onMount(() => {
	  window.addEventListener('scroll', checkIfBottom);
	  checkIfBottom(); // Initial check in case the page is already at the bottom
	  onCleanup(() => {
		window.removeEventListener('scroll', checkIfBottom);
	  });
	});
    return (
        <>
			<nav class="navbar fixed-top bg-body-tertiary navbar-expand-lg pL50 pR50">
				<div class="container-fluid">
					<a class="navbar-brand" href="/">
						<img src="/logo.png" alt="" width="125" height="24" class="d-inline-block align-text-top" />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/" onClick={checkIfBottom}>Home</a>
							</li>
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/ourservices' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/ourservices">Our Services</a>
							</li>
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/industriesweserve' ? 'nav-link active' : 'nav-link'} href="/industriesweserve">Industries we serve</a>
							</li>
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/teams' ? 'nav-link active' : 'nav-link'} href="/teams">Team</a>
							</li>
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/whychooseus' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/whychooseus">Why Choose Us?</a>
							</li>
							<li class="nav-item fz20">
								<a onclick={handleNavLinkClick} class={location.pathname === '/getintouch' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/getintouch">Get in touch</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
            <div style={{ height: "50px" }}></div>
            {props.children}
			<div style={{ height: "120px" }}></div>
			{isBottom() && 
				<footer class="footer">
					<span class="connectwithus fw800">Connect With Us</span>
					<div class=" fs-2">
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
			}
        </>
    );
};

render(
  () => (<>
    <Router root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/ourservices" component={OurServices} />
        <Route path="/industriesweserve" component={IndustriesWeServe} />
        <Route path="/teams" component={Team} />
		<Route path="/whychooseus" component={WhyChooseUs} />
		<Route path="/getintouch" component={GetInTouch} />
    </Router>
    </>),
  document.getElementById('root')
);

