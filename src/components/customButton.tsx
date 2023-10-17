import { FC } from "react";

type CustomButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  // title: string;
};

const CustomButton: FC<CustomButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="bg-success font-extrabold text-slate-50 text-[28px] w-full">
      {title}
    </button>
  );
};

export default CustomButton;
