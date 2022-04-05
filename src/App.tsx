import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes, authRoutes } from "./routers";
import { AuthLayout, LoggedInLayout } from "./utility/AuthLayout";
import './css/App.css';
function App() {
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
