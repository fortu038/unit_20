

function EmailAddress (props) {
  return (
    <>
      <a href={`mailto:${props.email}`}>
        {props.email}
      </a>
    </>
  )
}

export default EmailAddress;