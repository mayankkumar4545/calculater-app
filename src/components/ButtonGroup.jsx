import "../css/ButtonGroup.css";
function ButtonGroup({ handleButton }) {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-group">
      {buttonNames.map((name, id) => {
        return (
          <button
            key={id}
            className="button"
            onClick={() => handleButton(name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
export default ButtonGroup;
