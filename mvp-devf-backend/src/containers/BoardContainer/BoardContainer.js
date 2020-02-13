import React from 'react';
import { FixedCard } from '../../components/cards/FixedCard';

export const BoardContainer = () => {
    return (
        <section className="hero is-light is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-multiline">
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                        <FixedCard />
                    </div>                    
                </div>
            </div>
        </section>   
    )
}
