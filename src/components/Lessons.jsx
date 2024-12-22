import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { PlayCircleIcon,ChevronRightIcon } from 'react-native-heroicons/solid'
const Lessons = ({topic,duration}) => {
  return (
           <View style={tailwind`flex-row justify-between px-8 my-3 items-center`}>
              <View style={tailwind`flex-row gap-3`}><PlayCircleIcon  size={45} color={'#3aaceb'}/>
              <View><Text style={tailwind`text-sm font-semibold`}>{topic}</Text><Text style={tailwind`text-gray-500`}>{duration}</Text></View></View>
              <View><ChevronRightIcon size={25} color={'gray'}/></View>
            </View>
  )
}

export default Lessons