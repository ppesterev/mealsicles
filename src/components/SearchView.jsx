import React from "react";
import PropTypes from "prop-types";

import MealList from "./MealList";

import * as shapes from "../shapes";

export default function SearchView({ dispatch, searchState }) {
  return (
    <div className="search-results">
      <h2>Search results for &quot;{searchState.term}&quot;:</h2>
      {searchState.results && (
        <MealList dispatch={dispatch} meals={searchState.results} />
      )}
    </div>
  );
}

SearchView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchState: shapes.searchState,
};
