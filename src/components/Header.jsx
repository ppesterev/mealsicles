import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import { useMatchMedia } from "../hooks/use-match-media";

function Header({ dispatch }) {
  const isNarrowScreen = useMatchMedia("(max-width: 500px)");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <header
      className={`app-header${isSearching ? " app-header--searching" : ""}`}
    >
      <h1
        className={`app-header__heading${
          isNarrowScreen && isSearching ? " visually-hidden" : ""
        }`}
      >
        <Link to="/">Mealsicles</Link>
      </h1>
      <SearchForm
        dispatch={dispatch}
        isCompact={isNarrowScreen}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
    </header>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default React.memo(Header);
