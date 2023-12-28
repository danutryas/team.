import { InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  state: "hero" | "footer";
}

const Input: React.FC<Input> = (props) => {
  const { state } = props;

  const stateStyle = () => {
    if (state === "hero") {
      return "border border-[#D1ECFD] border-inherit text-desaturated-blue";
    }
    return "bg-off-white bg-opacity-[20%] text-off-white";
  };

  return (
    <div className="relative h-auto w-full">
      <input
        type="email"
        className={`h-12 w-full rounded px-4 outline-none text-sm ${stateStyle()} `}
        placeholder="Email"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z"
            fill={state === "footer" ? "#F5F5F5" : "#7676B2"}
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;
