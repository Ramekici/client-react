import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, selectUsers, deleteUsers} from '../features/users/usersSlice';
import Card from './UI/Cards';

const Users = () =>  {

    const dispatch = useDispatch();
    const dataRedux = useSelector(selectUsers);

    const dataLoad = useCallback(
        () => dispatch(getUsers()),
        [dispatch],
    )

    useEffect(()=>{
        dataLoad()
    },[dataLoad])

    const deleteHandler = (id) => {
        dispatch(deleteUsers(id))
    }

    


    return (
        <div className="container mt-5">
            {dataRedux.users.length > 0 ? 
            dataRedux.users.map(item => {
                return <Card 
                        key={item._id}
                        id={item._id}
                        userName= {item.USERNAME}
                        email= {item.EMAIL}
                        name = {item.FIRSTNAME}
                        surName = {item.LASTNAME}
                        imageUrl = {item.IMGURL}
                        deleteFonk = {deleteHandler} 
                        
                />
            }): 
            null}
        </div>
    )
}

export default Users;

