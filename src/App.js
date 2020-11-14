import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js';
import EmployeeList from './components/employee-list.component.js';
import CreateEmployee from './components/create-employee.component.js';
import HomePage from './components/home-page.componont.js';
import employeeSearch from'./components/employee-search.component.js';

function App() {
  return (
    <Router>
    <div class="container">
      <Navbar />
      <br/>
      <Route path= '/' exact component = {HomePage} />
      <Route path = '/employees' exact component = {EmployeeList} />
      <Route path = '/add' exact component = {CreateEmployee} />
      <Route path = '/search' exact component = {employeeSearch} />
    </div>
    </Router>
  );
}

export default App;
