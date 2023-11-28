import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {
  hideTagline?: boolean;
}
export const Header: FunctionComponent<HeaderProps> = ({ hideTagline }) => {
  return (
    <header className="header flex flex-col md:py-5 align-bottom ml-5">
      {!hideTagline && (
        <h2 className="pl-1 subtitle text-left text-md md:text-xl text-baseDark dark:text-baseWhite">
          Just
        </h2>
      )}
      <Link href="/">
        <h1 className="title p-10 md:p-0 text-7xl md:text-8xl font-bold text-baseDark dark:text-baseWhite tracking-tighter">
          Unconditional
          <Link href="/about">
            <span className="ml-2 title text-8xl text-accentPurple">.</span>
          </Link>
        </h1>
      </Link>
    </header>
  );
};
