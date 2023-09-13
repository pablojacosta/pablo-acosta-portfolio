import { DOMAttributes } from "react";

interface IMenuItem extends DOMAttributes<HTMLLIElement> {
  name: string;
  className: string;
  onClick: () => void;
}

const MenuItem = ({ name, className, onClick }: IMenuItem) => {
  return (
    <li className={className} onClick={onClick}>
      {name}
    </li>
  );
};

export default MenuItem;
