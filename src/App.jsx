import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
						Onetron
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Industries we serve</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Team
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Executive Team</a></li>
									<li><a class="dropdown-item" href="#">Advisory Team</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Industries2</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="#">Why Choose Us?</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

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