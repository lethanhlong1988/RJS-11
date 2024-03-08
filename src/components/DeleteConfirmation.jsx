import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onCancel, onRemove }) {
  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onRemove();
    }, TIMER);
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, [onRemove]);

  return (
    <div className="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button className="button-text" onClick={onCancel}>
          No
        </button>
        <button className="button" onClick={onRemove}>
          yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
