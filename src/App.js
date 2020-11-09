import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js';
import EmployeeList from './components/employee-list.component.js';
import ViewEmployee from './components/view-employee.component.js';
import CreateEmployee from './components/create-employee.component.js';

function App() {
  return (
    <Router>
    <div class="container">
      <Navbar />
      <br/>
      <Route path = '/api/employee' exact component = {EmployeeList} />
      <Route path = '/api/employee/:id' exact component = {ViewEmployee} />
      <CreateEmployee />
      {/* <Route path = '/api/add' exact component = {CreateEmployee} /> */}
    </div>
    </Router>
  );
}

export default App;
