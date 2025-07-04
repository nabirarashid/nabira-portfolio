interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}
const Button = ({ text, onClick, className }: Props) => {
  return (
    <div className={`flex ${className}`}>
      <button
        className={"rounded-md bg-pink-200 px-3 py-2 text-sm font-medium text-black hover:bg-pink-300"}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;