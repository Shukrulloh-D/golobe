import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'app/layouts';
import { AuthLayout } from 'app/layouts/auth-layout';
import { LandingPage } from 'pages/landing';
import { LoginPage } from 'pages/login';
import { SignupPage } from 'pages/signup';
import { SignupPaymentPage } from 'pages/signup-payment';
import { ForgotPasswordPage } from 'pages/forgot-password';
import { VerifyCodePage } from 'pages/verify-code';
import { ResetPasswordPage } from 'pages/reset-password';
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
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/signup-payment', element: <SignupPaymentPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/verify-code', element: <VerifyCodePage /> },
      { path: '/reset-password', element: <ResetPasswordPage /> },
    ],
  },
]);
