import { FaXTwitter, FaGithub } from "react-icons/fa6";
const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-between px-2 md:px-5 mb-5 mx-5">
      <div className="subfooter-left flex flex-col md:flex-col px-2 md:px-5">
        <h1 className="title text-md md:text-xl font-semibold text-baseDark dark:text-baseWhite">
          Unconditional
          <span className="title text-xl md:text-2xl font-semibold text-accentPurple dark:text-accentPurple">
            .
          </span>
        </h1>
        <p className="text-transparent font-medium text-xs md:text-sm text-baseDark dark:text-accentPurple">
          © {year} All rights reserved.
        </p>
      </div>
      <div className="subfooter-right flex flex-col md:flex-col px-2 md:px-5">
        <ul className="text-sm md:text-md flex gap-2 md:gap-6 text-transparent ">
          <li>
            <a href="https://github.com/unconditionalday">
              <FaGithub size={40} color={`#9A63D1`} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/unconditionalday">
              <FaXTwitter size={40} color={`#9A63D1`} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
