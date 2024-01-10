import React from 'react'

export default function Card({nombre, estado}) {
    return (
        <div className='bg-gris p-5 rounded-lg shadow-lg mt-5'>
            <p>{nombre}</p>
            <p className='mt-2'>Estado actual:  
                
                <span className={` ${estado === 0 ? 'text-rojo' : 'text-verde'} font-bold`}>
                    {(estado) ? ' encendida': ' apagada'}
                </span>
            </p>
            <img className='w-[90%] mx-auto mt-5' src={`../img/pc-${(estado) ? 'encendida': 'apagada'}.png`} alt="" />
        </div>
    )
}
