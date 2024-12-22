import { View, Text, ScrollView, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { StatusBar } from 'react-native'
import EnrollContext from '../Context/EnrollContext'
import { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
const Enrolled = ({navigation}) => {
    const db=useContext(EnrollContext)
    const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{paddingTop:insets.top,flex:1}}>
    <View style={tailwind`justify-center items-center`}>
        <View style={tailwind`flex-row items-center p-4 w-full gap-10`}><View style={tailwind`p-2 bg-white rounded-full`}><ChevronLeftIcon size={30} color={'gray'} onPress={()=>navigation.goBack()}/></View><Text style={tailwind`text-xl font-semibold`}>Enrolled Courses </Text></View> 
    </View>
    <FlatList
        style={tailwind`h-20`}
        data={db.enroll}
        renderItem={({item}) =>{return (
        <View style={tailwind`py-5 my-2  border-gray-200 rounded-xl bg-[#ecf4fe] shadow-lg`}>
            <View style={tailwind`flex-row gap-2 `}>
                <View style={tailwind`h-30 w-30`}><Image style={{height:"100%",width:"100%"}} source={require('../../assets/courses.png')}/></View>
                <View style={tailwind`gap-2`}><Text style={tailwind`text-sm text-gray-400`}>Course</Text><Text style={tailwind`text-semibold `}>{item.name}</Text><Text style={tailwind`text-gray-500 bg-[#76c4ef] w-20 px-3 py-1 rounded-xl`}>Enrolled</Text><Text style={tailwind`text-gray-500`}>{item.duration}</Text></View>
            </View>
       </View>)}}
        keyExtractor={item => item.id}
      />
    <StatusBar/>
    </SafeAreaView>
  )
}

export default Enrolled