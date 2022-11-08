

function EmploymentItem (props) {
  const yearsOnJob = props.endYear - props.startYear;

  return (
    <div>
      {props.startYear} - {props.endYear} <br />
      {props.children} <br />
      {yearsOnJob} years on the job.
    </div>
  )
}

export default EmploymentItem;