import React from "react";
import PrimaryButton from "../../components/reusableUi/PrimaryButton";
import { NavLink } from "react-router-dom";

export default function History() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[660px] flex justify-between items-center mt-10 bg-white rounded-lg shadow-lg p-3">
        <span>You don't have conversation on your local storage</span>
        <NavLink to="/analyzer">
          <PrimaryButton label="New one" />
        </NavLink>
      </div>
    </div>
  );
}
