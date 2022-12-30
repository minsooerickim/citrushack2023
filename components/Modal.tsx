import React, { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { BiX } from 'react-icons/bi';

interface Props {
  /** Decides whether to show the modal. */
  show: boolean;
  /** Toggles the visibility of the modal. */
  handler: (arg0: boolean) => void;
  /** Heading at the top of the modal. */
  title: string;
  /** Short description below the heading. */
  description: string;
  /** Toggles the color of the modal. */
  card: boolean;
  /** Other content in the modal (e.g. input fields, buttons, etc.). */
  children: React.ReactNode | React.ReactNode[];
}

export default function Modal({
  show,
  handler,
  title,
  description,
  card,
  children,
}: Props) {
  const [targetElement, setTargetElement] = useState(null);

  useEffect(() => {
    setTargetElement(document.querySelector('#modal'));
    if (targetElement) {
      if (show) disableBodyScroll(targetElement);
      else enableBodyScroll(targetElement);
    }
  }, [targetElement, show]);

  return (
    <>
      <div
        id="modal"
        className={
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[32rem] p-4 rounded transform -translate-x-1/2 -translate-y-1/2 transform-gpu transition-opacity duration-150 ' +
          (show ? 'z-[1100] visible opacity-100 ' : 'z-0 invisible opacity-0 ') + (card ? 'bg-card' : 'bg-secondary')
        }
      >
        <div className="relative flex flex-col gap-4 items-center w-full mb-4">
          <div className=" absolute self-end">
            <BiX
              className="text-3xl hover:text-red-500 cursor-pointer"
              onClick={() => handler(false)}
            />
          </div>
          <h3 className="mt-6 text-center w-full max-w-sm md:max-w-md font-semibold">
            {title}
          </h3>
          <p className="text-center w-full max-w-sm md:max-w-md">
            {description}
          </p>
          <div className="w-full max-w-sm md:max-w-md">{children}</div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-overlay transform-gpu transition-opacity duration-150 ' +
          (show ? 'z-[1000] visible opacity-100' : 'z-0 invisible opacity-0')
        }
        onClick={() => handler(false)}
      />
    </>
  );
}

Modal.defaultProps = {
  card: false
}