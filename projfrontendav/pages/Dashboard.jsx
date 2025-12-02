import { useEffect, useMemo, useState } from "react";
import './Dashboard.module.css'

const Dashboard = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("http://localhost:3000/carros");
            const data = await res.json();
            setCarros(data);
        }
        load();
    }, []);

    const stats = useMemo(() => {
        const disponiveis = carros.filter(c => c.status === "disponível").length;
        const vendidos = carros.filter(c => c.status === "vendido").length;
        const receita = carros.filter(c => c.status === "vendido").reduce((acc, c) => acc + Number(c.preco || 0), 0);

        return { disponiveis, vendidos, receita };
    }, [carros]);
    
    return (
        <div>
            <h1>Dashboard</h1>

            <p>Carros disponíveis: {stats.disponiveis}</p>
            <p>Carros vendidos: {stats.vendidos}</p>
            <p>Receita total: R$ {stats.receita}</p>
        </div>
    );
};

export default Dashboard;