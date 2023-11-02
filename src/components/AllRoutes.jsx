import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { PrivateRoutes } from './PrivateRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/kanban-board"
        element={
          // <PrivateRoutes>
          <Home />
          // </PrivateRoutes>
        }
      />
    </Routes>
  );
};
