const Button = ({ onClick, disabled, children, additionalClasses = "" }) => {
  return (
    <button
      className={`rounded-full transition-colors w-full bg-gray-500 hover:bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90% hover:border-4 ${additionalClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
