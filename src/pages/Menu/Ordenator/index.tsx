import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import options from "./options.json";
import styles from "./Ordenator.module.scss";

interface PropsOrdenator {
    order: string;
    setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenator({ order, setOrder }: PropsOrdenator) {
    const [isOpen, setIsOpen] = useState(false);
    const orderName = order && options.find((option) => option.value === order)?.nome;

    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: order !== "",
            })}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}>
            <span>{orderName || "Ordenar por:"}</span>
            {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles["ordenador__options--ativo"]]: isOpen,
                })}>
                {options.map((option) => (
                    <div
                        className={styles.ordenador__option}
                        key={option.value}
                        onClick={() => setOrder(option.value)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}
