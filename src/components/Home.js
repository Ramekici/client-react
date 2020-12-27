import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <nav> 
                <Link to="/users"> Kullanıcı </Link>
            </nav>
            Ana Sayfa
        </div>
    )
}
