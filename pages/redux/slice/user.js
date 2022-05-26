import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        mobile: '',
    },
    reducers: {
        addUserSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { addUserSlice } = user.actions
export default user.reducer