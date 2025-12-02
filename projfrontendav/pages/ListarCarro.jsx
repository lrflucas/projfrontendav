import { useEffect, useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";
import './ListarCarro.module.css'

const ListarCarro = () => {
    const [carros, setCarros] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        async function loadCarros() {
            const res = await fetch("http://localhost:3000/carros");
            const data = await res.json();
            setCarros(data);
        }
        loadCarros();
    }, []);

    const filtrados = useMemo(() => {
        return carros.filter(carro =>
            `${carro.marca} ${carro.modelo} ${carro.ano} ${carro.cor}`
            .toLowerCase()
            .includes(busca.toLowerCase())
        );
    }, [busca, carros]);

    async function handleDelete(id) {
    if (!window.confirm("Tem certeza que deseja excluir?")) return;

    try {
        await fetch(`http://localhost:3000/carros/${id}`, { method: "DELETE" });
        setCarros(prev => prev.filter(carro => carro.id !== id));
    } catch {
        alert("Erro ao excluir.");
    }
}


    return (
        <div>
            <h1>Lista de carros</h1>

            <input placeholder="Buscar..." value={busca} onChange={e => setBusca(e.target.value)} />

            {filtrados.length === 0 ? (
                <p>Nenhum carro encontrado.</p>
            ) : (
                filtrados.map(carro => (
                    <CarCard 
                    key={carro.id}
                    carro={carro}
                    onDelete={handleDelete}/>
                ))
            )}
        </div>
    );
};

export default ListarCarro;