# Fast React Pizza Co.

A pizza ordering app built with React, Vite, Tailwind CSS, and Redux, designed to enhance learning of advanced React Router, Redux Toolkit concepts and styling with Tailwind CSS. Users can browse the menu, add pizzas to the cart, update order quantities, delete items, and finalize the order details with a form.

## Features
- **Menu**: Browse available pizzas with details and pricing.
- **Cart Management**: Add, delete, and update the quantity of pizzas in the cart.
- **Order Placement**: Users have the option to mark their order as a priority and autofill the address field using reverse geolocation.
- **User Integration**: Users can manage their orders and track current selections with search query by searching the order #.
  
## Key Concepts Learned
- **Advanced React Router**: 
  - `createBrowserRouter`, `react router loaders`, `useNavigation`, `useRouteError`, `react router actions`, `useFetcher`.
- **Redux Toolkit**: 
  - State management using `useSelector` and asynchronous actions with `createAsyncThunks`.
- **Tailwind CSS**: For fast and responsive UI styling.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Roenan12/fast-react-pizza.git
    ```
2. Navigate to the project folder:
    ```bash
    cd fast-react-pizza
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Input your name then browse the pizza menu, add items to your cart, and manage your selections.
3. Proceed to the checkout and fill out the form where there's an option to fetch your location using reverse geolocation and make your order priority.

## Technologies Used
- **React.js**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Redux Toolkit**

## Acknowledgements
This app was developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. Special thanks to Jonas for his excellent teaching and guidance throughout the course.
