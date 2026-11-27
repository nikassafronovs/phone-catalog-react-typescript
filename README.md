# Nice Gadgets Store

**Nice Gadgets** is a responsive e-commerce web application for browsing and purchasing smartphones, tablets, and accessories. Built with React, TypeScript, and SCSS Modules, it provides dynamic product sorting and filtering, detailed specification pages, persistent shopping cart and favorites lists, and light/dark theme switching for a smooth online shopping experience.

## Links

- 🔗 **[Live Demo](https://nikassafronovs.github.io/phone-catalog-react-typescript/)**
- 🎨 **[Figma Design](https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog--V2--Original?node-id=0-1&p=f&t=wW8b8GxgM6qCUN3M-0)**

## Technologies Used

- **React** — Component-based UI architecture using functional components and hooks
- **TypeScript** — Static typing for product data models, context states, and component props
- **React Router (v6)** — Client-side navigation across catalog categories, product details, favorites, and cart pages
- **SCSS (Sass) & CSS Modules** — Scoped component styling, responsive grid layouts, and theme variables
- **React Context API & LocalStorage** — Global state management and persistent storage for the shopping cart, favorites list, and light/dark theme
- **Vite & SVGR** — Fast development bundling and importing SVG icons as React components

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
```bash
git clone [https://github.com/nikassafronovs/phone-catalog-react-typescript.git](https://github.com/nikassafronovs/phone-catalog-react-typescript.git)
cd phone-catalog-react-typescript
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the project locally:**
```bash
npm start
```

## Key Features

- **Dynamic Home Showcase:** Interactive hero banner slider, quick category cards, and horizontal product carousels highlighting *Brand New Models* and *Hot Prices*.
- **Catalog Sorting & Pagination:** Dedicated catalog pages for Phones, Tablets, and Accessories with sorting by release year, name, or price, alongside customizable items-per-page pagination.
- **Interactive Product Details:** Switchable product photo gallery, live color and storage capacity variants, complete technical specifications, and a *You May Also Like* recommendations slider.
- **Persistent Cart & Favorites:** Real-time item counters, quantity management, automatic total price calculation, and state persistence via `localStorage`.
- **Light & Dark Theme Support:** Instant theme switching across the entire interface powered by React Context and CSS variables.
- **Fully Responsive Layout:** Adaptive grid design for mobile, tablet, and desktop viewports with a mobile drawer menu and smooth scroll-to-top navigation.
