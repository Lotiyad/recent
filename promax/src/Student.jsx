import PropTypes from 'prop-types'

function Student(props){
return (
  <div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes": "No"}</p>
  </div>
);
}
Student.PropTypes = {
  Name:PropTypes.string,
  Age:PropTypes.number,
  isStudent:PropTypes.bool,
}
Student.defaultProps = {
  Name: "Guest",
  Age: 0,
  isStudent: false,
}
export default Student