import Layout from 'layout';
import AboutBusiness from 'pages/AboutBusiness';
import AboutUser from 'pages/AboutUser';
import BusinessProfile from 'pages/BusinessProfile';
import ClubDetails from 'pages/ClubDetails';
import ContactInfo from 'pages/ContactInfo';
import CreatingEvent from 'pages/CrearingEvent';
import EventDetails from 'pages/EventDetails';
import Events from 'pages/Events';
import Filter from 'pages/Filter';
import Home from 'pages/Home';
import IntroScreen from 'pages/Intro';
import ListView from 'pages/ListView';
import Login from 'pages/Login';
import MyVqts from 'pages/MyVqts';
import Notifications from 'pages/Notifications';
import OnGoingEvent from 'pages/OnGoingEvent';
import OtpScreen from 'pages/OtpScreen';
import OverView from 'pages/OverView';
import Payment from 'pages/Payment';
import Profile from 'pages/Profile';
import QrCode from 'pages/QrCode';
import SetPassword from 'pages/SetPassword';
import SignIn from 'pages/SignIn';
import SignUpBusiness from 'pages/SignUpBusiness';
import SplashScreen from 'pages/Splash';
import BusinessTags from 'pages/Tags';
import UpLoadingImages from 'pages/UpLoadingImages';
import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return useRoutes(
    [
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <IntroScreen />,
          },
          {
            path: '/splash',
            element: <SplashScreen />,
          },
          {
            path: '/signin',
            element: <SignIn />,
          },
          {
            path: '/otp',
            element: <OtpScreen />,
          },
          {
            path: '/setpassword',
            element: <SetPassword />,
          },
          {
            path: '/aboutuser',
            element: <AboutUser />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/listview',
            element: <ListView />,
          },
          {
            path: '/clubdetails',
            element: <ClubDetails />,
          },
          {
            path: '/payment',
            element: <Payment />,
          },
          {
            path: '/qrcode',
            element: <QrCode />,
          },
          {
            path: '/myvqts',
            element: <MyVqts />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/filter',
            element: <Filter />,
          },
          {
            path: '/signupbusiness',
            element: <SignUpBusiness />,
          },
          {
            path: '/aboutbusiness',
            element: <AboutBusiness />,
          },
          {
            path: '/businesstags',
            element: <BusinessTags />,
          },
          {
            path: '/uploading',
            element: <UpLoadingImages />,
          },
          {
            path: '/contactinfo',
            element: <ContactInfo />,
          },
          {
            path: '/events',
            element: <Events />,
          },
          {
            path: '/creatingevent',
            element: <CreatingEvent />,
          },
          {
            path: '/notifications',
            element: <Notifications />,
          },
          {
            path: '/businessprofile',
            element: <BusinessProfile />,
          },
          {
            path: '/eventdetails',
            element: <EventDetails />,
          },
          {
            path: '/ongoingevent',
            element: <OnGoingEvent />,
          },
          {
            path: '/overview',
            element: <OverView />,
          },
        ],
      },
    ]
    // <Routes>
    //   <Route path="/" element={<IntroScreen />}></Route>
    //   <Route path="/splashscreen" element={<SplashScreen />}></Route>
    //   <Route path="/signin" element={<SignIn />}></Route>
    //   <Route path="/otpvalidation" element={<OtpScreen />}></Route>
    // </Routes>
  );
};

export default AppRoutes;
