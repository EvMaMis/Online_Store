import axios from "axios";
import { $authHost, $host } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post ('api/type', type)
    return data
}
export const fetchTypes = async () => {
    const {data} = await $host.get ('api/type')
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('api/type/' + id)
    console.log(data)
    return data
}

export const deleteType = async (id) => {
    axios.delete(process.env.REACT_APP_API_URL + 'api/type/' + id)
    window.location.reload()
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post ('api/brand', brand)
    return data
}
export const fetchBrands = async () => {
    const {data} = await $host.get ('api/brand', )
    return data
}

export const deleteBrand = async(id) => {
    axios.delete(process.env.REACT_APP_API_URL + 'api/brand/' + id)
    window.location.reload()
}

export const createCloth = async (cloth) => {
    const {data} = await $authHost.post ('api/cloth', cloth)
    return data
}

export const fetchClothes = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get ('api/cloth', {params: {typeId, brandId, page, limit}})
    return data
}

export const fetchOneCloth = async (id) => {
    const {data} = await $host.get ('api/cloth/' + id)
    return data
}

export const deleteCloth = async (id) => {
    axios.delete(process.env.REACT_APP_API_URL + 'api/cloth/' + id)
    window.location.reload()
}