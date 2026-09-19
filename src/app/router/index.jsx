import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "app/layouts";

// Импорт страниц (пока пустых)
import { LandingPage } from "pages/landing";
import { LoginPage } from "pages/login";
import { SignupPage } from "pages/signup";
import { AccountPage } from "pages/account";
import { FlightSearchPage } from "pages/flight-search";
import { HotelSearchPage } from "pages/hotel-search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "flights", element: <FlightSearchPage /> },
      { path: "hotels", element: <HotelSearchPage /> },
      { path: "account", element: <AccountPage /> },
    ],
  },
  // Логин и регистрацию часто делают БЕЗ хедера и футера
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
]);
