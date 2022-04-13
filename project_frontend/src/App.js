import './App.css';
import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Footer from './component/header-footer/Footer';
import Header from './component/header-footer/Header';
import {About} from './component/header-footer/About';
import  {Home} from './component/header-footer/Home';
import Slogin from './component/login/studentlogin';
import Alogin from './component/login/Adminlogin';
import {Contact} from './component/header-footer/contact';
import {Fee} from './component/header-footer/fee';
import AddStudent from './component/adminstudent/AddStudent';
import AddResult from './component/adminresult/AddResult';
import StudentList from './component/adminstudent/StudentList';
import NotFound from './component/NotFound';
import {Homepage} from'./component/student/homepage';
import ResultList from './component/adminresult/StudentResult';
import ResultStudent from './component/student/StudentResult'
import UpdateResult from './component/adminresult/UpdateResult';
import TransferStudentList from './component/adminstudent/TranferStudentList';
import StudentView from './component/adminstudent/view';
import AttandanceList from'./component/adminattandance/StudentAttandance';
import AddAttandance from'./component/adminattandance/AddAttandance';
import StudentHome from './component/student/studenthome';
import AttandanceReport from './component/adminattandance/studentreportattandance';
import AttandanceStudent from './component/student/StudentAttandance';
import AttandanceStudentReport from './component/student/studentreport';
import StudentPassword from './component/student/changeStudentPassword';
import AdminPassword from './component/login/changeAdminPassword'
function App() {
  const logout =()=>{
    localStorage.removeItem("userinfo");
  }
return ( 
  <div className="App">
     <React.Fragment>
    <Router>
      <Header title="MySchool"/> 
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/loginadmin" component={Alogin} />
          <Route exact path="/loginstudent" component={Slogin} />
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/fee"><Fee/></Route>
          <Route exact path="/student" component={Homepage} />
          <Route path="/admin/view" component={StudentList} />
          <Route path="/admin/views/:sid" component={StudentView} />
          <Route path="/admin/viewtransfer"component={TransferStudentList} />
          <Route path="/admin/add" component={AddStudent} />
          <Route path="/admin/edit/:sid" component={AddStudent} />
         <Route path="/admin/result/:id" component={ResultList} />
         <Route path="/admin/resultadd/:id" component={AddResult} />
         <Route path="/admin/resultedit/:rid/:sid"component={UpdateResult}/>
         <Route path="/admin/attandance/:sid"component={AttandanceList}/>
         <Route path="/admin/addattandance"component={AddAttandance}/>
         <Route path="/student/view"component={StudentHome}/>
         <Route path="/student/result" component={ResultStudent} />
         <Route path="/admin/attandancereport/:sid"component={AttandanceReport}/>
         <Route path="/student/attandance"component={ AttandanceStudent}/>
         <Route path="/student/attandancesummary"component={  AttandanceStudentReport}/>
         <Route path="/student/changepassword"component={StudentPassword}/>
         <Route path="/admin/changepassword"component={AdminPassword}/>
         <Route path="*" component={NotFound} />
    </Switch> 
      
      <Footer />
    </Router>
    </React.Fragment>
    </div>
  );
}


export default App;