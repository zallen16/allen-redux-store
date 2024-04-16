function Jumbotron({ children }) {
  return (
    <Provider
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      {...children}
    />
  );
}

export default Jumbotron;
