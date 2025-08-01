import { useState } from "react"
import style from '@/pages/menu/style.module.css'


export default function Card1 () {
    const [title , setTitle] = useState<string[]>(["대제목1" , "대제목2" , "대제목3"])
    const [detail , setDetail] = useState<string[]>(["내용1입니다" , "내용2" , "내용3"]);
    return(
        <>
        {
            title.map((title,index)=>{
                return(
                    <div className={style.Detail}>
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