import {
  SNavBurgerIcon,
  SNavButtonBurger,
  SNavButtonSearch,
  SNavSearchIcon,
  SNavTitleIcon,
  SNavbar,
} from './styled';

const Navbar = ({ onNavbarSearch }: { onNavbarSearch: () => void }) => {
  return (
    <SNavbar className="navbar">
      <SNavButtonBurger className="navbar-burgermenu-button">
        <SNavBurgerIcon className="navbar-burger-icon"></SNavBurgerIcon>
      </SNavButtonBurger>
      <SNavTitleIcon className="navbar-title"></SNavTitleIcon>
      <SNavButtonSearch
        className="navbar-search-button"
        onClick={onNavbarSearch}
      >
        <SNavSearchIcon className="navbar-search-icon"></SNavSearchIcon>
      </SNavButtonSearch>
    </SNavbar>
  );
};

export default Navbar;
