import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FilterComponent, { FilterComponentProps } from '../FilterComponent'

type FilterContainerProps = {
    data : FilterComponentProps[]
}

const FilterContainer = ( props: FilterContainerProps ) => {

    const filterConStyle = StyleSheet.create({
        container:{
            display : 'flex',
            flexDirection : 'row'
        }
    })

  return (
    <View style={filterConStyle.container} >
        {props.data.map(( data )=> <FilterComponent {...data} />)}
    </View>
  )
}

export default FilterContainer