import React from 'react'
import { SearchClose, SearchWrapper } from './_style'
import { searchIc } from '@/assets/fontawesome'

export const Search = (props) => {  
    
    return (
            <SearchWrapper>
                <SearchClose>buscar... {searchIc}</SearchClose>
            </SearchWrapper>
    )
 }


export default Search