import { View, Text, StatusBar, SafeAreaView,Image, ScrollView, Pressable ,Button} from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { ChevronLeftIcon, ClockIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeartIcon } from 'react-native-heroicons/solid'
import Lessons from '../components/Lessons'
import { useContext } from 'react'
import EnrollContext, { EnrollProvider } from '../Context/EnrollContext'

const Details = (props) => {
    const db=useContext(EnrollContext);
    const [focus,setFocus]=useState(false);
    const [heart,setHeart]=useState(false);
    const insets = useSafeAreaInsets();
    const item=props.route.params;
  return (
    
    <SafeAreaView style={{paddingTop:insets.top,flex:1,backgroundColor:"#ecf4fe"}} >
      <View style={tailwind`flex-row justify-around items-center`}><View style={tailwind`p-2 justify-center items-center bg-white rounded-full `}><ChevronLeftIcon onPress={()=>{props.navigation.goBack()}} height={30} width={30} color={'gray'}/></View>
      <View><Text style={tailwind`text-xl font-semibold`}>Course Overview</Text></View>
      <View style={tailwind`p-2 justify-center items-center bg-white rounded-full `}><HeartIcon onPress={()=>{setHeart(prev=>!prev)}} height={30} width={30} color={heart?'red':'gray'}/></View></View>

    <View style={tailwind` p-4  `}>
     <View style={tailwind`h-90 w-90 `}>
        <Image style={tailwind`h-[100%] w-[100%] bg-cover`} source={require("../../assets/courses.png")}/>
        <Text style={tailwind`text-xl font-semibold`}>{item.name}</Text>
     </View>

     <View style={tailwind`mt-8 flex-row gap-3 `}>
       <View style={tailwind`flex-row gap-2 items-center`}><ClockIcon color={'gray'}/><Text style={tailwind`text-gray-500`}>{item.duration}</Text></View>
       <View style={tailwind`flex-row gap-2 items-center`}><UserCircleIcon color={'orange'}/><Text style={tailwind`text-orange-500`}>{item.instructor}</Text></View>
     </View>
    </View>
    
    <View style={tailwind`flex-1`}>
    <View style={tailwind`flex-row justify-center mt-2 mb-3 gap-10`}>
        <Text onPress={()=>setFocus(false)} style={tailwind`text-xl ${focus?`text-gray-500`:`text-blue-500 border-b-2 border-blue-500`}`}>Lessons</Text> 
      <Text onPress={()=>setFocus(true)} style={tailwind`text-xl ${focus?`text-blue-500 border-b-2 border-blue-500`:`text-gray-500`}`}>Description</Text> 
     </View>
  {focus?<View style={tailwind`p-4`}><Text>{item.description}</Text></View>:<ScrollView showsVerticalScrollIndicator={false} >
    { item.lessons.map((value,key)=>{return <Lessons duration={value.duration} topic={value.topic} key={key}/> })
     }
   </ScrollView> }
   </View> 
    
    <View style={tailwind`bg-white-10 justify-center gap-10  flex-row h-20 p-2 bg-white rounded-t-[15]`}>
        <View style={tailwind`bg-white h-10 w-20 flex justify-center items-center rounded-xl border-gray-200 border-2 `}><Text style={tailwind`text-[#3aaceb] font-semibold  `}>{item.price}</Text></View>
        <Pressable onPress={()=>{db.setEnroll(prev=>[...prev,item])}}  style={tailwind`bg-[#3aaceb] h-10 w-40 flex justify-center items-center rounded-xl  `}><Text style={tailwind`text-white font-semibold `} >Enroll Now</Text></Pressable>
        </View>
    

      <StatusBar hidden={true} />
    </SafeAreaView>
   
  )
}

export default Details