import type { ReactNode } from "react";

const BlockQuote = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <blockquote className="blockquote">
        <q className="text-secondary-800 italic">{children}</q>
      </blockquote>
      <img className="my-8 rounded-xl" src="/images/single/quote-d.webp" alt="quoteImage" />
    </>
  );
};

export default BlockQuote;
