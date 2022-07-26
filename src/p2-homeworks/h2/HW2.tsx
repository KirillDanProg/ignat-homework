import React, {useState} from 'react'
import Affairs from './Affairs'
import styles from "./Affairs.module.css"
import mainStyles from "../../p1-main/m1-ui/u1-app/App.module.css"

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType
// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {// need to fix any
    switch (filter) {
        case 'all':
            return affairs
        case 'middle':
            return affairs.filter((a) => a.priority === "middle")
        case "high":
            return affairs.filter((a) => a.priority === "high")
        case "low":
            return affairs.filter((a) => a.priority === "low")
        default:
            return affairs
    }
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter((a) => a._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    } // need to fix any
    return (
        <div className={styles.hm2}>
           <div className={mainStyles.title}>homeworks 2</div>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filterVal={filter}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
