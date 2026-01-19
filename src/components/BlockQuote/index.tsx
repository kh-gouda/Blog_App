import type { ReactNode } from "react";
import quoteImage from "../../assets/images/single/quote-d.webp";

const BlockQuote = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <blockquote className="blockquote">
        <q className="text-secondary-800 italic">{children}</q>
      </blockquote>
      <img className="my-8 rounded-xl" src={quoteImage} alt="quoteImage" />
    </>
  );
};

export default BlockQuote;
