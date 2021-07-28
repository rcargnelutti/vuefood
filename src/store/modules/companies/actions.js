import axios from "axios"
import {} from '@/configs/api'
import { API_VERSION } from "@/configs/api"

const RESOURCE = 'tenants'

export default {
    getCompanies({commit}){
        return axios.get(`${API_VERSION}/${RESOURCE}`)
            .then(response => {
                //console.log(response.data)
                commit('SET_COMPANY', response.data)
            })
    }
}