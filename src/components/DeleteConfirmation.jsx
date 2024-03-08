export default function DeleteConfirmation({ onCancel, onRemove }) {
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
    </div>
  );
}
