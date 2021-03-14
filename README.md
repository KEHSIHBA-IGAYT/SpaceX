This Project displays the SpaceX launch information with year, launch success and landing success filters.

Tech stack:

This is a Single Page Application developed using "Next JS" framework with React JS functional components, HTML5 and CSS modules.
Next JS seemed quite apt to fulfill the given requirements as it provides inbuilt support for SSR (Server Side Rendering) and shallow routing.

Requirements and solution:

“Server-Side Rendering”
- Functionalities
1. The initial launch programs landing page has to be server side rendered.
2. A boilerplate to implement the Server-side rendering can be used.

[Solution]: This has been achieved using getServerSideProps().

“Build and Packaging”
- Functionalities
1. Build should have basic set of static code quality checks and should fail the build if there is any error.

[Solution]: ESlint and Prettier has been used to maintain code uniformity and static code checks.

“Client Side”
- Functionalities
1. User should be able to filter the results with help of provided Filters.
 Filter options are hard coded with the values shown in the visual comp below.
 Applying any Filter should reflect the below changes:
• Selected filter should change to selected state as shown in the visual comp (and should mimic the toggle behavior).
• Applied filters should change the URL and update the Page with latest records without refreshing the page.
• If the page is refreshed with the applied filters in the URL – the resulting page should be server side rendered and subsequent filters should again be client side rendered.

[Solution]:
Flow:

-	Inside /pages, index.js is the main entry page which has 2 children components: “FilterBox” and “CardBox”.
-	On initial page load and on subsequent page refresh, the data is fetched inside getServerSideProps(params) function which renders the data on server side.
-	State of filters is being managed inside “index.js” using react useState() hook and the state is being passed to the component FilterBox as props, along with an event handler function to fetch back the changes done in FilterBox and to change the state.
-	Whenever any filter changes, the URL is changed with new filters using Next JS shallow routing and the data is rendered client side inside the same even handler function.
-	On page refresh, the filters are persisted with the help of URL query parameters, which are accessible inside getServerSideProps().
-	After fetching the data, it is passed to the “CardBox” component, which is responsible to render the launch information on the screen.


- Responsive Design and other UI elements.
1. Page should visually match with the provided designs at the end of this file.
2. Responsive Behavior – Expectation is to do a custom media query implementation and not use bootstrap or similar responsive framework:
 Implementation should follow Mobile first design approach
 Mobile View: Page should have only one Column until 700 px. We have provided the Visual designs for Mobile screen.
 Tablet View: Page should have 2 columns between 700 and 1024 px. Design is provided for Desktop tile and that should be followed for this viewport.
 Desktop View: Page should have 4 columns between 1024 and 1440 px. Beyond 1440px viewport, the content will be centered align with a max width of 1440.

[Solution]: This has been achieved with the help of flexbox, grids and CSS media queries.


