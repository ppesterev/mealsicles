import React from "react";
import PropTypes from "prop-types";

import SelectionOptionsList from "./SelectionOptionsList";

import * as shapes from "../shapes";

export default function CategoriesView({ dispatch, selectionTypes }) {
  return (
    <SelectionOptionsList {...{ dispatch, selectionTypes }} type="categories" />
  );
}

CategoriesView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectionTypes: PropTypes.shape({
    categories: PropTypes.arrayOf(shapes.category),
  }),
};
