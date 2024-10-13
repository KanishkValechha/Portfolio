import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioWebsite from "./App.jsx";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioWebsite />
  </StrictMode>
);
