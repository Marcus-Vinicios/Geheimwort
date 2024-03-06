type Button = {
  text: string,
  bgColor: string,
  onClick?: () => void;
};

function Button({ text, bgColor, onClick }: Button) {
  return (
    <button onClick={onClick} className={`border border-white rounded-full min-w-20 px-2 py-1 font-bold text-lg ${bgColor} duration-500`}>{text}</button>
  )
}

export default Button