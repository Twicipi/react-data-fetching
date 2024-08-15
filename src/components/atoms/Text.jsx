const Text = ({ size, children, additionalClasses = "" }) => {
  const sizeClasses = {
    small: "text-xs sm:text-sm",
    medium: "text-base sm:text-xl",
    large: "text-xl sm:text-2xl",
  };

  return (
    <p className={`${sizeClasses[size]} ${additionalClasses}`}>{children}</p>
  );
};

export default Text;
