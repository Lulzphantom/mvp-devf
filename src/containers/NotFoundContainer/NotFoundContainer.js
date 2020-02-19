import React from 'react'
import { useParams } from 'react-router-dom'

export const NotFoundContainer = () => {

    const {endPoint} = useParams();

    return (
        <div>
            <section className="hero is-fullheight-with-navbar is-light is-bold">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        404 Not Found 😢
                    </h1>
                    <h2 className="subtitle">
                        La dirección <strong>'{endPoint}'</strong> no se encuentra.
                    </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}
