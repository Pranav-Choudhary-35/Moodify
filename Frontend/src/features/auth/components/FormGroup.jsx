import '../style/login.scss';

const FormGroup = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        className="input"
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormGroup;
