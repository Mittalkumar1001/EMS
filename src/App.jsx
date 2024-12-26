import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard';
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
// localStorage.clear();
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  const authData = useContext(AuthContext); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
   
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      console.log("user loggedin dekh liya h")
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@company.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees?.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  // console.log('User:', user);
  // console.log('Auth Data:', authData);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser}/>
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>
      ) : null}
    </>
  );
};

export default App;