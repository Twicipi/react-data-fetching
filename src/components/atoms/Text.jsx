const Text = ({ size, children, additionalClasses = "" }) => {
    const sizeClasses = {
      small: "text-sm",
      medium: "text-xl",
      large: "text-4xl",
    };
  
    return (
      <p className={`${sizeClasses[size]} ${additionalClasses}`}>{children}</p>
    );
  };
  
  export default Text;
  