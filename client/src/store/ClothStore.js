import {makeAutoObservable} from 'mobx'

export default class ClothStore {
    constructor() {
        this._types = []
        this._brands = []
        this._clothes = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedCloth = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
             
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }

    setClothes(clothes) {
        this._clothes = clothes
    }

    setSelectedType(type = {}) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand = {}) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setSelectedCloth(cloth = {}) {
        this._selectedCloth = cloth
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get clothes() {
        return this._clothes
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedCloth() {
        return this._selectedCloth
    }
    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}