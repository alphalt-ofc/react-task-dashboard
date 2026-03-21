function GenericInput({type, placeholder, value, onChange}) {
    return (
        <input  
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    );
}

export default GenericInput;