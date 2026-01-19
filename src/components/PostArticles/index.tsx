import type { PostArticlesTypes } from "../../types";
import AdsArea from "../AdsArea";
import BlockQuote from "../BlockQuote";
import PostParagraph from "../PostParagrapgh";
import PostTitle from "../PostTitle";

const PostArticles = ({ postArticles }: PostArticlesTypes) => {
  return (
    <>
      {postArticles.map((article) => (
        <article key={crypto.randomUUID()}>
          {article.title === "quote" ? (
            <>
              <BlockQuote>{article.quote}</BlockQuote>
              <AdsArea />
            </>
          ) : (
            <>
              <PostTitle type="h3" postTitle={article.title} />
              {article.paragraphs?.map((para) => (
                <PostParagraph key={crypto.randomUUID()}>{para}</PostParagraph>
              ))}
            </>
          )}
        </article>
      ))}
    </>
  );
};

export default PostArticles;
