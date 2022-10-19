import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../types/userSliceTypes";

const initialState: IUserState = {
    user_id: '',
    user_email: '',
    user_username: '',
    user_password: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser_id: (state, action: PayloadAction<string>) => { state.user_email = action.payload },
        updateEmail: (state, action: PayloadAction<string>) => { state.user_email = action.payload },
        updatePassword: (state, action: PayloadAction<string>) => { state.user_password = action.payload },
        updateUsername: (state, action: PayloadAction<string>) => { state.user_username = action.payload },
    }
})

export const { updateEmail, updatePassword, updateUser_id, updateUsername} = userSlice.actions;
export default userSlice.reducer; 