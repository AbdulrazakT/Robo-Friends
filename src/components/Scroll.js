const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        borderTop: "2px solid purple",
        padding: "20px",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
