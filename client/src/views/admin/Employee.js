import React from "react";

// components

import EmployeeList from "components/Cards/EmployeeList.js";

export default function Employee() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <EmployeeList />
        </div>
      </div>
    </>
  );
}
