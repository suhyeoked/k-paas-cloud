import style from '@/component/NavBar/style.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function NavBar () {
    const router = useRouter()
    
    return(
        <>
            <header className={style.header}>
                <ul>
                    <li onClick={()=>{
                        router.push('/')
                        }}>
                            <Image src="/Logo.png" width={100} height={30} alt='로고'/>
                    </li>
                    <li>
                        <ul className={style.navRight}>
                            <li onClick={()=>{
                                router.push('/LawFinder')
                            }}>법안 둘러보기</li>
                            <li>About / 소개</li> 
                            <li>문의하기</li> 
                        </ul>
                    </li>
                </ul>
            </header>
        </>
    )
}