import React from "react";
const Main = () => {
	return (
		<>
			<div className="container">
				<div className="main">
					<div className="main_heading">
						<h1>
							We're passionate about helping{" "}
							<span>businesses succeed</span> online
						</h1>
						<p>
							Lucky for you, <span>digital marketing</span> is our
							forte.
						</p>
					</div>
					<div>
						<img src="/main/image.svg" alt="image" />
					</div>
				</div>
			</div>
			<div className="main-image">
				<div className="container">
					<div className="main-image__item">
						<img
							src="/main/Google_certificate.svg"
							alt="Google_certificate"
						/>
					</div>

					<div className="main-image__item">
						<img
							src="/main/hubspot_certificate.svg"
							alt="hunspot_certificate"
						/>
					</div>

					<div className="main-image__item">
						<img
							src="/main/Yext_certificate.svg"
							alt="Yext_certificate"
						/>
					</div>

					<div className="main-image__text">
						<p>Yes, we're certified</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
