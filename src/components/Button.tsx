interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}
const Button = ({ text, onClick, className }: Props) => {
  return (
    <div className={`flex ${className}`}>
      <button
        className={"rounded-md bg-gradient-to-r from-pink-200 to-pink-300 shadow-md px-3 py-2 text-sm font-medium text-black hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200 ease-in-out"}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;