import React from 'react'
import '../assets/styles/components/Search.scss';

const Search = () => {
    return (
        <section className="main">
            <h2 className="main__title">¿Que quieres ver hoy?</h2>
            <input className="main__input" type="text" placeholder="Buscar..."/>
        </section>
    )
}

export default Search
