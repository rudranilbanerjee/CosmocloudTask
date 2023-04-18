import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  deleteField,
  updateFieldType,
  updateFlagType,
  updateFieldName,
  addNestedField,
} from "../actions/index";
const FieldForm = ({ fields }) => {
  console.log(fields, "ihuubgu");
  const dispatch = useDispatch();
  // const [show,setShow] = useState(false);
  // Function to handle editing the field name
  const handleEditName = (e, fieldIndex) => {
    const fieldName = e.target.value;
    dispatch(updateFieldName(fieldIndex, fieldName));
  };

  // Function to handle editing the field type
  const handleEditType = (e, fieldIndex) => {
    const fieldType = e.target.value;
    dispatch(updateFieldType(fieldIndex, fieldType));
  };

  // Function to handle toggleing the required type
  const handleEditFlag = (idx) => {
    console.log(idx);
    dispatch(updateFlagType(idx));
  };

  //Function to handle adding a nested field for object type
  const handleAddNestedField = (fieldIndex, type) => {
    dispatch(addNestedField(fieldIndex, type));
  };

  // Function to handle deleting the field
  const handleDeleteField = (fieldIndex) => {
    dispatch(deleteField(fieldIndex));
  };
  // const handleShow = () => {
  //   setShow(true);
  // };
  // const handleOffShow=()=>{
  //   setShow(false);
  // }
  return (
    <>
      {fields.map((field) => {
        return (
          <div className="block" key={field.id}>
            <div className="field">
              {/* Render input for field name */}
              <input
                type="text"
                value={field.name}
                onChange={(e) => handleEditName(e, field.id)}
              />
              {/* Render select for field type */}
              <select
                value={field.type}
                onChange={(e) => handleEditType(e, field.id)}
              >
                <option value="number">Number</option>
                <option value="string">String</option>
                <option value="boolean">Boolean</option>
                <option value="object">Object</option>
              </select>
              {/* Render button to add nested field for object type */}
              <div className="addiInfo">
                {field.type === "object" && (
                  <button
                    onClick={() => handleAddNestedField(field.id, field.type)}
                  >
                    +
                  </button>
                )}
                <span>
                  Required
                  <button onClick={() => handleEditFlag(field.id)}>
                    {field.flag ? <BsToggleOn /> : <BsToggleOff />}
                  </button>
                </span>
                {/* Render button to delete the field */}
                <button onClick={() => handleDeleteField(field.id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
            {/* Render nested fields for object type */}
            {field.type === "object" && (
              <div className="nested">
                {<FieldForm fields={field.nestedFields} />}
              </div>
            )}
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default FieldForm;
