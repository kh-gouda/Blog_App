import { useEffect, useState } from "react";
import type { PostAutherTypes } from "../../types";

const PostAuthor = ({ parent, postAuthor, datePublished }: PostAutherTypes) => {
  const [authorImage, setAuthorImage] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        /* @vite-ignore */ `${postAuthor.image}`
      );
      setAuthorImage(imageModule.default);
    };
    loadImage();
  }, [postAuthor.image]);

  return (
    <div
      className={`post-author-main ${
        parent === "card" ? "post-author-card" : "post-author-details"
      }`}
      data-testid="post-author"
    >
      {authorImage && (
        <img
          className="h-9 w-9 rounded-full"
          src={authorImage}
          alt="authorImage"
        />
      )}
      <span className="ml-2 max-[400px]:ml-0">{postAuthor.name}</span>
      <span className="ml-auto max-[400px]:ml-0">{datePublished}</span>
    </div>
  );
};

export default PostAuthor;
