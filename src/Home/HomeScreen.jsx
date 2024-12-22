import { SafeAreaView, Text, TextInput, View ,Button, Pressable, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { AdjustmentsHorizontalIcon, BellIcon, MagnifyingGlassCircleIcon } from "react-native-heroicons/solid"
import { ClockIcon} from "react-native-heroicons/outline"
import courses from '../../utils/courses'
const blurhash = "C:\Users\CodeERAryan\Desktop\CourseExplorer\CourseExplorer\assets\courses.png";
import { Image } from 'expo-image'
import { EnrollProvider } from '../Context/EnrollContext'

const HomeScreen = ({navigation,props}) => {
  return (
    <EnrollProvider>
    <SafeAreaView style={tailwind`flex-1 bg-[#ecf4fe]`}>
    <View style={tailwind`pt-15 px-5 items-center  flex-row justify-between`}> 


      {/* header */}
      <View>
      <Text style={tailwind`p-1 text-xl font-semibold`}>Hi,Aryan👋</Text>
      <Text style={tailwind`p-1 text-gray `}>find your lessons today!</Text>
      </View>
      <View>
      <BellIcon style={{height:50}} color={'gray'}/>
      </View>
      
    </View>

    {/* searchbar and filter */}

    <View style={tailwind`flex-row gap-3 items-center px-3 mr-3`}> 
    <View style={tailwind`bg-white py-1 px-2 m-4 w-[75%] flex-row rounded-full`}>
    <MagnifyingGlassCircleIcon size={50} color={'gray'}/> <TextInput placeholder='search here !'/>
    </View>
    <View style={tailwind`bg-[#2fa7f6] p-2 justify-center items-center rounded-full`}>
    <AdjustmentsHorizontalIcon size={30} color={'white'} />
    </View>
    </View>
 

    {/* initial Card */}

    <View style={tailwind`flex-row h-[20%]  items-center bg-[#a6d9fa] rounded-xl gap-10 m-4 pr-10`}>
      <View style={tailwind`w-[50%] px-4`}><Text style={tailwind`py-2 `}>Discover Top Picks</Text><View style={tailwind`flex-row flex-start gap-2 items-center pb-2`}><Text style={tailwind`font-bold text-2xl `}>+100</Text><Text>lessons</Text></View><Text><Button style={tailwind`rounded-xl`} title='Explore'/></Text></View>
      <View style={tailwind`w-[50%] h-[50%]`} ><Image style={{height:120,width:150}} source={require("../../assets/courses.png")}/></View>
    </View>
    
    {/* courses */}

    <View style={tailwind`m-4  `}>
      <View style={tailwind`flex-row justify-between items-center`}><Text style={tailwind`font-semibold text-xl`}>Popular Lessons</Text><Pressable><Text style={tailwind`text-blue-500`}>See All</Text></Pressable></View>
    </View>
 
  <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>{courses.map((elem)=>{
        return (
          <Pressable onPress={()=>{navigation.navigate('Details',{...elem})}}>
    <View style={tailwind`h-70 bg-white p-2 m-2 rounded-xl`}>

      <View style={tailwind`p-2 h-50 w-50 `} >
              <Image
        style={tailwind`h-[80%] rounded-xl`}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
              />
       <View>
          <Text style={tailwind`font-semibold py-2 leading-5`}>{elem.name}<Text style={tailwind`font-light font-sm`}>({elem.instructor})</Text></Text> 
       </View>
      </View>
    <View style={tailwind`p-2 flex-row h-15 items-center justify-between `}><View style={tailwind`bg-[#c6e7fc] p-1 flex-row items-center rounded-xl`}><ClockIcon height={20} width={20} color={'#1e84f2'}/><Text style={tailwind`text-[#1e84f2]`}>{elem.duration}</Text></View><Text style={tailwind`text-gray-300`}>#{elem.id}</Text></View>      
     </View></Pressable>)
      })}</ScrollView>
  </View>
    <StatusBar/>
    </SafeAreaView>
    </EnrollProvider>
  )
}

export default HomeScreen

