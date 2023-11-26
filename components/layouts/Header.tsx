import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {
  hideTagline?: boolean;
}
export const Header: FunctionComponent<HeaderProps> = ({ hideTagline }) => {
  return (
    <header className="header text-center flex flex-col p-0 md:p-10">
      {!hideTagline && (
        <h2 className="subtitle text-left text-md md:text-xl text-baseDark">
          Just
        </h2>
      )}
      <Link href="/">
        <h1 className="title p-10 md:p-0 text-3xl md:text-8xl font-bold text-baseDark tracking-tighter">
          Unconditional
          <Link href="/about">
            <span className="ml-2 title text-8xl text-accentPurple">.</span>
          </Link>
        </h1>
      </Link>
    </header>
  );
};
