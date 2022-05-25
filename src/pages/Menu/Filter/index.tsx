import classNames from "classnames";

import filters from "./filters.json";
import styles from "./Filter.module.scss";

type IOption = typeof filters[0];

interface FilterProps {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({filter, setFilter}: FilterProps) {

    function selectFilter(option : IOption){
        if(option.id === filter) return setFilter(null);
        return setFilter(option.id);
    }

    return (<div className={styles.filtros}>
        {filters.map( (option) => (
            <button 
                className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles["filtros__filtro--ativo"]]: filter === option.id,
                })} 
                key={option.id} 
                onClick={() => selectFilter(option)}
            >
                {option.label}
            </button>
        ))}
    </div>)
}