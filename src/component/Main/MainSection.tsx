import { useState } from 'react'
import style from '../Main/style.module.css'
import Image from 'next/image';

export default function MainSection (){
    const [tag , _setTag] = useState<string []>(["#근로계약" , "#실업급여" , "#주거지원" , "#청년내일채움공채" , "#최저 임금" , "#전세사기" , "#임대차 계약" , "#인턴"]);
    const [law , _setLaw] = useState<string []>(["근로 기준법" , "한국장학재단법" , "청년복지 지원법"]);
    const [lawDetail , _setLawDetail] = useState<string []>(["알바도 퇴직금 받을 수 있을까요?" , "등록금 걱정 덜 수 있어요." , "매달 10만원이면, 정부가 도와줘요."]);


    return(
        <>
            <div className={style.MainInput}>
                <div className={style.MainLeft}>
                    <h1>
                        LawColumn
                    </h1>
                    <p>
                        청년의 오늘에 꼭 필요한 법률 정보만 모았습니다.
                    </p>
                </div>
                <div className={style.MainRight}>
                    <div className={style.input}>
                        <input className={style.inputSearch} type="search" name="" id="" placeholder='어떤 법안을 찾으시나요?' />
                        <button className={style.inputButton}>
                            검색
                        </button>
                        <Image className={style.img} src="/Balance-scale.png" alt="Balance-scale" width={80} height={100}/>
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
                    </div>
            </div>
            <div className={style.footerSection}>
                <div>
                    <h1>
                        요즘
                        <span>
                            청년이 자주 보는 법안
                        </span>
                        이에요!
                    </h1>
                    <div className={style.footerSectionLaw}>
                        {
                            law.map((law , i)=>{
                                return(
                                    <div className={style.footerLaw} key={i}>
                                        <div className={style.footerLawH1}>
                                            <h1>
                                                {law}
                                            </h1>
                                        </div>
                                        <h2>
                                            {lawDetail[i]}
                                        </h2>
                                        <ul className={style.footerLawFooter}>
                                            <li>요약보기</li>
                                            <li className={style.centerLineVertical}></li>
                                            <li>원문보기</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h1>
                        <span>
                            청년을 위한 법안
                        </span>
                        만 보고 싶다면 ? <br/>
                        <span>
                            실제 청년의 삶과 밀접한 법률
                        </span>
                        들만 한눈에 모아볼 수 있어요 .
                    </h1>
                    <div className={style.footerSectionLaw}>
                        {
                            law.map((law , i)=>{
                                return(
                                    <div className={style.footerLaw} key={i}>
                                        <div className={style.footerLawH1}>
                                            <h1>
                                                {law}
                                            </h1>
                                        </div>
                                        <h2>
                                            {lawDetail[i]}
                                        </h2>
                                        <ul className={style.footerLawFooter}>
                                            <li>요약보기</li>
                                            <li className={style.centerLineVertical}></li>
                                            <li>원문보기</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}