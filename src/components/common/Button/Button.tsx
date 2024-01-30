import classNames from 'classnames';
import { FC, useState } from 'react';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  content?: string | React.ReactNode;
  children?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  type = 'primary',
  content,
  children,
  showArrow = true,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={classNames(
        className,
        type === 'primary'
          ? 'bg-main-color text-white'
          : 'bg-fuchsia-50 text-black',
        `flex center  rounded-[50px] p-2 px-5 
        relative overflow-hidden transition-transform duration-300`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center gap-0.5">
        {content}
        {children}
        {showArrow && (
          <div className="w-7 h-7 relative ml-2">
            <img
              src={
                type === 'primary'
                  ? '/assets/common/buttonArrow.svg'
                  : '/assets/common/buttonArrowBlack.svg'
              }
              alt=""
              className={classNames(
                'w-full h-full absolute transform transition-transform duration-300 ',
                { 'translate-x-[4px] translate-y-[-4px]': isHovered }
              )}
            />
          </div>
        )}
      </div>
    </button>
  );
};
