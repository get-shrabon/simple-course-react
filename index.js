document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll("#tabs li");
	const contentArea = document.getElementById("content-area");

	const content = {
		intro: {
			title: "Introduction to React",
			description:
				"React is a JavaScript library used for building user interfaces, particularly single-page applications where components are reused to display dynamic content.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nhSZ4LhIii8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
		},
		jsx: {
			title: "JSX in React",
			description:
				"JSX (JavaScript XML) is a syntax extension for JavaScript. It allows you to write HTML-like syntax directly in JavaScript, which React converts to JavaScript objects under the hood.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/S4VH8hddg8c?si=t7JfIBzwDllidHgp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		components: {
			title: "React Components",
			description:
				"Components are the building blocks of any React app. They can be class-based or function-based, allowing you to divide the UI into independent, reusable pieces.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/S4VH8hddg8c?si=t7JfIBzwDllidHgp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		props: {
			title: "Props in React",
			description:
				"Props (short for 'properties') are used to pass data from one component to another. They are read-only and help make components dynamic.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/S4VH8hddg8c?si=t7JfIBzwDllidHgp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		state: {
			title: "State Management",
			description:
				"State is a JavaScript object that holds data that can change over time in a component. It is used to manage changes in UI as a response to user interaction or other events.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zHoWgJD0jw4?si=BVxTOI7gKto1S_RX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		hooks: {
			title: "React Hooks",
			description:
				"Hooks let you use state and lifecycle methods in functional components. Common hooks include useState (for managing state) and useEffect (for handling side effects like fetching data).",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zHoWgJD0jw4?si=BVxTOI7gKto1S_RX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		effect: {
			title: "useEffect Hook",
			description:
				"The useEffect hook is used to run side effects in function components. It replaces lifecycle methods like componentDidMount and componentDidUpdate.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/bio2eP5YXyw?si=8UkfFLdS96Q6mFt2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		context: {
			title: "Context API",
			description:
				"Context API is a way to pass data through the component tree without having to pass props manually at every level. It's used to share data that can be considered global across the app, like user authentication.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jIbXtgL0qrg?si=daKv6SFPI0OPaGPS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		routing: {
			title: "React Router",
			description:
				"React Router is a standard library for routing in React. It allows you to create navigation between different components and pages, making the app feel like a multi-page website.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZP8QyCIUeIA?si=TvCnQJQQTl3JXEuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		forms: {
			title: "Forms in React",
			description:
				"Handling forms in React requires managing state to capture user input. Controlled components (using state) ensure that form data is handled correctly in React.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SdzMBWT2CDQ?si=R24TK8KCI0CnOvK-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		api: {
			title: "API Integration in React",
			description:
				"React allows you to integrate with APIs by using JavaScript's fetch or axios to make HTTP requests. You can fetch data and display it dynamically in components.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cIqgQn-XBIQ?si=Ra4wbiIy8H1_DfzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
		optimization: {
			title: "Performance Optimization in React",
			description:
				"Performance optimization in React involves techniques like memoization (React.memo), lazy loading, and the use of React's built-in hooks to avoid unnecessary renders and improve app speed.",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/uE925hp9KDk?si=YemDmea9EOthREYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
		},
	};

	tabs.forEach((tab) => {
		tab.addEventListener("click", function () {
			tabs.forEach((tab) => tab.classList.remove("active"));
			this.classList.add("active");

			const selectedTab = this.getAttribute("data-tab");
			contentArea.innerHTML = `
            <h2>${content[selectedTab].title}</h2>
            <p>${content[selectedTab].description}</p>
            <div> ${content[selectedTab].video} </div>
        `;
		});
	});
});
