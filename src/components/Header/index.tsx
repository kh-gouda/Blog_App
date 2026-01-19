import { Link } from "react-router";
import Logo from "../../assets/images/Logo.png";
import SearchForm from "../SearchForm";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

const Header = () => {
  const { handleHomeNavigation } = useContext(PostsContext);

  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <Link to="/" className="home-link" onClick={handleHomeNavigation}>
        Home
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
