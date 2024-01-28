import "../css/Display.css";
function Display({ displayValaue }) {
  return (
    <input className="display" type="text" value={displayValaue} readOnly />
  );
}
export default Display;
