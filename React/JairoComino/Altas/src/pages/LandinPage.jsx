import React from 'react'
import Titulo from '../components/Titulo'
import NoticiaPrinci from '../components/NoticiaPrinci'
import NotiTarjet from '../components/NotiTarjet'

function LandinPage() {
  return (
    <>
    <Titulo/>
    <NoticiaPrinci/>
    <NotiTarjet/>

    <img 
        src="https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/nota_prensa/El-cumplimiento-de-los-limites-de-velocidad-objetivo-de-las-policias-de-trafico-de-Europa/campana_cumplimiento-home.jpg" 
        alt="" 
        className="mx-auto rounded-lg m-6 w-3/4"
    />
  <div className="flex justify-center m-8">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded block mx-auto text-xl">
        Acceder
    </button>
</div>

    </>
  )
}

export default LandinPage