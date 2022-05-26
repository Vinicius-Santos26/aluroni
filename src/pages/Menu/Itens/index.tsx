import Item from "./Item";

import menuItens from "./itens.json";
import styles from "./Itens.module.scss";

export default function Itens(){
    return (
        <div className={styles.itens}>
            {menuItens.map(item => (<Item {...item} key={item.id} />))}
        </div>
    );
}