import React from 'react'
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';

const Search = ({isHome}) => {

    const inputStyle = classNames('main__input', {
        isHome,
    });
    return (
        <section className="main">
            <h2 className="main__title">¿Que quieres ver hoy?</h2>
            <input className={inputStyle} type="text" placeholder="Buscar..."/>
        </section>
    )
}

export default Search
