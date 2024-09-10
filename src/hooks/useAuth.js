import { useState, useEffect } from 'react';

export const useAuth = () => {
    const token = localStorage.getItem('authToken');
    return { isAuthenticated: !!token };
  };