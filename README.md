<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# TEST-ASSIGNMENT

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/1Anka1/test-assignment?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/1Anka1/test-assignment?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/1Anka1/test-assignment?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Normalize.css-E3695F.svg?style=flat&logo=normalizedotcss&logoColor=white" alt="Normalize.css">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat&logo=styled-components&logoColor=white" alt="styledcomponents">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview

**Test Assignment** is a modern React development toolkit that provides a minimal yet powerful setup for building scalable web applications. Leveraging Vite for rapid builds and Hot Module Replacement (HMR), it ensures a smooth development experience. The project emphasizes code quality through ESLint enforcement and offers a modular architecture with reusable hooks, themes, and shared UI components.  

> ⚠️ Note: This project was created as a technical assignment for the Intern developer position.

---

## Project Structure

```sh
└── test-assignment/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.jsx
    │   ├── GlobalStyle.jsx
    │   ├── api
    │   ├── assets
    │   ├── components
    │   ├── data
    │   ├── helpers
    │   ├── hooks
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages
    │   └── theme
    └── vite.config.js
```

---

### Project Index

<details open>
	<summary><b><code>TEST-ASSIGNMENT/</code></b></summary>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/main.jsx'>main.jsx</a></b></td>
					<td style='padding: 8px;'>- Initialize the applications rendering process by setting up the root element with React, integrating routing, theming, and global styles<br>- It orchestrates the core structure that enables the app to display a styled, navigable interface, serving as the entry point that connects the user interface with underlying configurations and layout components within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/App.jsx'>App.jsx</a></b></td>
					<td style='padding: 8px;'>- Defines the primary routing structure for the application, orchestrating navigation between core pages such as the dashboard and account sections<br>- Integrates layout components to ensure consistent UI across routes and manages default redirection to the dashboard, facilitating seamless user experience within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/GlobalStyle.jsx'>GlobalStyle.jsx</a></b></td>
					<td style='padding: 8px;'>- Establishes a consistent global styling foundation across the application by defining base CSS rules<br>- It ensures uniform layout, typography, and element behavior, enhancing visual coherence and user experience<br>- Integrates seamlessly with the theme to maintain design consistency, serving as the foundational layer for styling in the overall project architecture.</td>
				</tr>
			</table>
			<!-- api Submodule -->
			<details>
				<summary><b>api</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.api</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/api/clients-api.js'>clients-api.js</a></b></td>
							<td style='padding: 8px;'>- Provides an API client for fetching user data from an external service, specifically retrieving a subset of users and augmenting each with a randomly assigned status<br>- Facilitates integration of user information into the broader application, supporting features that display or process client details while maintaining a clean separation of API interactions within the architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- hooks Submodule -->
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.hooks</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/hooks/UseDataAPI.js'>UseDataAPI.js</a></b></td>
							<td style='padding: 8px;'>- Provides a reusable React hook for fetching and managing asynchronous data from APIs<br>- It streamlines data retrieval, handles loading states, and simplifies integration within components, supporting the overall architecture by promoting consistent data handling and enhancing user experience through efficient state management.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- theme Submodule -->
			<details>
				<summary><b>theme</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.theme</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/theme/theme.js'>theme.js</a></b></td>
							<td style='padding: 8px;'>- Defines a comprehensive theme configuration for consistent styling across the application, including spacing, typography, colors, and animation timing<br>- Serves as the central design system reference, ensuring visual coherence and maintainability within the overall project architecture<br>- Facilitates uniform application of design tokens throughout the codebase, supporting scalable and cohesive UI development.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- helpers Submodule -->
			<details>
				<summary><b>helpers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.helpers</b></code>
					<!-- utils Submodule -->
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.helpers.utils</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/helpers/utils/navigations.jsx'>navigations.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines a centralized set of navigation icons and links for the applications user interface, facilitating consistent and intuitive access to core sections such as Dashboard, Account, Brokers, Submissions, Organization, and Goals & Rules<br>- Supports seamless UI rendering and enhances user experience by providing a clear visual guide across the app’s architecture.</td>
								</tr>
							</table>
							<!-- table Submodule -->
							<details>
								<summary><b>table</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.helpers.utils.table</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/helpers/utils/table/columns.js'>columns.js</a></b></td>
											<td style='padding: 8px;'>- Defines standardized column headers and data mappings for insurance-related tables, supporting consistent presentation and data management within the applications user interface<br>- Facilitates clear organization of work queue statuses and account details, enabling seamless integration and display across various components of the overall system architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/helpers/utils/table/columnRenderers.jsx'>columnRenderers.jsx</a></b></td>
											<td style='padding: 8px;'>- Defines custom rendering logic for table columns related to work and account data, enabling dynamic and visually consistent presentation of user, company, and financial information within the applications data tables<br>- Facilitates clear, contextual display of complex data structures, supporting an intuitive user interface and streamlined data interpretation across the platform.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- useContext Submodule -->
							<details>
								<summary><b>useContext</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.helpers.utils.useContext</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/helpers/utils/useContext/useDataContex.js'>useDataContex.js</a></b></td>
											<td style='padding: 8px;'>- Provides a centralized data management mechanism within the React application by defining a context for sharing data and loading state across components<br>- Facilitates seamless data access and state consistency, supporting the overall architectures goal of efficient, global state handling in the user interface<br>- This setup enhances component communication and promotes a clean, maintainable codebase.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<!-- WorkQueue Submodule -->
					<details>
						<summary><b>WorkQueue</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.WorkQueue</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/WorkQueue.styled.js'>WorkQueue.styled.js</a></b></td>
									<td style='padding: 8px;'>- Defines the layout structure for the Work Queue interface, organizing key components such as the task table, portfolio, and content areas into a responsive grid<br>- Facilitates a cohesive and adaptable user experience across various screen sizes, ensuring efficient presentation and interaction within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/WorkQueue.jsx'>WorkQueue.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the main interface for managing and visualizing work-related data within the application<br>- It orchestrates the display of a data table, portfolio overview, quick actions, and market intelligence, integrating various components to facilitate efficient task management and decision-making in the overall system architecture.</td>
								</tr>
							</table>
							<!-- MarketIntel Submodule -->
							<details>
								<summary><b>MarketIntel</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.WorkQueue.MarketIntel</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/MarketIntel/MarketIntel.styled.js'>MarketIntel.styled.js</a></b></td>
											<td style='padding: 8px;'>- Defines styled components for the MarketIntel section within the WorkQueue module, establishing consistent visual structure and layout<br>- Facilitates a cohesive and responsive user interface by managing spacing, alignment, and visual cues, thereby supporting clear presentation of market intelligence data in the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/MarketIntel/MarketIntel.jsx'>MarketIntel.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a market intelligence overview within the broader application, highlighting key industry trends such as cyber market rate increases, new marine capacity, and environmental regulatory changes in California<br>- Serves as a dedicated component for displaying concise, relevant market insights, supporting informed decision-making and strategic planning across the platform.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- QuickActions Submodule -->
							<details>
								<summary><b>QuickActions</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.WorkQueue.QuickActions</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/QuickActions/QuickAction.styled.js'>QuickAction.styled.js</a></b></td>
											<td style='padding: 8px;'>- Defines styled components for the Quick Actions interface within the Work Queue, enabling consistent and visually appealing button and list layouts<br>- These components facilitate user interactions by providing a cohesive design for quick action buttons and their arrangement, supporting an intuitive and efficient user experience in managing work items.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/QuickActions/QuickAction.jsx'>QuickAction.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user interface component that displays a list of quick action buttons within the WorkQueue section<br>- It integrates predefined actions from a JSON data source and presents them in a styled, accessible format, facilitating rapid user interactions and streamlining workflow management within the broader application architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- TableWork Submodule -->
							<details>
								<summary><b>TableWork</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.WorkQueue.TableWork</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/TableWork/TableWork.jsx'>TableWork.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user interface component for displaying and filtering a work queue table<br>- It enables users to view tasks categorized by status, such as assigned, pending review, or completed, with dynamic filtering and real-time count updates<br>- Integrates loading states and maintains a clear, organized layout within the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/TableWork/TableWork.styled.js'>TableWork.styled.js</a></b></td>
											<td style='padding: 8px;'>- Defines styled components for the Work Queue table interface, focusing on layout and user interaction elements<br>- Facilitates responsive design and visual consistency for action controls and sorting buttons, enhancing usability and aesthetic coherence within the overall application architecture<br>- These components support dynamic styling based on user interaction and screen size, contributing to a seamless user experience.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Portfolio Submodule -->
							<details>
								<summary><b>Portfolio</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.WorkQueue.Portfolio</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/Portfolio/Portfolio.jsx'>Portfolio.jsx</a></b></td>
											<td style='padding: 8px;'>- Render a comprehensive portfolio overview by displaying a series of visual charts representing portfolio goals and business targets<br>- It orchestrates the presentation of multiple chart components within a styled layout, facilitating clear visualization of strategic objectives and performance metrics to support decision-making and progress tracking within the broader application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/Portfolio/Portfolio.styled.js'>Portfolio.styled.js</a></b></td>
											<td style='padding: 8px;'>- Defines styled components for the Portfolio section within the WorkQueue component, establishing visual structure and consistent design elements<br>- Facilitates a cohesive and visually appealing presentation of portfolio data, ensuring layout, typography, and spacing align with the overall theme<br>- Supports the rendering of portfolio-related content in a styled, organized manner within the applications architecture.</td>
										</tr>
									</table>
									<!-- PortfolioTargetChart Submodule -->
									<details>
										<summary><b>PortfolioTargetChart</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.WorkQueue.Portfolio.PortfolioTargetChart</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/Portfolio/PortfolioTargetChart/PortfolioTargetChart.jsx'>PortfolioTargetChart.jsx</a></b></td>
													<td style='padding: 8px;'>- Render a vertical bar chart component that visualizes portfolio performance metrics against targets, highlighting deviations and retention levels<br>- It dynamically displays actual values, target benchmarks, and status labels, facilitating quick assessment of portfolio health within the broader application architecture focused on portfolio management and analytics.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- BusinessTarget Submodule -->
									<details>
										<summary><b>BusinessTarget</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.WorkQueue.Portfolio.BusinessTarget</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/Portfolio/BusinessTarget/BusinessTarget.jsx'>BusinessTarget.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a visual representation of business performance against targets through a vertical bar chart<br>- It displays actual values, remaining progress, and percentage achievement, enabling quick assessment of goal attainment within the overall portfolio architecture<br>- The component integrates seamlessly with styled components and responsive design, supporting data-driven insights for strategic decision-making.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- config.js Submodule -->
									<details>
										<summary><b>config.js</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.WorkQueue.Portfolio.config.js</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/WorkQueue/Portfolio/config.js/config.js'>config.js</a></b></td>
													<td style='padding: 8px;'>- Defines configuration data for visualizing key portfolio and business performance metrics through charts<br>- It specifies targets, data points, and visual styles for metrics such as loss ratio, retention, new business, and annual GWP, supporting the presentation of strategic goals and progress within the overall application architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- MyAccount Submodule -->
					<details>
						<summary><b>MyAccount</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.MyAccount</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/MyAccount/MyAccount.jsx'>MyAccount.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface for managing account information by displaying a searchable, filterable table of account data<br>- Integrates loading states, search functionality, and action buttons for filtering, sorting, grouping, and creating new entries<br>- Serves as a central component within the application’s architecture, enabling users to efficiently view and interact with account-related data.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/MyAccount/MyAccount.styled.js'>MyAccount.styled.js</a></b></td>
									<td style='padding: 8px;'>- Defines styled components for the MyAccount interface, facilitating consistent and responsive UI elements such as action containers, search input, buttons, and empty state messaging<br>- These components support user interactions and visual layout within the account management section, contributing to a cohesive and adaptable user experience across devices.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Navigation Submodule -->
					<details>
						<summary><b>Navigation</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Navigation</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/Navigation/Navigation.jsx'>Navigation.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the primary navigation component, rendering a styled navigation bar with interactive links based on predefined icon data<br>- Facilitates user movement across different sections of the application, contributing to the overall architecture by providing a consistent and accessible means of navigation within the user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/Navigation/Navigation.styled.js'>Navigation.styled.js</a></b></td>
									<td style='padding: 8px;'>- Defines styled components for the navigation bar, including layout, spacing, and visual states<br>- Facilitates consistent, responsive styling of navigation elements, ensuring clear user interaction cues and seamless integration within the overall application architecture<br>- Enhances user experience by providing a cohesive and adaptable navigation interface aligned with the projects design system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Header Submodule -->
					<details>
						<summary><b>Header</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Header</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/Header/Header.jsx'>Header.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the header section of the application, providing a personalized greeting, task overview, search functionality, user avatar, and navigation links<br>- It serves as the primary interface for user interaction and navigation, establishing a consistent and welcoming entry point within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/Header/Header.styled.jsx'>Header.styled.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines styled components for the header section, establishing its visual structure and responsiveness within the overall application layout<br>- Facilitates consistent header presentation, including title, actions, and search functionalities, ensuring adaptability across various screen sizes to enhance user experience and maintain design coherence across the project.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- shared Submodule -->
					<details>
						<summary><b>shared</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.shared</b></code>
							<!-- Layout Submodule -->
							<details>
								<summary><b>Layout</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.shared.Layout</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/Layout/Layout.styled.js'>Layout.styled.js</a></b></td>
											<td style='padding: 8px;'>- Defines styled components that establish consistent layout and spacing across shared application pages<br>- The Container component centers content with responsive padding, ensuring adaptability across device sizes, while the Section component provides uniform bottom spacing for content sections<br>- Together, they support a cohesive and responsive overall architecture by standardizing layout structure throughout the project.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/Layout/Layout.jsx'>Layout.jsx</a></b></td>
											<td style='padding: 8px;'>- Defines the primary layout structure for the application, integrating a consistent header and footer with dynamic content rendering via nested routes<br>- Facilitates a cohesive user interface by providing a reusable framework that manages page composition within the overall architecture, ensuring seamless navigation and a uniform look across different views.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- ui Submodule -->
							<details>
								<summary><b>ui</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.shared.ui</b></code>
									<!-- Loader Submodule -->
									<details>
										<summary><b>Loader</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.shared.ui.Loader</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Loader/Loader.jsx'>Loader.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a reusable loading indicator component that visually communicates ongoing processes within the application<br>- Integrating a styled wrapper and animated spinner, it enhances user experience by signaling activity during data fetching or component loading states across the project’s UI<br>- This component promotes consistency and simplifies the implementation of loading states throughout the codebase.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Loader/Loader.styled.js'>Loader.styled.js</a></b></td>
													<td style='padding: 8px;'>- Provides a styled container for the loading indicator, ensuring it is centered and visually prominent within the user interface<br>- It contributes to the overall UI consistency by defining the layout and positioning of the loader component, enhancing user experience during asynchronous operations or data fetching processes across the application.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Avatar Submodule -->
									<details>
										<summary><b>Avatar</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.shared.ui.Avatar</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Avatar/Avatar.jsx'>Avatar.jsx</a></b></td>
													<td style='padding: 8px;'>- Render user initials as a visual identifier within the shared UI component library, enhancing personalization and recognition across the application<br>- Integrates seamlessly into the overall architecture by providing a reusable, styled avatar element that simplifies user representation in various interface contexts<br>- Supports consistent branding and improves user experience through concise, recognizable visual cues.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Avatar/Avatar.styled.js'>Avatar.styled.js</a></b></td>
													<td style='padding: 8px;'>- Defines a styled avatar component that standardizes the visual appearance of user profile images or icons across the application<br>- It ensures consistent sizing, shape, and styling, contributing to a cohesive user interface within the shared UI component library of the project<br>- This component facilitates uniform avatar presentation throughout the codebase.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- WrapperBar Submodule -->
									<details>
										<summary><b>WrapperBar</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.shared.ui.WrapperBar</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/WrapperBar/WrapperBar.jsx'>WrapperBar.jsx</a></b></td>
													<td style='padding: 8px;'>- Defines a reusable UI component that structures a header section with a customizable title and embedded content<br>- It facilitates consistent layout and styling within the applications shared interface elements, supporting modular design and enhancing user experience across different parts of the project.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/WrapperBar/WrapperBar.styled.js'>WrapperBar.styled.js</a></b></td>
													<td style='padding: 8px;'>- Defines styled components that establish the visual structure and aesthetic of a shared UI element within the application<br>- It provides a flexible, responsive container with consistent theming, ensuring cohesive layout and styling for the WrapperBar component across different screens and devices<br>- This contributes to a unified user interface and enhances maintainability within the overall architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Table Submodule -->
									<details>
										<summary><b>Table</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.shared.ui.Table</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Table/Table.styled.js'>Table.styled.js</a></b></td>
													<td style='padding: 8px;'>- Defines styled components for a responsive, visually consistent table interface within the applications shared UI library<br>- Facilitates structured data presentation, ensuring adaptability across device sizes, with visual cues like color indicators and layout elements that enhance readability and user experience across the overall architecture.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Table/Table.jsx'>Table.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a reusable, styled table component that renders dynamic data based on specified columns and custom render functions<br>- It facilitates consistent presentation of tabular information across the application, supporting flexible data visualization within the shared UI component architecture<br>- This component enhances maintainability and visual uniformity in displaying structured datasets.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Search Submodule -->
									<details>
										<summary><b>Search</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.components.shared.ui.Search</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Search/Search.styled.js'>Search.styled.js</a></b></td>
													<td style='padding: 8px;'>- Defines a styled input component tailored for search functionality within the applications user interface<br>- It ensures consistent visual presentation and responsiveness across devices, aligning with the overall design system<br>- This component facilitates user interactions by providing a visually appealing and accessible search input field integrated into the shared UI library.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/components/shared/ui/Search/Search.jsx'>Search.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a reusable search input component integrated into the shared UI library, enabling consistent search functionality across the application<br>- It facilitates user input for search queries within the broader interface, supporting the overall architectures emphasis on modular, styled, and accessible UI elements<br>- This component enhances user experience by offering a standardized and easily maintainable search interface.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- pages Submodule -->
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.pages</b></code>
					<!-- Dashboard Submodule -->
					<details>
						<summary><b>Dashboard</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.Dashboard</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/pages/Dashboard/Dashboard.jsx'>Dashboard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the main dashboard interface by orchestrating data retrieval of client information and rendering key components such as the work queue and user account details<br>- It manages data loading states and supplies shared context to child components, facilitating a cohesive and dynamic user experience within the applications architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Account Submodule -->
					<details>
						<summary><b>Account</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.Account</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/1Anka1/test-assignment/blob/master/src/pages/Account/Account.jsx'>Account.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the Account page component within the applications user interface, serving as a placeholder for user account-related features<br>- It integrates into the overall architecture by providing a dedicated route or section for managing user information, ensuring a structured and accessible user experience within the broader frontend framework.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build test-assignment from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/1Anka1/test-assignment
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd test-assignment
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Test-assignment uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
