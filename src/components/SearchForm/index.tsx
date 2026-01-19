import { useContext, useRef, type FormEvent } from "react";
import searchIcon from "../../assets/images/search-outline.png";
import { useNavigate } from "react-router";
import { PostsContext } from "../../contexts/PostsContext";

const SearchForm = () => {
  const { handleSearch } = useContext(PostsContext);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRef.current?.value) {
      handleSearch(searchRef.current.value);
      searchRef.current.value = "";
      navigate("/");
    }
  };

  return (
    <form
      className="relative w-41.5"
      data-testid="search-form"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-secondary-100 w-full rounded-[5px] p-2 pl-4"
        ref={searchRef}
        type="text"
        placeholder="Search..."
        name="search"
        id="search"
      />
      <img
        className="absolute top-2 right-2 translate-0.5 cursor-pointer"
        src={searchIcon}
        alt="Search"
        onClick={(e) =>
          handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
        }
      />
    </form>
  );
};

export default SearchForm;
