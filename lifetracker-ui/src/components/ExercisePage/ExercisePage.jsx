import React from "react";

export default function ExercisePag({ navbar }) {
  return (
    <>
      {navbar ? (
        <div>
          <h1>hey</h1>
        </div>
      ) : (
        <div>
          <h1>Sign in to view Exercise data</h1>
        </div>
      )}
    </>
  );
}
