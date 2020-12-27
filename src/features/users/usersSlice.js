import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users:[],
    completed:false,
    errors: null,
    updateItem: null
  },
  reducers: {
    setInitial:(state) => {
      state.completed =false;
      state.errors = null;
      state.updateItem = null;
    },
    setUpdateItem:(state, action) => {
      state.updateItem = state.users.find(item => item._id === action.payload)
    },
    setUserRedux: (state, action) => {
      state.users = action.payload;
    },
    setCompleted:(state) => {
      state.completed =true;
      state.updateItem = null;
    },
    setDataFailed:(state, action) => {
      state.completed =false;
      state.errors = action.payload;
    },
  },
});

export const { setInitial, setUserRedux, setCompleted, setDataFailed, setUpdateItem} = userSlice.actions;

export const getUsers = () =>  dispatch => {
   fetch('http://localhost:3002/users')
   .then(resp => resp.json())
   .then(data => dispatch(setUserRedux(data)))
  
};

export const addUsers = (data) => async dispatch => {
  try{
      await fetch(`http://localhost:3002/users/add`,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
      dispatch(setCompleted())
      dispatch(getUsers())
    }catch(err){
      dispatch(setDataFailed(err))
}
};

export const deleteUsers = (id) => async dispatch => {
   await fetch(`http://localhost:3002/users/${id}/delete`);
   dispatch(getUsers())
};

export const updateUsers = (id, data) => async dispatch => {
  try{
   await fetch(`http://localhost:3002/users/${id}/edit`,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
  dispatch(setCompleted())
  dispatch(getUsers())
  }catch(err){
    dispatch(setDataFailed(err))
  }
};

export const selectUsers = state => state.users;

export default userSlice.reducer;
