import { Link } from "react-router";
import SearchForm from "../SearchForm";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

const Header = () => {
  const { handleHomeNavigation } = useContext(PostsContext);

  return (
    <header className="header">
      <img src="/images/Logo.png" alt="Logo" />
      <Link to="/" className="home-link" onClick={handleHomeNavigation}>
        Home
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
