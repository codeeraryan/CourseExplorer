import { View, Text, SafeAreaView, FlatList, StatusBar,Pressable,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import tailwind from 'twrnc'
import courses from '../../utils/courses';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchBar = (props) => {
    const insets=useSafeAreaInsets();
    const item=props.route.params;
    const [searched,setSearched]=useState([])
  
 useEffect(()=>{setSearched(()=>courses.filter((elem)=> elem.name.includes(item)));},[])   
    
  return (
    <SafeAreaView style={{paddingTop:insets.top,flex:1,backgroundColor:"#ecf4fe"}}>
     
    <View style={tailwind`justify-center items-center bg-white rounded-b-[10]`}>
        <View style={tailwind`flex-row items-center p-4 w-full gap-10`}><View style={tailwind`p-2 bg-white rounded-full`}><ChevronLeftIcon size={30} color={'gray'} onPress={()=>props.navigation.goBack()}/></View><Text style={tailwind`text-xl font-semibold`}>Search Results :</Text></View> 
    </View>

      <View>{(searched.length>0)? (<FlatList
        
        data={searched}
        renderItem={({item}) =>{  return (
          <Pressable onPress={()=>props.navigation.navigate('Details',{...item})}>
        <View style={tailwind`py-5 my-2  border-gray-200 rounded-xl bg-white border-b-2`}>
            <View style={tailwind`flex-row gap-2 `}>
                <View style={tailwind`h-30 w-30`}><Image style={{height:"100%",width:"100%"}} source={require('../../assets/courses.png')}/></View>
                <View style={tailwind`gap-2`}><Text style={tailwind`text-sm text-gray-400`}>Course</Text><Text style={tailwind`text-semibold  `}>{item.name}</Text><View style={tailwind`flex-row justify-between`}><Text style={tailwind`text-gray-500 bg-[#76c4ef] w-20 px-3 py-1 rounded-xl`}>Enrolled</Text></View><Text style={tailwind`text-gray-500`}>{item.duration}</Text></View>
            </View>
       </View>
       </Pressable>
       )}}
        keyExtractor={item => item.id}
      />): (<View style={tailwind`h-[70%] items-center justify-center`}><View style={tailwind`h-100 w-100`}><Image style={{height:"100%",width:"100%"}} source={require('../../assets/none.webp')}/></View><Text style={tailwind`absolute bottom-10`}>Nothing Here !!</Text></View>
    )}</View>
     <StatusBar backgroundColor={'white'}/>
    </SafeAreaView>
  )
}

export default SearchBar