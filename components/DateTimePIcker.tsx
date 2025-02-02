import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment-timezone'

// export const dateTimeFormat = (date: Date) => {
//   const today = date

//   // Extract day, month, and year
//   let day = today.getDate()
//   let month = today.getMonth() + 1
//   let year = today.getFullYear()
//   let hour = today.getHours()
//   let min = today.getMinutes()

//   // Format the date as dd/mm/yyyy
//   const formattedDate = `${day}/${month}/${year} ${hour}:${min}`
//   return formattedDate
// }

const DateTimePIcker = () => {
  const [dateAndTime, setDateAndTime] = useState(moment().tz('Asia/Kolkata'))

  const [DatePicker, setDatePicker] = useState(false)
  const [TimePicker, setTimePicker] = useState(false)

  const dateAndTimeCon = StyleSheet.create({
    value: {
      color: '#ddd', // Slightly brighter text
      fontSize: 14,
      fontWeight: '600'
    }
  })

  const handleDateChange = (event: any, selectedDate: any) => {
    const updatedDate = moment(selectedDate)

    dateAndTime.set('DDD', updatedDate.date())
    dateAndTime.set('M', updatedDate.month())
    dateAndTime.set('y', updatedDate.year())

    setDateAndTime(dateAndTime)
    setDatePicker(false)
    setTimePicker(true)
  }

  const handleTimeChange = (event: any, selectedTime: any) => {
    const updatedTime = moment(selectedTime)

    dateAndTime.set('h', updatedTime.hour())
    dateAndTime.set('M', updatedTime.minutes())

    setDateAndTime(dateAndTime)
    setTimePicker(false)
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setDatePicker(true)
        }}
      >
        <Text style={dateAndTimeCon.value}>
          {dateAndTime.format('DD MMM YY, h:mm A')}
        </Text>
      </TouchableOpacity>

      {DatePicker && (
        <RNDateTimePicker
          mode='date'
          value={dateAndTime.toDate()}
          onChange={handleDateChange}
        />
      )}

      {TimePicker && (
        <RNDateTimePicker
          mode='time'
          value={dateAndTime.toDate()}
          onChange={handleTimeChange}
        />
      )}
    </View>
  )
}

export default DateTimePIcker
