import { FunctionComponent } from "react";
import Head from "next/head";
import Footer from "./Footer";
import { Header } from "./Header";
import SearchForm from "../SearchForm";
import { useRouter } from "next/router";
import { GeistSans } from "geist/font/sans";

interface LayoutProps {
  children: React.ReactNode;
  hideSearchBar?: boolean;
  hideTagLine?: boolean;
  isMobile: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  hideSearchBar,
  hideTagLine,
  isMobile,
}) => {
  const router = useRouter();

  const onSubmitted = (query: string) => {
    router.push({
      pathname: `/search/${query}`,
    });
  };

  return (
    <>
      <Head>
        <title>Unconditional.</title>
        <meta name="description" content="Unconditional" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`flex flex-col h-screen bg-baseWhite dark:bg-baseDark ${GeistSans.className}`}
      >
        <div className="flex flex-col md:flex-row lg:flex-row mobile items-center py-5 px-10">
          <div className="flex flex-grow ">
            <Header hideTagline={hideTagLine || isMobile} />
          </div>
          <div className="flex items-end h-full md:py-6">
            {!hideSearchBar && <SearchForm onSubmitted={onSubmitted} />}
          </div>
        </div>
        <div className="rounded-md h-0.5 w-4/5 mx-auto bg-baseDark dark:bg-baseWhite"></div>

        <main className="m-auto overflow-y-scroll md:overflow-y-visible">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
