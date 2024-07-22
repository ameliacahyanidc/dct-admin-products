// eslint-disable-next-line react/prop-types
const Textarea = ({ label, value, onChange, placeholder }) => (
    <div>
        <label className="font-semibold">{label}</label>
        <textarea
            value={value}
            onChange={onChange}
            rows="4"
            className="w-full block border p-3 text-gray-600 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder={placeholder}
        />
    </div>
);

export default Textarea;