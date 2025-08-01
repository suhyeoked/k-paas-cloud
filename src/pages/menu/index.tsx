import React, { useState } from 'react';
import NavBar from '@/component/NavBar/NavBar';
import style from '@/pages/menu/style.module.css'
import Card1 from './component/Card/Card1';
import Card2 from './component/Card/Card2';
import Card3 from './component/Card/Card3';

const MenuPage = () => {
    const [laws , setLaws] = useState(0)
    const tabLaws = [
        { title: '최근 공포된 법안', content: <Card1 /> },
        { title: '최근 시행된 법안', content: <Card2 /> },
        { title: '시행 예정안 법안', content: <Card3 /> },
      ];
    return (
        <>
            <NavBar />
            <ul className={style.Laws}>
            {
                tabLaws.map((tab, i) => (
                    <li
                        key={i}
                        className={i === laws ? style.active : ''}
                        onClick={() => setLaws(i)}
                        >
                        {tab.title}
                    </li>
                ))
            }
            </ul>
            <div className={style.tabLaws}>
                {tabLaws[laws]?.content}
            </div>
        </>
    )
};


export default MenuPage;