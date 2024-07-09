import { ElementRef, useRef, useEffect, useContext } from 'react';
import styles from './beanList.module.scss'
import BeanCard from './beanCard/beanCard';
import { BeansContext } from '../../shared/store/context';
import Header from '../header/header';


const BeanList = () => {
    const { beans, getData, search, isLoading } = useContext(BeansContext)
    const loader = useRef<ElementRef<'div'>>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (search) return;
        observerRef.current = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                getData();
            }
        }, {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        });

        if (loader.current) {
            observerRef.current.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observerRef.current!.unobserve(loader.current);
            }
        };
    }, [])

    return (
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    {
                        beans.length === 0 ? 'Not found' : beans.map((item) => (
                            <BeanCard cardData={item} key={item.beanId} />
                        ))
                    }
                    <div ref={loader} style={{ height: '100px', margin: '10px' }}>
                        {isLoading ? 'Loading...' : ''}
                    </div>
                </div>
            </div>
        </>

    )
};

export default BeanList;
