import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes, authRoutes } from "./routers";
import { AuthLayout, LoggedInLayout } from "./utility/AuthLayout";
import { useState, useEffect } from "react";
import './css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
})
  return (
      <div>
      <BrowserRouter>
            <Routes>
              {publicRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={<route.component />}
                />
              ))}
              {privateRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <AuthLayout >
                        <route.component />
                    </AuthLayout >
                  }
                />
              ))}
              {authRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <LoggedInLayout >
                      <route.component />
                    </LoggedInLayout >
                  }
                />
              ))}
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
