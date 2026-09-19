import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "app/layouts";

// Импорт всех страниц
import { LandingPage } from "pages/landing";
import { LoginPage } from "pages/login";
import { SignupPage } from "pages/signup";
import { ForgotPasswordPage } from "pages/forgot-password";
import { AccountPage } from "pages/account";
import { FlightSearchPage } from "pages/flight-search";
import { FlightDetailsPage } from "pages/flight-details";
import { FlightBookingPage } from "pages/flight-booking";
import { HotelSearchPage } from "pages/hotel-search";
import { HotelDetailsPage } from "pages/hotel-details";
import { HotelBookingPage } from "pages/hotel-booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "flights", element: <FlightSearchPage /> },
      { path: "flights/:id", element: <FlightDetailsPage /> },
      { path: "flights/:id/booking", element: <FlightBookingPage /> },
      { path: "hotels", element: <HotelSearchPage /> },
      { path: "hotels/:id", element: <HotelDetailsPage /> },
      { path: "hotels/:id/booking", element: <HotelBookingPage /> },
      { path: "account", element: <AccountPage /> },
    ],
  },
  // Авторизация обычно без хедера и футера
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
]);
