import EmailAddress from "./EmailAddress";
import Alert from "react-bootstrap/Alert";

function Header (props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.address}</p>
      <p>
        <EmailAddress email={props.userEmail} />
      </p>

      <form onSubmit={props.submitForm}>
        <input type="text" name="email" value={props.userData.email} onChange={props.handleInputChange}/>
        <input type="text" name="name" value={props.userData.name} onChange={props.handleInputChange}/>
        <button type="submit">Submit Email</button>
      </form>

      {props.formSubmitted === true && (
        <Alert variant="primary">
          Your form was successfully submitted
        </Alert>
      )}
    </div>
  );
}

export default Header;