import React from "react";

import "../../assets/css/styles.css";

export function AboutPage() {
	return (
		<div className="aboutpage">
			<h1>
				À propos <br className="mobile-br" />
				de moi
			</h1>
			<h2>
				<div className="swiper">
					<ul className="swipe-words">
						<li>
							{"< "}positive{" />"}
						</li>
						<li>
							{"< "}dynamique{" />"}
						</li>
						<li>
							{"< "}fiable{" />"}
						</li>
					</ul>
				</div>
			</h2>
			<div className="about-content">
				<div className="about-pro">
					<p>
						Vous pourrez compter sur moi pour&nbsp;:
						<ul>
							<li>m'intégrer rapidement dans votre équipe,</li>
							<li>intégrer vos outils tout en respectant vos process,</li>
							<li>être force de proposition.</li>
						</ul>
					</p>

					<p>
						Je souhaite travailler dans une équipe où&nbsp;:
						<ul>
							<li>les objectifs sont ambitieux,</li>
							<li>je pourrai monter en compétences,</li>
							<li>le management est transparent.</li>
						</ul>
					</p>
					<p className="linkedin">
						Pour prendre contact, <br className="mobile-br" />
						rdv sur{" "}
						<a className="p-link" href="https://bit.ly/3glmsjR" target="blank">
							LinkedIn
						</a>
					</p>
				</div>
				<div className="about-perso">
					<div className="about-perso-box">
						<svg viewBox="0 0 512 512" className="about-svg">
							<g>
								<path
									className="about-icon"
									d="M443.521,426.421l-.223.119a45.676,45.676,0,0,1-33.486,3.923c.927-.441,1.849-.9,2.76-1.387l.229-.123a8,8,0,1,0-7.573-14.094l-.223.12a45.7,45.7,0,0,1-35.026,3.5l-62.837-18.972,2.312-7.659a8,8,0,0,0-1.486-7.4L292.6,365.8l28.68-73.945a44.237,44.237,0,0,0-6.191-42.794L291.218,218.14l12.281-6.585,40.356,22.674,9.348,25.586a20.08,20.08,0,0,0,18.806,13.136c.977,0,32.476-4.657,32.476-4.657l5.395,3.031,12.288,11.607a8,8,0,0,0,9.273,1.234l19.942-10.692a8,8,0,0,0,3.27-10.831L443.96,242.7a8,8,0,0,0-4.737-3.878l-7.659-2.312h0a8,8,0,0,0-3.331-9.041l-46.512-29.912-3.183-10.484,1.007.3a8,8,0,0,0,7.4-1.486L405.9,170.265l11.218,3.386a8,8,0,0,0,9.971-5.345L440,125.526a35.313,35.313,0,0,0-23.6-44.013l-16.631-5.021a35.313,35.313,0,0,0-44.013,23.6l-10.6,35.12-22.975-6.937a8.02,8.02,0,0,0-2.35-.342l-.007-.04a83.947,83.947,0,0,0-37.371,4.9l-32.527-19.707,2.544-3.362a8,8,0,0,0-12.759-9.655l-3.542,4.682-11.231-6.805a8,8,0,0,0-8.291,13.684l9.816,5.947-2.018,2.666A8,8,0,1,0,237.2,129.9l3.016-3.985,25.429,15.407a83.977,83.977,0,0,0-18.211,16.195l-2.39,2.848-58.209-32.7,2.432-3.443a8,8,0,1,0-13.069-9.231l-3.386,4.8-11.449-6.432a8,8,0,1,0-7.837,13.949l10.006,5.621-1.93,2.731a8,8,0,1,0,13.07,9.231l2.883-4.083,57.023,32.039-.138.165-10.082,8.313a42.085,42.085,0,0,0-15.231,30.379l-.078,1.621a41.807,41.807,0,0,0,14.134,33.493l25.869,22.868-34.172,75.821c-.013.029-7.3,23.951-7.3,23.951l-61.268-18.5a8,8,0,0,0-4.625,15.317l261.954,79.091a61.629,61.629,0,0,0,47.224-4.716l.229-.123a8,8,0,1,0-7.573-14.094Zm-151.7-31.541-45.952-13.874,4.625-15.318,28.316,8.55L292.9,391.319Zm-11.409-189.1-18.79-17.747,25.339,14.236Zm48.415-.284,1.491,2.781-8.966-5.038Zm43.752,51.416a4.014,4.014,0,0,1-4.352-2.583l-2.9-7.946,16.214,9.183Zm58.842-3.726,5.346,9.97-7.809,4.188-5.218-4.928,3.2-10.585ZM414.5,237.663l-4.623,15.309-53.577-30.1-19.67-36.685-6.686-38.854,21.8,6.583,15.517,51.105a8,8,0,0,0,3.327,4.4ZM375.681,127.714l-1.936,2.05-11.264,3.42,2.616-8.665Zm4.39,43.109-7.119-2.149-5.231-17.229,7.111-3.812,6.912,12.89a8,8,0,0,0,4.738,3.878l1.008.3Zm34.012-14.8-19.8-5.979-6.4-11.94,4.929-5.218,25.9,7.82Zm-43.006-51.306a19.31,19.31,0,0,1,24.071-12.907l16.63,5.02A19.313,19.313,0,0,1,424.686,120.9l-1.354,4.487L369.722,109.2ZM259.694,167.8a67.982,67.982,0,0,1,53.363-24.273l7.361,42.775a8,8,0,0,0-5.2.816L303.679,193.3l-44.437-24.966Zm-34.66,46.284.078-1.62a26.054,26.054,0,0,1,9.429-18.806l5.2-4.289,33.423,31.57,29.255,37.9a28.15,28.15,0,0,1,3.94,27.233l-27.695,71.4-22.5-6.792,28.405-63.482a8,8,0,0,0-2-9.262l-48.785-43.126A25.876,25.876,0,0,1,225.034,214.082Zm36.571,66.685,5.961,5.27-26.841,59.988-7.51-2.267Zm-38.708,93.3,4.626-15.318,7.658,2.313-4.625,15.318Z"
								/>
								<path
									className="about-icon"
									d="M125.891,280.466l-67.2-24a8,8,0,0,0-5.382,15.068l67.2,24a8,8,0,0,0,5.382-15.068Z"
								/>
								<path
									className="about-icon"
									d="M154.69,290.752a8,8,0,0,0-5.38,15.068l16,5.714a8,8,0,1,0,5.38-15.068Z"
								/>
								<path
									className="about-icon"
									d="M53.309,151.534l32,11.429A8,8,0,0,0,90.691,147.9l-32-11.429a8,8,0,0,0-5.382,15.068Z"
								/>
								<path
									className="about-icon"
									d="M109.309,171.534l56,20a8,8,0,0,0,5.382-15.068l-56-20a8,8,0,0,0-5.382,15.068Z"
								/>
								<path
									className="about-icon"
									d="M130.69,222.18l-16-5.714a8,8,0,0,0-5.38,15.068l16,5.714a8,8,0,1,0,5.38-15.068Z"
								/>
								<path
									className="about-icon"
									d="M179.2,256a8,8,0,0,0,2.691-15.536l-27.2-9.714a8,8,0,0,0-5.38,15.068l27.2,9.714A7.972,7.972,0,0,0,179.2,256Z"
								/>
							</g>
						</svg>
						<p>J'aime pratiquer le ski alpin</p>
					</div>
					<div className="about-perso-box">
						<svg viewBox="0 0 512.002 512.002" className="about-svg">
							<g>
								<path
									className="about-icon"
									d="M512,32.551c0.092-8.628-3.339-17.061-9.414-23.136C496.514,3.344,488.421,0,479.796,0
			c-8.676,0-16.711,3.398-22.624,9.568l-22.199,23.171l-9.136,9.674l-95.782-29.179c-3.535-1.077-7.373-0.118-9.985,2.495
			l-20.327,20.326c-2.174,2.174-3.228,5.228-2.855,8.28c0.372,3.053,2.127,5.764,4.76,7.353l73.01,44.062l-14.38,15.101
			c-38.98-30.013-87.078-46.445-136.48-46.445c-59.778,0-115.979,23.279-158.249,65.549C23.279,172.225,0,228.425,0,288.203
			c0,59.779,23.279,115.98,65.549,158.25c42.27,42.27,98.471,65.549,158.249,65.549c59.778,0,115.978-23.279,158.248-65.549
			s65.549-98.471,65.549-158.25c0-13.089-1.155-26.086-3.409-38.848c-0.058-0.685-0.182-1.357-0.375-2.007
			c-6.448-34.66-21.018-67.513-42.659-95.623l15.101-14.381l44.06,73.01c1.589,2.633,4.3,4.388,7.353,4.76
			c3.044,0.365,6.105-0.681,8.279-2.855l20.328-20.326c2.608-2.607,3.569-6.438,2.501-9.968l-29.007-95.839l32.666-31.296
			C508.511,49.007,511.908,41.095,512,32.551z M163.433,482.875C80.438,457.086,20,379.57,20,288.203
			c0-27.59,5.522-53.91,15.501-77.932c12.626,9.002,31.606,10.486,48.951,11.834c30.756,2.39,40.938,5.262,40.629,17.552
			c-0.28,11.143-12.283,20.461-24.992,30.326c-17.757,13.783-39.856,30.937-33.229,59.978c6.781,29.724,30.492,31.073,49.545,32.157
			c11.7,0.665,23.799,1.354,34.816,6.918c11.926,6.022,20.948,17.195,25.406,31.461
			C181.613,416.455,183.089,443.425,163.433,482.875z M427.594,288.202c0.001,70.363-35.844,132.508-90.229,169.144
			c-14.09-18.331-12.719-27.401-11.144-37.728c1.205-7.9,2.571-16.855-1.635-28.578c-4.319-12.034-13.88-24.936-30.078-40.585
			l-2.188-2.343c-10.416-11.139-18.644-19.937-20.241-28.686c-1.04-5.698-0.322-15.549,17.848-35.233
			c4.73-5.123,9.112-7.676,13.399-7.805c8.998-0.246,19.712,9.995,29.136,19.053c12.539,12.051,26.751,25.708,42.203,16.578
			c10.463-6.183,15.845-17.736,21.049-28.91c8.462-18.166,13.727-27.636,29.657-24.813
			C426.837,268.153,427.594,278.148,427.594,288.202z M421.245,237.832c-26.179-0.682-36.477,21.408-43.661,36.833
			c-4.098,8.798-7.968,17.107-13.093,20.136c-0.121,0.071-0.177,0.087-0.177,0.087c-0.018-0.006-1.454,0.103-5.232-2.567
			c-3.811-2.695-8.159-6.874-12.763-11.299c-12.264-11.785-26.124-25.146-43.593-24.624c-9.8,0.293-19.052,5.081-27.496,14.23
			c-18.704,20.263-25.744,36.421-22.827,52.393c2.653,14.527,13.151,25.754,25.308,38.754l2.349,2.515
			c0.122,0.13,0.247,0.257,0.375,0.381c29.584,28.529,27.93,39.375,26.014,51.934c-1.85,12.128-4.085,26.905,13.736,51.122
			c-28.716,15.48-61.543,24.277-96.389,24.277c-13.896-0.002-27.47-1.405-40.593-4.068c20.601-43.386,18.432-74.469,12.514-93.404
			c-6.085-19.472-18.686-34.867-35.48-43.349c-14.737-7.441-29.591-8.287-42.696-9.032c-20.616-1.174-27.913-2.309-31.182-16.639
			c-3.535-15.492,7.462-25.345,25.994-39.73c15.095-11.717,32.204-24.997,32.723-45.623c0.263-10.441-3.241-24.404-21.425-31.631
			c-10.752-4.272-24.426-5.335-37.648-6.362c-17.168-1.334-34.845-2.715-41.511-10.756C79,127.741,146.433,84.406,223.798,84.406
			c43.363,0,85.623,13.898,120.402,39.376l-22.199-1.597c-2.877-0.198-5.735,0.851-7.788,2.903l-17.109,17.109
			c-2.285,2.286-3.325,5.535-2.791,8.723c0.533,3.188,2.575,5.921,5.48,7.337l36.269,17.683l17.684,36.268
			c1.416,2.905,4.149,4.946,7.337,5.48c0.551,0.093,1.102,0.138,1.651,0.138c2.63,0,5.181-1.038,7.071-2.929l17.108-17.107
			c2.052-2.052,3.111-4.894,2.903-7.788l-1.597-22.201C403.653,188.872,414.825,212.691,421.245,237.832z M488.597,40.389
			L451.5,75.93c-2.719,2.604-3.744,6.515-2.653,10.117l29.049,95.979l-7.06,7.059l-43.897-72.739
			c-1.566-2.596-4.227-4.341-7.231-4.744c-3.014-0.405-6.032,0.579-8.227,2.67l-40.723,38.781c-2.163,2.06-3.292,4.979-3.078,7.958
			l1.86,25.868l-3.963,3.963l-13.049-26.763c-0.979-2.006-2.6-3.628-4.607-4.605l-26.761-13.047l3.963-3.964l25.868,1.86
			c2.968,0.204,5.898-0.915,7.959-3.078l38.779-40.723c2.092-2.196,3.073-5.222,2.67-8.227c-0.403-3.005-2.148-5.665-4.744-7.231
			l-72.739-43.897l7.051-7.05l95.97,29.235c3.632,1.107,7.577,0.061,10.185-2.7l13.342-14.128l22.148-23.118
			c2.104-2.196,5.011-3.405,8.184-3.405c3.235,0,6.387,1.297,8.648,3.558c2.296,2.296,3.593,5.496,3.558,8.779
			C491.968,35.458,490.759,38.317,488.597,40.389z"
								/>
								<path
									className="about-icon"
									d="M157.226,121.961c-2.336-5.003-8.286-7.167-13.291-4.831c-19.993,9.335-38.04,21.977-53.637,37.574
			c-3.905,3.906-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929c2.559,0,5.119-0.977,7.071-2.929
			c13.944-13.946,30.079-25.248,47.955-33.594C157.399,132.916,159.562,126.966,157.226,121.961z"
								/>
							</g>
						</svg>
						<p>
							J'aime voyager pour découvrir des cultures étrangères, notamment
							latinoaméricaines
						</p>
					</div>
					<div className="about-perso-box">
						<svg viewBox="-31 0 512 512" className="about-svg">
							<g>
								<path
									className="about-icon"
									d="m440.589844 206.675781h-341.171875l327.699219-94.929687c2.546874-.738282 4.695312-2.460938 5.976562-4.78125 1.28125-2.324219 1.585938-5.058594.847656-7.605469l-17.148437-59.199219c-6.851563-23.644531-28.867188-40.160156-53.539063-40.160156-5.199218 0-10.378906.738281-15.402344 2.191406l-307.675781 89.128906c-14.230469 4.121094-26.023437 13.582032-33.214843 26.632813-7.1875 13.050781-8.875 28.078125-4.753907 42.304687l16.753907 57.835938v238.253906c0 30.6875 24.964843 55.652344 55.648437 55.652344h120.164063c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-120.160157c-19.660156 0-35.652343-15.992188-35.652343-35.652344v-136.085937h51.230468.023438.019531 78.3125.023437.023438 78.3125.023438.023437 78.3125.023437.019532 105.28125v136.085937c0 19.660156-15.992188 35.652344-35.652344 35.652344h-120.164062c-5.519532 0-10 4.476562-10 10s4.480468 10 10 10h120.164062c30.6875 0 55.652344-24.964844 55.652344-55.652344v-239.671875c0-5.523437-4.476563-10-10-10zm-176.332032 93.585938 42.488282-73.585938h55.261718l-42.484374 73.585938zm-78.359374 0 42.488281-73.585938h55.261719l-42.484376 73.585938zm-78.355469 0 42.484375-73.585938h55.265625l-42.488281 73.585938zm37.179687-129.457031-71.148437-68.335938 53.308593-15.441406c.375.546875.8125 1.0625 1.3125 1.542968l71.148438 68.335938-53.308594 15.441406c-.375-.546875-.816406-1.066406-1.3125-1.542968zm134-125.839844 71.148438 68.335937-53.308594 15.441407c-.375-.546876-.8125-1.066407-1.3125-1.542969l-71.148438-68.335938 53.308594-15.441406c.375.546875.8125 1.0625 1.3125 1.542969zm-75.265625 21.804687 71.148438 68.332031-53.308594 15.445313c-.375-.546875-.8125-1.066406-1.3125-1.542969l-71.148437-68.335937 53.308593-15.441407c.378907.542969.816407 1.0625 1.3125 1.542969zm149.960938-45.367187c3.210937-.929688 6.519531-1.402344 9.835937-1.402344 15.824219 0 29.9375 10.578125 34.328125 25.726562l14.367188 49.589844-40.121094 11.621094c-.378906-.546875-.816406-1.0625-1.316406-1.542969l-71.144531-68.332031zm-328.9375 106.199218c4.609375-8.371093 12.160156-14.433593 21.261719-17.070312l5.875-1.703125c.378906.546875.816406 1.066406 1.3125 1.542969l71.148437 68.335937-88.292969 25.578125-14.367187-49.589844c-2.636719-9.097656-1.546875-18.71875 3.0625-27.09375zm14.480469 99.074219h87.972656l-42.484375 73.585938h-45.488281zm303.65625 73.585938 42.484374-73.585938h45.488282v73.585938zm0 0"
								/>
								<path
									className="about-icon"
									d="m303.921875 405.113281c0-3.574219-1.90625-6.875-5-8.660156l-87.855469-50.722656c-3.09375-1.785157-6.90625-1.785157-10 0-3.09375 1.785156-5 5.085937-5 8.660156v101.445313c0 3.570312 1.90625 6.871093 5 8.65625 1.546875.894531 3.273438 1.34375 5 1.34375 1.726563 0 3.453125-.449219 5-1.34375l87.855469-50.71875c3.09375-1.785157 5-5.085938 5-8.660157zm-87.855469 33.402344v-66.804687l57.855469 33.402343zm0 0"
								/>
								<path
									className="about-icon"
									d="m234.773438 492c-5.507813 0-10 4.492188-10 10s4.492187 10 10 10c5.511718 0 10-4.492188 10-10s-4.488282-10-10-10zm0 0"
								/>
							</g>
						</svg>
						<p>
							J'aime m'immerger dans les oeuvres surréalistes et surprenantes de{" "}
							<a
								className="p-link"
								href="https://www.allocine.fr/personne/fichepersonne_gen_cpersonne=5289.html"
								target="blank"
							>
								Pedro Almodóvar
							</a>
							,{" "}
							<a
								className="p-link"
								href="https://www.allocine.fr/personne/fichepersonne_gen_cpersonne=81272.html"
								target="blank"
							>
								Park Chan-wook
							</a>
							,{" "}
							<a
								className="p-link"
								href="https://www.allocine.fr/personne/fichepersonne_gen_cpersonne=27087.html"
								target="blank"
							>
								Denis Villeneuve
							</a>
							...
						</p>
					</div>
					<div className="about-perso-box">
						<svg viewBox="-115 1 511 511.999" className="about-svg">
							<g>
								<path
									className="about-icon"
									d="m141.492188 338.417969c-66.921876 0-108.882813-74.40625-110.640626-77.574219-1.667968-3.015625-1.667968-6.671875 0-9.6875 1.757813-3.167969 43.71875-77.574219 110.640626-77.574219 66.925781 0 108.886718 74.40625 110.640624 77.574219 1.667969 3.015625 1.667969 6.671875 0 9.6875-1.753906 3.167969-43.714843 77.574219-110.640624 77.574219zm-90.183594-82.429688c9.910156 15.425781 43.917968 62.429688 90.183594 62.429688 46.414062 0 80.296874-46.960938 90.183593-62.40625-9.914062-15.4375-43.917969-62.429688-90.183593-62.429688-46.410157 0-80.292969 46.960938-90.183594 62.40625zm0 0"
								/>
								<path
									className="about-icon"
									d="m141.492188 298.523438c-23.445313 0-42.523438-19.074219-42.523438-42.523438s19.078125-42.523438 42.523438-42.523438c23.449218 0 42.523437 19.074219 42.523437 42.523438s-19.074219 42.523438-42.523437 42.523438zm0-65.046876c-12.417969 0-22.523438 10.101563-22.523438 22.523438s10.105469 22.523438 22.523438 22.523438c12.421874 0 22.523437-10.105469 22.523437-22.523438 0-12.421875-10.101563-22.523438-22.523437-22.523438zm0 0"
								/>
								<path
									className="about-icon"
									d="m272.484375 321.761719c-4.242187 0-8.097656-2.785157-9.460937-6.789063-1.367188-4.015625.023437-8.558594 3.375-11.148437 3.214843-2.484375 7.742187-2.710938 11.222656-.636719 3.582031 2.132812 5.492187 6.433594 4.671875 10.523438-.925781 4.613281-5.09375 8.050781-9.808594 8.050781zm0 0"
								/>
								<path
									className="about-icon"
									d="m218.507812 0h-154.027343c-35.277344 0-63.980469 28.703125-63.980469 63.980469v384.039062c0 35.277344 28.703125 63.980469 63.980469 63.980469h154.023437c35.28125 0 63.984375-28.703125 63.984375-63.980469v-91.222656c0-5.519531-4.480469-10-10-10-5.523437 0-10 4.480469-10 10v71.214844h-241.988281v-354.03125h241.988281v192.777343c0 5.519532 4.476563 10 10 10 5.519531 0 10-4.480468 10-10v-202.777343c0-35.277344-28.703125-63.980469-63.980469-63.980469zm43.980469 448.011719v.007812c0 24.25-19.730469 43.980469-43.980469 43.980469h-154.027343c-24.25 0-43.980469-19.730469-43.980469-43.980469v-.007812zm-240.84375-394.03125c4.539063-19.449219 22.023438-33.980469 42.835938-33.980469h154.023437c20.816406 0 38.296875 14.53125 42.835938 33.980469zm0 0"
								/>
								<path
									className="about-icon"
									d="m155.738281 480.007812h-28.488281c-5.523438 0-10-4.480468-10-10 0-5.523437 4.476562-10 10-10h28.488281c5.523438 0 10 4.476563 10 10 0 5.519532-4.476562 10-10 10zm0 0"
								/>
							</g>
						</svg>
						<p>
							Je suis sensible à la déficience visuelle et prête mes yeux à
							distance avec{" "}
							<a
								className="p-link"
								href="https://www.bemyeyes.com/"
								target="blank"
							>
								Be My Eyes
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
