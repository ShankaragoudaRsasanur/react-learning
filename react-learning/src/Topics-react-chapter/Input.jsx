function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input type={props.type} placeholder={props.placeholder} />
      <br />
    </div>
  );
}

export default Input;