import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <div className="banner">
            <Link to='/'>
                <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
                <h2 className="banner-header">К весне готовы!</h2>
            </Link>
        </div>
    )
}
