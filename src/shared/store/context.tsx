import {createContext, Dispatch, useRef, ReactNode, SetStateAction, useMemo, useState, useCallback} from "react";
import { IBean } from "../../components/beanList/beanCard/beanCard.interface";
import { apiRequests } from "../api/api";

interface IContext {
    beans: IBean[],
    setBeans: Dispatch<SetStateAction<IBean[]>>, 
    getData: () => void, 
    handleFilterClick: (filterName: string, value: string) => void,
    search: boolean,
    isLoading: boolean
}

interface IProps {
    children: ReactNode
}

const BeansContext = createContext<IContext>({} as IContext)

const BeansProvider = ({ children }: IProps) => {
    const [isLoading, setLoading] = useState(false)
    const [beans, setBeans] = useState<IBean[]>([])    
    const search = useRef(false)
    const pageRef = useRef(1)

    const getData = useCallback(async () => {
        if (search.current) return;
        setLoading(true)
        console.log(search.current)
        const response = await apiRequests.beans.getAll(pageRef.current)
        setLoading(false)
        setBeans(prev => [...prev, ...response.data.items])
        pageRef.current = response.data.currentPage + 1
    }, [])

    const handleFilterClick = useCallback(async (filterName: string, value: string) => {
        setLoading(true)
        search.current = true
        await apiRequests.beans.getAll(1, 10, `?${filterName}=${value}`)
            .then((res) => {
                setBeans(res.data.items)
                pageRef.current = res.data.currentPage
                setLoading(false)
            })
    }, [])

    const values = useMemo(() => ({
        setBeans,
        beans, 
        isLoading,
        getData,
        handleFilterClick,
        search: search.current
    }), [beans, search, setBeans, handleFilterClick, isLoading, getData])

    return (
        <BeansContext.Provider value={values}>
            {children}
        </BeansContext.Provider>
    )
}

export { BeansContext, BeansProvider }