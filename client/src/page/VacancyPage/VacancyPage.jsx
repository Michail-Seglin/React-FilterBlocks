import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import storage from '../storage/storage.json'
import style from './VacancyPage.module.scss'

function VacancyPage() {
    const { id } = useParams();

    const [cardInfo, setCardInfo] = useState({});

    function filtered() {
        const res = storage.filter((el) => el.id == id);
        setCardInfo(res[0]);
    }

    useEffect(() => { filtered() }, [])

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <h2>{cardInfo.header}</h2>
                    <div className={style.flex}>
                        <p className={style.salary}>{cardInfo.salary}</p>
                        <p className={style.point}>•</p>
                        <p>{cardInfo.time}</p>
                    </div>
                    <div className={style.map}>
                        <div className={style.img}></div>
                        <p>{cardInfo.city}</p>
                    </div>
                </div>
                <div className={style.info}>
                    <h2>Обязанности:</h2>
                    <ul className={style.responsibilities}>
                        {cardInfo.responsibilities ? cardInfo.responsibilities.map((el, index) => <li key={index}>{el}</li>) : null}
                    </ul>
                    <h2>Требования:</h2>
                    <ul className={style.requirements}>
                        {cardInfo.requirements ? cardInfo.requirements.map((el, index) => <li key={index}>{el}</li>) : null}
                    </ul>
                    <h2>Условия:</h2>
                    <ul className={style.conditions}>
                        {cardInfo.conditions ? cardInfo.conditions.map((el, index) => <li key={index}>{el}</li>) : null}
                    </ul>
                </div>
            </div>

        </>
    )
}
export default VacancyPage