// authService.js
export const login = async (username, password) => {
    // Replace with actual API call
    if (username === 'user' && password === 'pass') {
      return { token: 'your-auth-token' }; // Example token
    }
    throw new Error('Invalid credentials');
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
  };