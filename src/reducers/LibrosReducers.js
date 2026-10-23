export const LibrosReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];

        case "delete":
            return state.filter((libro) => libro.id !== action.payload);

        case "update":
            return state.map((libro) =>
                libro.id === action.payload.id ? action.payload : libro
            );

        default:
            return state;
    }
};