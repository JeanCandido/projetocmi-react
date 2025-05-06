import { Link } from "react-router-dom"

export default function BtnInfo() {

    return(<>
        <div className=' w-full align-middle text-center'>
            <p className='pb-4'>Conheça mais sobre nossos elevadores.</p>
            <Link to="/informacoes" className='bg-cmi-2 rounded p-4 '>Informações</Link>
        </div>
        </>
    )


}