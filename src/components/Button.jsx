// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="block w-full mt-6 bg-blue-700 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
    >
        {children}
    </button>
);

export default Button;