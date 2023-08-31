import React, { useState } from "react";
import { Input, Button, Pagination } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react';
import style from './jobPage.module.scss'
import { Link } from 'react-router-dom'
import card from '../storage/storage.json'


function JobPage() {

    const [currentPage, setCurrentPage] = useState(1);

    const size = 10;
    const lastIndex = currentPage * size;
    const firstIndex = lastIndex - size;
    const currentCard = card.slice(firstIndex, lastIndex);

    return (
        <>
            <div className={style.wrapper}>

                <Input icon={<IconSearch />}
                    placeholder="Введите название вакансии
                " rightSection={<Button>Поиск</Button>}
                />
                <div>{currentCard.map((el, index) =>
                    <Link to={`/vacancy/${el.id}`} key={index}>
                        <div className={style.item} key={index} >

                            <h2>{el.header}</h2>

                            <div className={style.flex}>
                                <p className={style.salary}>{el.salary}</p>
                                <p className={style.point}>•</p>
                                <p>{el.time}</p>
                            </div>

                            <div className={style.map}>
                                <div className={style.img}></div>
                                <p>{el.city}</p>
                            </div>
                        </div>
                    </Link>
                )}
                </div>
            </div>

            <Pagination
                total={Math.ceil(card.length / size)}
                position="center"
                style={{ marginTop: "40px" }}
                onChange={(card) => setCurrentPage(card)}
            />


        </>
    )
}



export default JobPage