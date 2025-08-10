import NavBar from "@/component/NavBar/NavBar"
import style from "@/pages/LawFinder/style.module.css"
import { useState } from "react"
const LawFinder = () =>{
    const [law , _setLaw] = useState<string []>(["정가결제 금액 인상 시 소비다 동의 의무화" , "청소년 신분증 도용시 사업자 행정처분 면제" , "체육시설 휴업 폐업 시 회원에게 사전 통보 의무화"])
    const [lawDetail , _setLawDetail ] = useState<string []>(new Array(law.length).fill("내용이 들어가야 하는데 그건 나중에 백엔드 연동시.."))
    return (
        <>
            <NavBar />
            <div className={style.LawFinderMain}>
                <div className={style.LawFinderMainLeft}>
                    <h1>
                        최근 공포된 법안
                    </h1>
                    <div>
                        <ul>
                            <li>최근 시행된 법안</li>
                            <li>시행 예정인 법안</li>
                        </ul>
                    </div>
                </div>
                <div className={style.LawFinderMainRight}>
                    <h1>법안 불러보기</h1>
                    <p>
                        공포 시행 법인부터 판례까지, 통합 검색으로 한 번에!
                    </p>
                </div>
            </div>
            <div className={style.LawFinderFooter}>
                {
                    law.map((law , i) =>{
                        return(
                            <div key={i}>
                                <div className={style.LawFinderFooterLaw}>
                                    {law}
                                </div>
                                <div className={style.LawFinderFooterDetail}>
                                    {lawDetail[i]}
                                </div>
                            </div>
                            
                        ) 
                    })
                }
            </div>
        </>
    )
}

export default LawFinder