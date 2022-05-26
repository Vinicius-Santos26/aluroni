import { useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Ordenator from "./Ordenator";
import Itens from "./Itens";

import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa.</div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Search search={search} setSearch={setSearch} />
                <div className={styles.cardapio__filtros}>
                    <Filter filter={filter} setFilter={setFilter} />
                    <Ordenator order={order} setOrder={setOrder} />
                </div>
                <Itens />
            </section>
        </main>
    );
}
