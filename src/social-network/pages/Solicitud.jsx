import { useParams, useSearchParams } from "react-router-dom"
const Solicitud = () => {
    let { id } = useParams();
    let [searchParams] = useSearchParams();
    return <div>
        <h2>Página de Solicitud # {id}</h2>
        El nombre es {searchParams.get("name")}
    </div>
}

export default Solicitud