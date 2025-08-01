import { useState } from 'react'
import style from '../Main/style.module.css'


export default function MainSection (){
    const [tag , _setTag] = useState<string []>(["인기태그 1" , "인기태그 2"]);
    const [law , _setLaw] = useState<string []>(["청년들을 위한 법안1" , "청년들을 위한 법안2" , "청년들을 위한 법안3"]);

    return(
        <>
            <div className={style.input}>
                <input className={style.inputSearch} type="search" name="" id="" placeholder='검색어 입력'/>
            </div>
                
            <div className={style.PopularityTag}>
                <p>
                    인기 태그
                </p>
                <div className={style.Tag}>                
                    {
                        tag.map((tag , index )=>{
                            return(
                                <div key={index}>
                                    <h1>
                                        {tag}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <h1>
                    2030 청년들을 위한 법안이예요(예시)
            </h1>
            <div className={style.Law}>
                {
                    law.map((law , index)=>{
                        return(
                            <div key={index}>
                                {law}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}