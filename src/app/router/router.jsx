import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'app/layouts';
import { LandingPage } from 'pages/landing';
import { LoginPage } from 'pages/login';
import { SignupPage } from 'pages/signup';
import { AccountPage } from 'pages/account';
import { FlightSearchPage } from 'pages/flight-search';
import { FlightListingPage } from 'pages/flight-listing';
import { FlightDetailsPage } from 'pages/flight-details';
import { FlightBookingPage } from 'pages/flight-booking';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'flights', element: <FlightSearchPage /> },
      { path: 'flights/listing', element: <FlightListingPage /> },
      { path: 'flights/:id', element: <FlightDetailsPage /> },
      { path: 'flights/:id/booking', element: <FlightBookingPage /> },
      { path: 'account', element: <AccountPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
]);
