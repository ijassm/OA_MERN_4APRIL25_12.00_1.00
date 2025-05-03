export const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            // console.log("INCREMENT triggered");
            return state + 1
        case "DECREMENT":
            // console.log("DECREMENT triggered");
            return state > 0 ? state - 1 : state
        case "RESET":
            // console.log("RESET triggered");
            return 0
        default:
            // console.log("default triggered");
            return state
    }
}