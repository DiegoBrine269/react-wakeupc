

import Card from "./Card"
import useSWR from "swr";
import clienteAxios from "./config/axios";
import Swal from 'sweetalert2'

function App() {

	const fetcher = () => clienteAxios('/api/obtener-estado').then(data => data.data[0])
	const {data, error, isLoading} = useSWR('/api/obtener-estado', fetcher, { refreshInterval: 1000 })

	const handleSubmit = async e => {
        e.preventDefault()

		try {
            const {data} = await clienteAxios.post('https://laravel-wakeupc-production.up.railway.app/api/registros')


            Swal.fire({
                title: 'Solicitud de encendido enviada',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'OK',
                allowOutsideClick: false
            })


        } catch (error) {
            Swal.fire({
				title: 'Error!',
				text: data.message,
				icon: 'error',
				confirmButtonText: 'Cool'
			  })
        }
	}


	if (!data) return 'Cargando...';

	let estadoPC = (data.estaPrendida) ? 1 : 0;

	return (
		<div className="container md:w-[30%] mx-auto p-4 font-montserrat">
			<h1 className="text-3xl font-bold">Wake-UPC</h1>
			<p className="text-lg">Bienvenido, Diego</p>

			<Card
				nombre='DESKTOP-JNOK0F9'
				estado={estadoPC}
			/>

			<form 
				action="" 
				className="mt-8"
				onSubmit={handleSubmit}
			>
				<button
					type="submit"
					className={`bg-azul text-white font-bold w-full py-3 rounded-md ${estadoPC === 1 ? 'cursor-not-allowed focus:outline-none disabled:opacity-75' : ''}`}
					disabled={estadoPC === 1}
				>
					Encender
				</button>
			</form>
		</div>
	)
}

export default App
