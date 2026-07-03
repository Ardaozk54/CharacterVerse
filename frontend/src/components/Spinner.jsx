function Spinner() {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #e0e0e0",
        borderTop: "4px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "40px auto",
      }}
    ></div>
  );
}

export default Spinner;