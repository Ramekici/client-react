import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css';


const Card = (props) => {
    return (
        <div className="card_body">
            <div className="card_upper">
                <div className="image">
                    <img src={props.imageUrl}
                    alt="Kullanıcı Foto" className="image_foto"/>
                </div>
                <div className="card_items">
                    <div className="card_item"> <span className="text-muted"> Kullanıcı Adı :</span> {props.userName} </div>
                    <div className="card_item"><span className="text-muted"> Email :</span>  { props.email} </div>
                    <div className="card_item"> <span className="text-muted"> Adı ve Soyadı :</span> {props.name} {props.surName} </div>
                </div>
            </div>
            <div className="card_buttons"> 
                <button className="card_button"> Görüntüle </button>
                <button className="card_button" onClick = {() => props.deleteFonk(props.id)} > Sil </button>
                <Link to={`edit/${props.id}`} className="card_button" >
                    Düzenle
                </Link>
            </div>
        </div>
    )
}

export default Card;