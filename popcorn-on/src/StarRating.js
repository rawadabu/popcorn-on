const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const testStyle = {
  lineHeight: "1",
  magrin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  // Setting by default
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={testStyle}>{maxRating}</p>
    </div>
  );
}
