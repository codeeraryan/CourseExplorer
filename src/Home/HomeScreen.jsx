import { SafeAreaView, Text, TextInput, View ,Button, Pressable, ScrollView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tailwind from 'twrnc'
import { AdjustmentsHorizontalIcon, BellIcon, MagnifyingGlassCircleIcon, StarIcon } from "react-native-heroicons/solid"
import { ClockIcon} from "react-native-heroicons/outline"
import courses from "../../utils/courses"
const blurhash = "C:\Users\CodeERAryan\Desktop\CourseExplorer\CourseExplorer\assets\courses.png";
import { Image } from 'expo-image'
import { useFonts } from 'expo-font'



const HomeScreen = ({navigation}) => {
  const [fontsLoaded]=useFonts({
    "DsSemi":require("../../assets/Fonts/DancingScript-SemiBold.ttf"),
    "Mr":require("../../assets/Fonts/Mynerve-Regular.ttf"),
       })
    
       if(!fontsLoaded){
        return null
       }
     
  return (
  
    <SafeAreaView style={tailwind`flex-1 bg-[#ecf4fe]`}>
      <ScrollView>
    <View style={tailwind`pt-15 px-7 items-center bg-white rounded-b-[15] flex-row justify-between`}> 


      {/* header */}
      <View style={tailwind`bg-white pb-5 rounded-b-full w-[70%]`}>
      <Text style={{paddingLeft:5,fontFamily:"Mr",fontSize:30}} >Hi,Aryan👋</Text>
      <Text style={{paddingLeft:10,fontFamily:"DsSemi",fontSize:20}} >find your lessons today!</Text>
      </View>
      <View style={tailwind`bg-white rounded-full bg-gray-500 p-1 items-center justify-center`}>
      <BellIcon style={{height:50}} color={'white'}/>
      </View>
      
    </View>

    {/* searchbar and filter */}

    <View style={tailwind`flex-row gap-3 items-center px-3 mr-3`}> 
    <View style={tailwind`bg-white py-1 px-2 m-4 w-[75%] flex-row items-center rounded-full`}>
    <MagnifyingGlassCircleIcon size={50} color={'gray'}/><Text> <TextInput style={tailwind`h-full w-full`} placeholder='search here !'/></Text>
    </View>
    <View style={tailwind`bg-[#2fa7f6] p-2 justify-center items-center rounded-full`}>
    <AdjustmentsHorizontalIcon size={30} color={'white'} />
    </View>
    </View>
 

    {/* initial Card */}

    <View style={tailwind`flex-row  shadow-md  items-center bg-[#ACD7FF] rounded-xl gap-10 m-4 pr-10`}>
      <View style={tailwind`w-[50%] px-4`}><Text style={tailwind`py-2 `}>Discover Top Picks</Text><View style={tailwind`flex-row flex-start gap-2 items-center pb-2`}><Text style={tailwind`font-bold text-2xl `}>+100</Text><Text>lessons</Text></View><Text><Button style={tailwind`rounded-xl`} title='Explore'/></Text></View>
      <View style={tailwind`h-35 w-35 mt-5`} ><Image style={tailwind`h-[100%] w-[100%] bg-cover shadow-lg`} source={{uri:"https://s3-alpha-sig.figma.com/img/7435/73ea/fe3a6cda637e51a859d7055cacfd1a23?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EbiOqP8kDhqO0db3z1j8iw3sjl0wPj9wCF~wnxeTMEgkfCPfOChF566U8BK43SR3JcDgPheww8wUj8EaeHWrW-rUWsSRs1Je9Eyvshg-1HuhibvqPsVng6VraH2csL5oUWzQ7HBLhwt3y-A1Yc8nXrOsoeZG8RJPdVPv7xjLcH~qRjVederpnggX9e0yrtRtYRPuGMsEkCcZv2S2yO4YRc0fWYMP8qKNwGXAOAnJBqPKAHcH-ZD5p9yzAW9xN87xLpAvL96rOOCLl~49Le4fvoqkev-Ek5-LNM74Ul8oKbnhzrqZkxr99y0pmHZpD6iZ6y97ANq9nfqSesJz4e12RA__"}}/></View>
    </View>
    
    {/* courses */}

    {/* 1 popular one */}
    <View style={tailwind`m-4 `}>
      <View style={tailwind`flex-row justify-between items-center`}><Text style={tailwind`font-semibold text-xl`}>Popular Lessons</Text><Pressable><Text style={tailwind`text-blue-500`}>See All</Text></Pressable></View>
    </View>
 
   <View>
      <FlatList data={courses}  keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=>{if(item.id<6) return (
          <TouchableOpacity onPress={()=>{navigation.navigate('Details',{...item})}}>
    <View style={tailwind`h-70 bg-white p-2 m-2 rounded-xl`}>
      <View style={tailwind`p-2 h-50 w-50 `} >
              <Image
        style={tailwind`h-[80%] rounded-xl shadow-md`}
        source="https://s3-alpha-sig.figma.com/img/4079/c5af/c18c9157dbdc7771e115ac388994cb3a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6INFCu0ozGXwn5H6IuTT2V09ePesfhDc-ClaXKIDFH36RZvWRIR7-Z8qE-nkLf53EQcB~epx8Y~ORtSh2m4cYMEQPgpgpIGqvwWZvxgMQVi3eEir23HyswCmrgjrGpcZbRgiGAlXyS6MjXTDcDem-Pe1d5ZZ1dvgCU94SDTCyBCNuyYoiEM3jS0YwfmXuCTios0PXUFuLDGRDiZXP-ZPgcAJZOIjhKCt7Y1nhPrDi1to-uh-LKislhTq7jzsb9YZ21sdrOqQJtAmn5dRMZ2jfQmKkI6aVURSYYN4uJP~3w508AnkqFgSKuOmgydnUX0YH0GfxK9CiOh00fAqofErg__"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
              />
       <View>
          <Text style={tailwind`font-semibold py-2 leading-5`}>{item.name}<Text style={tailwind`font-light font-sm text-orange-500`}>({item.instructor})</Text></Text> 
       </View>
      </View>
    <View style={tailwind`p-2 flex-row h-15 items-center justify-between `}><View style={tailwind`bg-[#c6e7fc] p-1 flex-row items-center rounded-xl`}><ClockIcon height={20} width={20} color={'#1e84f2'}/><Text style={tailwind`text-[#1e84f2]`}>{item.duration}</Text></View><View style={tailwind`flex-row gap-1 items-center`}><StarIcon style={tailwind`text-yellow-500 `}/><Text>{Math.floor(Math.random()*5)}</Text></View></View>      
     </View></TouchableOpacity>)
      }}/>
      
  </View>

    {/* 2 all one */}
    <View style={tailwind`m-4 `}>
      <View style={tailwind`flex-row justify-between items-center`}><Text style={tailwind`font-semibold text-xl`}>All Lessons</Text><Pressable><Text style={tailwind`text-blue-500`}>See All</Text></Pressable></View>
    </View>
 
   <View>
      <FlatList data={courses}  keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=>{if(item.id>5) return (
          <TouchableOpacity onPress={()=>{navigation.navigate('Details',{...item})}}>
    <View style={tailwind`h-70 bg-white p-2 m-2 rounded-xl`}>

      <View style={tailwind`p-2 h-50 w-50 `} >
              <Image
        style={tailwind`h-[80%] rounded-xl shadow-md`}
        source="https://s3-alpha-sig.figma.com/img/4079/c5af/c18c9157dbdc7771e115ac388994cb3a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6INFCu0ozGXwn5H6IuTT2V09ePesfhDc-ClaXKIDFH36RZvWRIR7-Z8qE-nkLf53EQcB~epx8Y~ORtSh2m4cYMEQPgpgpIGqvwWZvxgMQVi3eEir23HyswCmrgjrGpcZbRgiGAlXyS6MjXTDcDem-Pe1d5ZZ1dvgCU94SDTCyBCNuyYoiEM3jS0YwfmXuCTios0PXUFuLDGRDiZXP-ZPgcAJZOIjhKCt7Y1nhPrDi1to-uh-LKislhTq7jzsb9YZ21sdrOqQJtAmn5dRMZ2jfQmKkI6aVURSYYN4uJP~3w508AnkqFgSKuOmgydnUX0YH0GfxK9CiOh00fAqofErg__"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
              />
       <View>
          <Text style={tailwind`font-semibold py-2 leading-5`}>{item.name}<Text style={tailwind`font-light font-sm text-orange-500`}>({item.instructor})</Text></Text> 
       </View>
      </View>
    <View style={tailwind`p-2 flex-row h-15 items-center justify-between `}><View style={tailwind`bg-[#c6e7fc] p-1 flex-row items-center rounded-xl`}><ClockIcon height={20} width={20} color={'#1e84f2'}/><Text style={tailwind`text-[#1e84f2]`}>{item.duration}</Text></View><View style={tailwind`flex-row gap-1 items-center`}><StarIcon style={tailwind`text-yellow-500 `}/><Text>{Math.floor(Math.random()*5)}</Text></View></View>      
     </View></TouchableOpacity>)
      }}/>
      
  </View>

  </ScrollView>
       <StatusBar/>
    </SafeAreaView>
   
  )
}

export default HomeScreen

