export const ADD_FIELD = "ADD_FIELD";
export const DELETE_FIELD = "DELETE_FIELD";
export const UPDATE_FIELD_TYPE = "UPDATE_FIELD_TYPE";
export const UPDATE_FIELD_NAME = "UPDATE_FIELD_NAME";
export const UPDATE_FLAG_TYPE = "UPDATE_FLAG_TYPE";
export const ADD_NESTED_FIELD = "ADD_NESTED_FIELD";
export const SAVE_DATA = "SAVE_DATA";

export const addField = () => ({
  type: ADD_FIELD,
});

export const deleteField = (fieldId) => ({
  type: DELETE_FIELD,
  payload: fieldId,
});

export const updateFieldType = (fieldId, fieldType) => ({
  type: UPDATE_FIELD_TYPE,
  payload: { fieldId, fieldType },
});

export const updateFlagType = (fieldId) => ({
  type: UPDATE_FLAG_TYPE,
  payload: fieldId,
});
export const updateFieldName = (fieldId, newName) => ({
  type: UPDATE_FIELD_NAME,
  payload: { fieldId, newName },
});

export const addNestedField = (fieldId, fieldType) => ({
  type: ADD_NESTED_FIELD,
  payload: { fieldId, fieldType },
});
