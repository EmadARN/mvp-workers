function TextField({ label, name, value, onChange, onBlur, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {label}
      </label>
      <input
        autoComplete="off"
        className={`textField__input ${
          error ? "border-red-500 focus:ring-red-500" : ""
        }`}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
}

export default TextField;
