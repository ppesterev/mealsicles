import React from "react";
import PropTypes from "prop-types";

function MotdBadge(props) {
  return (
    <span
      className={`"motd-badge" ${props.className || ""}`}
      title="Featured meal of the day"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
      <span className="visually-hidden">Meal of the day!</span>
    </span>
  );
}

MotdBadge.propTypes = {
  className: PropTypes.string
};

export default MotdBadge;
