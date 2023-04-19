import FieldForm from "./FieldForm";
import { useSelector, useDispatch } from "react-redux";
import { addField } from "../actions/index";
const FromContainer = () => {
  const { fields } = useSelector((state) => state.fieldReducer);
  const dispatch = useDispatch();
  console.log(fields);
  return (
    <>
      <div className="display">
        <h3>Field Name And Type</h3>
        {/* Render a button to add a new field */}
        <button onClick={() => dispatch(addField())}>Add Field +</button>
      </div>
      <div>
        {/* Render the list of fields */}
        <FieldForm fields={fields} />
      </div>
    </>
  );
};
export default FromContainer;
