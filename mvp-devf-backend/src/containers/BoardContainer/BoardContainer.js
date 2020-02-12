import React from 'react';
import { FixedCard } from '../../components/cards/FixedCard';

export const BoardContainer = () => {
    return (
        <section className="hero is-light is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-multiline">
                        <FixedCard title='Administrador web' description='Hosting, woocomerce y mas' icon='fas fa-laptop'/>
                        <FixedCard title='Email marketing' description='Google, hotmail ...' icon='fas fa-mail-bulk'/>
                        <FixedCard title='CMR' description='customer relationship management' icon='fas fa-users-cog'/>
                        <FixedCard title='Redes sociales' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Analitica' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Publicidad online' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Marketplace' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Informes de gestion' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Mensajeria' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Contabilidad' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Estrategia marketing' description='test' icon='fas user-ninja'/>
                        <FixedCard title='Capacitacion' description='test' icon='fas user-ninja'/>
                    </div>                    
                </div>
            </div>
        </section>   
    )
}
