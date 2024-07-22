// eslint-disable-next-line react/prop-types
const TextInput = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div>
        <label className="font-semibold">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder={placeholder}
        />
    </div>
);

export default TextInput;
