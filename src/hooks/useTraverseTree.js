const useTraverseTree = () => {
  const addNestedNode = (field, fieldId) => {
    if (field.id === fieldId && field.type === "object") {
      field.nestedFields.push({
        id: new Date().getTime().toString(),
        name: "addName",
        type: "string", // Default type is string
        flag: false,
        nestedFields: [] // Array to store nested fields for object type
      });
      return field;
    }
    // if fieldNode can find in top level then this condition will
    // be true but if it's not find then its going to DFS search of
    // tree by the below recurssive call
    let latestArray = [];
    latestArray = field.nestedFields.map((obj) => {
      return addNestedNode(obj, fieldId);
    });
    return { ...field, nestedFields: latestArray };
  };
  const changeType = (field, fieldId, fieldType) => {
    if (field.id === fieldId) {
      field.type = fieldType;
      return field;
    }
    let latestArray = [];
    latestArray = field.nestedFields.map((obj) => {
      return changeType(obj, fieldId, fieldType);
    });
    return { ...field, nestedFields: latestArray };
  };
  const changeName = (field, fieldId, newName) => {
    if (field.id === fieldId) {
      field.name = newName;
      return field;
    }
    let latestArray = [];
    latestArray = field.nestedFields.map((obj) => {
      return changeName(obj, fieldId, newName);
    });
    return { ...field, nestedFields: latestArray };
  };
  const changeFlag = (field, fieldId) => {
    if (field.id === fieldId) {
      field.flag = !field.flag;
      return field;
    }
    let latestArray = [];
    latestArray = field.nestedFields.map((obj) => {
      return changeFlag(obj, fieldId);
    });
    return { ...field, nestedFields: latestArray };
  };
  const deleteNode = (fields, fieldId) => {
    const newArray = fields.filter((field) => {
      if (field.id !== fieldId) {
        field.nestedFields = deleteNode(field.nestedFields, fieldId);
        return field;
      }
    });
    return newArray;
  };
  return { addNestedNode, changeType, changeName, changeFlag, deleteNode };
};
export default useTraverseTree;
