import { useState, useEffect } from "react";
import Item from "./Item";

import menuItens from "./itens.json";
import styles from "./Itens.module.scss";

interface ItensProps {
    search: string;
    filter: number | null;
    order: string;
}

export default function Itens(props: ItensProps){
    const [list, setList] = useState(menuItens);

    const {
        search, 
        filter,
        order
    } = props;

    useEffect(() => {
        function testSearch(title: string){
            const regex = new RegExp(search, 'i');
            return regex.test(title);
        }
    
        function testFilter(id:number){
            if(filter !== null) return filter === id;
            return true;
        }

        function sort(list : typeof menuItens){
            return order !== "" ? sortPropertyAscending(list, order as 'size' | 'serving' | 'price') : list;
        }

        function sortPropertyAscending(list : typeof menuItens,  property : 'size' | 'serving' | 'price'){
            return list.sort((a, b) => a[property] > b[property] ? 1 : -1);
        }

        const newList = menuItens.filter(item => testSearch(item.title) && testFilter(item.category.id));

        setList(sort(newList));
    },[filter, search, order])
    
    

    return (
        <div className={styles.itens}>
            {list.map(item => (<Item {...item} key={item.id} />))}
        </div>
    );
}