import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import DateTimePIcker from './DateTimePIcker'
import moment from 'moment-timezone'

export type FilterComponentProps = {
  id: number
  text: string
  days?: number | undefined | null
}

export type FilterComponentActiveProps = {
  active: number
  onPress: (newActiveIdx: number, days: number | undefined | null) => void
}

const FilterComponent = (
  props: FilterComponentProps & FilterComponentActiveProps
) => {
  const filterStyle = StyleSheet.create({
    default: {
      alignSelf: 'flex-start',
      paddingHorizontal: 24,
      paddingVertical: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#7C7C7C',
      marginRight: 12,
      fontSize: 14,
      fontWeight: '500'
    }
  })

  const activeFilterStyle = StyleSheet.create({
    active: {
      ...filterStyle.default,
      borderColor: '#7E44E0',
      backgroundColor: '#7E44E0',
      color: '#C8C8C8'
    }
  })

  const handleChangeDateTime = (date: moment.Moment) => {
    const today = moment().tz('Asia/Kolkata') // Current date and time

    const diffInDays = date.diff(today, 'days');
    props.onPress(props.id, diffInDays)
  }

  return (
    <ThemedText
      style={
        props.active === props.id
          ? activeFilterStyle.active
          : filterStyle.default
      }
      onPress={() => props.onPress(props.id, props.days ?? undefined)}
    >
      {props.text === 'Select Date' ? (
        <DateTimePIcker handleChangeDateTime={handleChangeDateTime} />
      ) : (
        props.text
      )}
    </ThemedText>
  )
}

export default FilterComponent
