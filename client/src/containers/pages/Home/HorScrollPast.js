import React from "react";
import { Button } from "semantic-ui-react";
import "./scroll-styles.css";
class HorScrollPast extends React.Component {
	items = Array.from({ length: 15 }, (_, i) => (
    <div className="pn-ProductNav_Link" key={i}>
      <div className="row" class="cardTile">
        <div className="col-3 leftcontent">
          <div className="profileimg">
          </div>
        </div>
       <div className="col-9 rightcontent">
          <p class="eventText"><span class="blue"><strong>Name Test</strong></span><br />
          123 Somewhere<br />
          12pm<br />
          <span class="blue">02/02/2021</span></p>
          </div>
        </div>
    </div>


	));
	componentDidMount() {
		console.log(this.el);
		//setTimeout(()=>{
		console.log(this.el.querySelectorAll(".pn-ProductNav_Link").length);
		//},100)

		//window.dragscroll.reset();
		var SETTINGS2 = {
			navBarTravelling2: false,
			navBarTravelDirection2: "",
			navBarTravelDistance: 400
		};



		document.documentElement.classList.remove("no-js");
		document.documentElement.classList.add("js");

		// Out advancer buttons
		var pnAdvancerLeft2 = document.getElementById("pnAdvancerLeft2");
		var pnAdvancerRight2 = document.getElementById("pnAdvancerRight2");
		// the indicator
		var pnIndicator2 = document.getElementById("pnIndicator2");

		var pnProductNav2 = document.getElementById("pnProductNav2");
		var pnProductNav2Contents2 = document.getElementById("pnProductNav2Contents2");

		pnProductNav2.setAttribute(
			"data-overflowing2",
			determineOverflow(pnProductNav2Contents2, pnProductNav2)
		);

		// Set the indicator
		//moveIndicator(pnProductNav2.querySelector("[aria-selected=\"true\"]"), colours[0]);

		// Handle the scroll of the horizontal container
		var last_known_scroll_position2 = 0;
		var ticking = false;

		function doSomething(scroll_pos) {
			pnProductNav2.setAttribute(
				"data-overflowing2",
				determineOverflow(pnProductNav2Contents2, pnProductNav2)
			);
		}

		pnProductNav2.addEventListener("scroll", function() {
			last_known_scroll_position2 = window.scrollY;
			if (!ticking) {
				window.requestAnimationFrame(function() {
					doSomething(last_known_scroll_position2);
					ticking = false;
				});
			}
			ticking = true;
		});

		pnAdvancerLeft2.addEventListener("click", function() {
			// If in the middle of a move return
			if (SETTINGS2.navBarTravelling2 === true) {
				return;
			}
			// If we have content overflowing both sides or on the left
			if (
				determineOverflow(pnProductNav2Contents2, pnProductNav2) === "left" ||
				determineOverflow(pnProductNav2Contents2, pnProductNav2) === "both"
			) {
				// Find how far this panel has been scrolled
				var availableScrollLeft = pnProductNav2.scrollLeft;
				// If the space available is less than two lots of our desired distance, just move the whole amount2
				// otherwise, move by the amount2 in the SETTINGS2
				if (availableScrollLeft < SETTINGS2.navBarTravelDistance * 2) {
					pnProductNav2Contents2.style.transform =
						"translateX(" + availableScrollLeft + "px)";
				} else {
					pnProductNav2Contents2.style.transform =
						"translateX(" + SETTINGS2.navBarTravelDistance + "px)";
				}
				// We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
				pnProductNav2Contents2.classList.remove(
					"pn-ProductNav_Contents-no-transition"
				);
				// Update our SETTINGS2
				SETTINGS2.navBarTravelDirection2 = "left";
				SETTINGS2.navBarTravelling2 = true;
			}
			// Now update the attribute in the DOM
			pnProductNav2.setAttribute(
				"data-overflowing2",
				determineOverflow(pnProductNav2Contents2, pnProductNav2)
			);
		});

		pnAdvancerRight2.addEventListener("click", function() {
			// If in the middle of a move return
			if (SETTINGS2.navBarTravelling2 === true) {
				return;
			}
			// If we have content overflowing both sides or on the right
			if (
				determineOverflow(pnProductNav2Contents2, pnProductNav2) === "right" ||
				determineOverflow(pnProductNav2Contents2, pnProductNav2) === "both"
			) {
				// Get the right edge of the container and content
				var navBarRightEdge2 = pnProductNav2Contents2.getBoundingClientRect()
					.right;
				var navBarScrollerRightEdge2 = pnProductNav2.getBoundingClientRect()
					.right;
				// Now we know how much space we have available to scroll
				var availableScrollRight = Math.floor(
					navBarRightEdge2 - navBarScrollerRightEdge2
				);
				// If the space available is less than two lots of our desired distance, just move the whole amount2
				// otherwise, move by the amount2 in the SETTINGS2
				if (availableScrollRight < SETTINGS2.navBarTravelDistance * 2) {
					pnProductNav2Contents2.style.transform =
						"translateX(-" + availableScrollRight + "px)";
				} else {
					pnProductNav2Contents2.style.transform =
						"translateX(-" + SETTINGS2.navBarTravelDistance + "px)";
				}
				// We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
				pnProductNav2Contents2.classList.remove(
					"pn-ProductNav_Contents-no-transition"
				);
				// Update our SETTINGS2
				SETTINGS2.navBarTravelDirection2 = "right";
				SETTINGS2.navBarTravelling2 = true;
			}
			// Now update the attribute in the DOM
			pnProductNav2.setAttribute(
				"data-overflowing2",
				determineOverflow(pnProductNav2Contents2, pnProductNav2)
			);
		});

		pnProductNav2Contents2.addEventListener(
			"transitionend",
			function() {
				// get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
				var styleOfTransform2 = window.getComputedStyle(
					pnProductNav2Contents2,
					null
				);
				var tr =
					styleOfTransform2.getPropertyValue("-webkit-transform") ||
					styleOfTransform2.getPropertyValue("transform");
				// If there is no transition we want to default to 0 and not null
				var amount2 = Math.abs(parseInt(tr.split(",")[4]) || 0);
				pnProductNav2Contents2.style.transform = "none";
				pnProductNav2Contents2.classList.add(
					"pn-ProductNav_Contents-no-transition"
				);
				// Now lets set the scroll position
				if (SETTINGS2.navBarTravelDirection2 === "left") {
					pnProductNav2.scrollLeft = pnProductNav2.scrollLeft - amount2;
				} else {
					pnProductNav2.scrollLeft = pnProductNav2.scrollLeft + amount2;
				}
				SETTINGS2.navBarTravelling2 = false;
			},
			false
		);

		// Handle setting the currently active link
		pnProductNav2Contents2.addEventListener("click", function(e) {
			var links2 = [].slice.call(
				document.querySelectorAll(".pn-ProductNav_Link")
			);
			links2.forEach(function(item) {
				item.setAttribute("aria-selected", "false");
			});
			e.target.setAttribute("aria-selected", "true");
			// Pass the clicked item and it's colour to the move indicator function
			//	moveIndicator(e.target, colours[links2.indexOf(e.target)]);
		});

		function determineOverflow(content, container) {
			var containerMetrics2 = container.getBoundingClientRect();
			var containerMetrics2Right = Math.floor(containerMetrics2.right);
			var containerMetrics2Left = Math.floor(containerMetrics2.left);
			var contentMetrics2 = content.getBoundingClientRect();
			var contentMetrics2Right = Math.floor(contentMetrics2.right);
			var contentMetrics2Left = Math.floor(contentMetrics2.left);
			if (
				containerMetrics2Left > contentMetrics2Left &&
				containerMetrics2Right < contentMetrics2Right
			) {
				return "both";
			} else if (contentMetrics2Left < containerMetrics2Left) {
				return "left";
			} else if (contentMetrics2Right > containerMetrics2Right) {
				return "right";
			} else {
				return "none";
			}
		}
	}
	render() {
		return (
			<div
				className="pn-ProductNav_Wrapper horiz-scroll-wrapper "
				ref={el => (this.el = el)}
			>
				<nav
					id="pnProductNav2"
					className="pn-ProductNav horiz-scroll-outer dragscroll"
				>
					<div
						id="pnProductNav2Contents2"
						className="pn-ProductNav_Contents horiz-scroll-inner"
					>
						{this.items}

						<span id="pnIndicator2" className="pn-ProductNav_Indicator" />
					</div>
				</nav>
				<button
					id="pnAdvancerLeft2"
					className="pn-Advancer pn-Advancer_Left"
					type="button"
				>
					<svg
						className="pn-Advancer_Icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 551 1024"
					>
						<path d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z" />
					</svg>
				</button>
				<button
					id="pnAdvancerRight2"
					className="pn-Advancer pn-Advancer_Right"
					type="button"
				>
					<svg
						className="pn-Advancer_Icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 551 1024"
					>
						<path d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z" />
					</svg>
				</button>
			</div>
		);
	}
}

const Content = () => {
	const items = Array.from({ length: 75 }, (_, i) => (
		<span className="pn-ProductNav_Link">{`Item ${i + 1}`}</span>
	));
	return (
		<div className="pn-ProductNav_Wrapper " ref={el => (this.el = el)}>
			<nav id="pnProductNav2" className="pn-ProductNav dragscroll">
				<div id="pnProductNav2Contents2" className="pn-ProductNav_Contents">
					{items}

					<span id="pnIndicator2" className="pn-ProductNav_Indicator" />
				</div>
			</nav>
			<button
				id="pnAdvancerLeft2"
				className="pn-Advancer pn-Advancer_Left"
				type="button"
			>
				<svg
					className="pn-Advancer_Icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 551 1024"
				>
					<path d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z" />
				</svg>
			</button>
			<button
				id="pnAdvancerRight2"
				className="pn-Advancer pn-Advancer_Right"
				type="button"
			>
				<svg
					className="pn-Advancer_Icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 551 1024"
				>
					<path d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z" />
				</svg>
			</button>
		</div>
	);
};

export default HorScrollPast;
