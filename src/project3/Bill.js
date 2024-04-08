function Bill({ onAddHandlePay, bill }) {
  return (
    <div>
      <label>How much was your bill</label>
      <input
        name="bill"
        onChange={onAddHandlePay}
        placeholder="Bill Value"
        value={bill}
      />
    </div>
  );
}

export default Bill;
