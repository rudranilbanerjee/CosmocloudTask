import {
  ADD_FIELD,
  DELETE_FIELD,
  UPDATE_FIELD_NAME,
  UPDATE_FIELD_TYPE,
  UPDATE_FLAG_TYPE,
  ADD_NESTED_FIELD,
  SAVE_DATA
} from "../actions/index";
import useTraverseTree from "../hooks/useTraverseTree";
const initialState = {
  fields: []
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD: {
      return {
        ...state,
        fields: [
          ...state.fields,
          {
            id: new Date().getTime().toString(),
            name: "addName",
            type: "string", // Default type is string
            flag: false,
            nestedFields: [] // Array to store nested fields for object type
          }
        ]
      };
    }
    case UPDATE_FIELD_NAME: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          const { changeName } = useTraverseTree();
          const { fieldId, newName } = action.payload;
          field = changeName(field, fieldId, newName);
          return field;
        })
      };
    }
    case UPDATE_FIELD_TYPE: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          const { changeType } = useTraverseTree();
          const { fieldId, fieldType } = action.payload;
          field = changeType(field, fieldId, fieldType);
          return field;
        })
      };
    }
    case UPDATE_FLAG_TYPE: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          const { changeFlag } = useTraverseTree();
          field = changeFlag(field, action.payload);
          return field;
        })
      };
    }
    case DELETE_FIELD: {
      const newArray = state.fields.filter((field) => {
        if (field.id !== action.payload) {
          const { deleteNode } = useTraverseTree();
          field.nestedFields = deleteNode(field.nestedFields, action.payload);
          return field;
        }
      });
      return {
        ...state,
        fields: newArray
      };
    }
    case ADD_NESTED_FIELD: {
      console.log("click nes");
      return {
        ...state,
        fields: state.fields.map((field) => {
          const { addNestedNode } = useTraverseTree();
          field = addNestedNode(field, action.payload.fieldId);
          return field;
        })
      };
    }
    case SAVE_DATA: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default fieldReducer;
