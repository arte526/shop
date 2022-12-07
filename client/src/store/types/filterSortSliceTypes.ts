export interface IFilterArraySettings{
    filterId: string
    filterName: string
    isChecked?: boolean
}
export type IFilterSortState = {
    filters: IFilterArraySettings[]
}
