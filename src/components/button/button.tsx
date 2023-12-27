import { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Button> = (props: Button) => {
  const { children, state, className } = props;

  const themeStyle = () => {
    if (state === "primary") {
      return "text-off-white bg-soft-blue hover:bg-[#3A51E3] active:bg-[#192EB3] focus:bg-soft-blue focus:outline focus:outline-4";
    }
    return "text-dark-blue bg-[#5468E7] bg-opacity-50 hover:bg-[#1E37D7] hover:bg-opacity-50 active:bg[#1E37D7] active:bg-opacity-[68%] focus:bg-[#5468E7] focus:bg-opacity-50 focus:outline focus:outline-4";
  };

  return (
    <button
      className={`px-11 py-[10px] text-lg rounded-[4px] whitespace-nowrap	 ${themeStyle()} ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
// bg-[#5468E7] bg-opacity-50
