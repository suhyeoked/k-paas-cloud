import style from '@/component/NavBar/style.module.css'
import { useRouter } from 'next/router'

export default function NavBar () {
    const router = useRouter()
    
    return(
        <>
            <header className={style.header}>
                <div>
                    <h1 onClick={()=>{
                    router.push('/')
                    }}>
                        메뉴
                    </h1>
                </div>
            </header>
        </>
    )
}