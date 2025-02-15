interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}
const Button = ({ text, onClick, className }: Props) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <button
        className={"m-4 bg-pink-100 hover:bg-pink-300 text-black font-bold py-3 px-6 rounded"}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
