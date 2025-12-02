import { Link } from "react-router-dom";
import styles from "./CarCard.module.css";

const CarCard = ({ carro, onDelete }) => {
    return (
        <div className={styles.carCard}>
            <h3>{carro.marca} {carro.modelo}</h3>
            <p>Ano: {carro.ano}</p>
            <p>Cor: {carro.cor}</p>
            <p>Preço: R$ {carro.preco}</p>
            <p>Status: {carro.status}</p>
            <div className={styles.buttons}>
                <Link to={`/edit/${carro.id}`} className={styles.editBtn}>Editar</Link>
                <button onClick={() => onDelete(carro.id)} className={styles.deleteBtn}>Excluir</button>
            </div>
        </div>
    );
};

export default CarCard;
