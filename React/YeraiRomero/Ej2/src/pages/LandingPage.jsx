import React from 'react';
import Title from '../components/Title';
import NoticiasContainer from '../components/NoticiasContainer';

const LandingPage = () => {
  return (
    <section className='landing'>
      <Title title="Bienvenido a la DGT" />
      <div>
        <h2>TODO: noticia princp</h2>
      </div>
      <NoticiasContainer />
    </section>
  )
}

export default LandingPage;