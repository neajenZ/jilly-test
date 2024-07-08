import axios from "axios"
import { IBean } from "../../components/beanList/beanCard/beanCard.interface"

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
})


interface IResponseServer<T> {
    totalPages: number,
    currentPage: number,
    pageSize: number,
    totalCount: number,
    items: T
}

export const apiRequests = {
    beans: {
        getAll: async (pageIndex: number, pageSize = 10, filters?: string) => {
            return axiosInstance.get<IResponseServer<IBean[]>>(`/beans${filters ? `${filters}` : ''}`, {
                params: {
                    pageIndex, pageSize
                }
            })
        },
        getById: async (id: string) => {
            return axiosInstance.get<IResponseServer<IBean[]>>(`/beans/${id}`)
        } 
    },
    facts: {
        getAll: async (pageIndex: number, pageSize = 10) => {
            return axiosInstance.get<IResponseServer<IBean[]>>('/facts', {
                params: {
                    pageIndex, pageSize
                }
            })
        }
    }
}