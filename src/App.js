import {useState} from "react";

import Header from "./components/Header.js";
import Subheader from "./components/Subheader.js";
import ListContainer from "./components/ListContainer.js";
import ListItem from "./components/ListItem.js";
import EmploymentItem from "./components/EmployementItem.js";
import resumeData from "./data/resumeData.json";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userData, setUserData] = useState({email: "", name: ""});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // The below function could technically be removed and jsut added after the onChange tag using the following
  // format: "onchange = {(e) => {setUserData({...userData, [e.target.name]: e.target.value})}}"
  const handleInputChange = (e) => {
    // e.target tells everything about the DOM element where the event was fired

    // const newData = {...userData, [e.target.name]: e.target.value};
    // setUserData(newData);

    setUserData({...userData, [e.target.name]: e.target.value});
  }

  const submitForm = async (e) => {
    e.preventDault();
    const submit = await fetch(".....", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}
    })
  }

  return (
    <div>

      <Header 
        data={resumeData}
        userData={userData}
        handleInputChange={handleInputChange}
        submitForm={submitForm}
        formSubmitted={formSubmitted}
      />

      <Subheader title="Career Summary" />


      <Subheader title="Adult Care Experience" />
      <ListContainer>
        <ListItem>
          Determined work placement for 150 special needs adult patients.
        </ListItem>
        <ListItem>
          Maintained patient databases and records.
        </ListItem>
        <ListItem>
          Coordinated patient contact with local health care professionals on a monthly basis.
        </ListItem>
        <ListItem>
          Managed 25 volunteer workers.
        </ListItem>
      </ListContainer>
      

      <Subheader title="Childcare Experience" />
      <ListContainer>
        <ListItem>
          Coordinated service assignments for 20 part-time counselors and 100 client families.
        </ListItem>
        <ListItem>
          Oversaw daily activity and outing planning for 100 clients.
        </ListItem>
        <ListItem>
          Assisted families of special needs clients with researching financial assistance and healthcare.
        </ListItem>
        <ListItem>
          Assisted teachers with managing daily classroom activities.
        </ListItem>
        <ListItem>
          Oversaw daily and special student activities.
        </ListItem>
      </ListContainer>


      <Subheader title="Employment History" />
      <EmploymentItem startYear={1999} endYear={2002}>
        Counseling Supervisor, The Wesley Center, Little Rock, Arkansas
      </EmploymentItem>
      <EmploymentItem startYear={1997} endYear={1999}>
        Client Specialist, Rainbow Special Care Center, Little Rock, Arkansas
      </EmploymentItem>
      <EmploymentItem startYear={1996} endYear={1997}>
        Teacher's Assistant, Cowell Elementary, Conway, Arkansas
      </EmploymentItem>


      <Subheader title="Education History" />
      <ListContainer>
        <ListItem>
          BS in Early Childhood Development (1999) 
        </ListItem>
        <ListItem>
          BA in Elementary Education (1998)
        </ListItem>
        <ListItem>
          GPA (4.0 Scale): Early Childhood Development - 3.8, Elementary Education - 3.5, Overall 3.4
        </ListItem>
        <ListItem>
          Dean's List, Chancellor's List
        </ListItem>
      </ListContainer>
    </div>
  );
}

export default App;
