import React, {useEffect, useState } from 'react';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {selectUsers, addUsers, updateUsers} from '../features/users/usersSlice';
import InputText from './UI/InputText';

export default function Edit() {


    let match = useRouteMatch("/create");
    let { id } = useParams();
    let history = useHistory();

    const dispatch = useDispatch();

    const userRedux = useSelector(selectUsers);
    const {users} = userRedux;

    const [editIn, setEditIn] = useState({imageUrl:'', userName: '', 
    email: '', name:'', lastName:'', birthDate:'', description:'' })
    const { imageUrl, userName, 
    email, name, lastName, birthDate, description} = editIn;

    useEffect(() => {
        const data = users.find(item => item._id === id)
        if (data) {
            setEditIn({
                imageUrl:data.IMGURL, 
                userName: data.USERNAME, 
                email: data.EMAIL,
                name: data.FIRSTNAME,
                lastName: data.LASTNAME,
                birthDate: data.BIRTHDATE,
                description: data.DESCRIPTION

             })
        }
    }, [id,users])
    

    const onChangeHandler = (name) => (e) => {
        setEditIn({ ...editIn, [name]: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const payload = {
            IMGURL: imageUrl, 
            USERNAME: userName,
            EMAIL:email,
            FIRSTNAME: name,
            LASTNAME: lastName,
            BIRTHDATE: birthDate,
            DESCRIPTION: description

        }
        if(match) {
            dispatch(addUsers(payload)).then(resp => {
                history.push("/users");
            })
        }else {
            dispatch(updateUsers(id, payload)).then(resp => {
                history.push("/users");
            })
        }
    }

    return (
        <div className="container mt-5">
            <div className="row text-center text-gray mb-3">
                <div className="col-12">
                    {id ? "Kullanıcı Güncelleme": "Kullanıcı Oluştur"}
                </div>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="row no-gutters" 
                style={{ justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
                    <InputText
                        label="ImageUrl"
                        id="imageUrl"
                        type="url"
                        value={imageUrl}
                        onChangeHandler={onChangeHandler('imageUrl')}
                    />
                    <InputText
                        label="UserName"
                        id="userName"
                        type="text"
                        value={userName}
                        onChangeHandler={onChangeHandler('userName')}
                    />
                    <InputText
                        label="Email"
                        id="email"
                        value={email}
                        type="email"
                        onChangeHandler={onChangeHandler('email')}
                    />
                    <InputText
                        label="First Name"
                        id="name"
                        value={name}
                        type="text"
                        onChangeHandler={onChangeHandler('name')}
                    />
                    <InputText
                        label="Last Name"
                        id="lastName"
                        value={lastName}
                        type="text"
                        onChangeHandler={onChangeHandler('lastName')}
                    />
                    <InputText
                        label="Birth Date"
                        id="birthDate"
                        value={birthDate}
                        type="text"
                        onChangeHandler={onChangeHandler('birthDate')}
                    />
                    <InputText
                        label="Description"
                        id="description"
                        value={description}
                        type="text"
                        onChangeHandler={onChangeHandler('description')}
                    />
                    <div className="col-lg-6 d-flex mt-3"  style={{justifyContent:"flex-end"}}>
                        <button className="card_button" type="submit"> {id ? "Güncelle" :"Kaydet"}</button>
                    </div>
                </div>   
            </form>





        </div>
    )
}
