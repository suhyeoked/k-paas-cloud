import { useState } from "react"
import style from '@/pages/menu/style.module.css'

export default function Card3 () {
    const [title , _setTitle] = useState<string[]>(["대제목1" , "대제목2" , "대제목3"])
    const [detail , _setDetail] = useState<string[]>(["내용1" , "내용2" , "내용3"]);
    return(
        <>
        {
            title.map((title,index)=>{
                return(
                    <div key={index} className={style.Detail}>
                        <h1 className={style.titleIndex}>
                            {title}
                        </h1>
                        <p>
                            {detail[index]}
                        </p>
                    </div>
                )
            })
        }
        </>
    )
}