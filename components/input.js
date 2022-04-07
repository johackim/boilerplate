const Input = ({ type, name, value, onChange, className, placeholder, required }) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-md border bg-white px-2 py-1.5 text-gray-700 outline-none dark:border-gray-500 dark:bg-transparent dark:text-gray-300 ${className}`}
        placeholder={placeholder}
        required={required}
    />
);

Input.defaultProps = {
    type: 'text',
    name: '',
    value: '',
    placeholder: 'Text',
    required: false,
    className: '',
    onChange: () => {},
};

export default Input;
