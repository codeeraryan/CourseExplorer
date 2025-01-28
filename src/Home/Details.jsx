import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'
import React, {useEffect, useState} from 'react'
import tailwind from 'twrnc'
import {ChevronLeftIcon, ClockIcon, TrashIcon, UserCircleIcon} from 'react-native-heroicons/outline'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeartIcon} from 'react-native-heroicons/solid'
import Lessons from '../components/Lessons'
import {useContext} from 'react'
import EnrollContext from '../Context/EnrollContext'

const Details = (props) => {
  const showToast = () => {
    ToastAndroid.show("Enrolled", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }
  const db = useContext(EnrollContext);
  const [focus,
    setFocus] = useState(false);
  const [heart,
    setHeart] = useState(false);
  const [Active,
    setActive] = useState(false);
  const insets = useSafeAreaInsets();
  const item = props.route.params;

  //  useEffect(()=>{console.log(db.enroll.filter(element =>
  // {if(item.id==element.id){return true} else{ return false}}))},[db.enroll])

  const checkIfInDB = () => {
    let isAvailable = db
      .enroll
      .filter(elem => elem
        ?.id == item
          ?.id)
    return Boolean(isAvailable.length)
  }

  return (

    <SafeAreaView
      style={{
      paddingTop: insets.top,
      flex: 1,
      backgroundColor: "#ecf4fe"
    }}>

      <View
        style={tailwind `flex-row justify-around items-center bg-white p-4 rounded-b-[10]`}>
        <View
          style={tailwind `p-1.5 justify-center items-center bg-gray-400 rounded-full `}><ChevronLeftIcon
          onPress={() => {
      props
        .navigation
        .goBack()
    }}
          height={25}
          width={25}
          color={'white'}/></View>
        <View>
          <Text style={tailwind `text-xl font-semibold`}>Course Overview</Text>
        </View>
        <View
          style={tailwind `p-1.5 justify-center items-center bg-gray-400 rounded-full `}><HeartIcon
          onPress={() => {
      setHeart(prev => !prev)
    }}
          height={25}
          width={25}
          color={heart
      ? 'red'
      : 'white'}/></View>
      </View>

      <View style={tailwind ` pt-2 pl-2 justify-center items-center `}>
        <View style={tailwind `h-80 w-80 justify-center items-center `}>
          <Image
            style={tailwind `h-[100%] w-[100%] bg-cover`}
            source={require("../../assets/courses.png")}/>
        </View>
      </View>

      <View>
        <Text style={tailwind `text-xl font-semibold px-8`}>{item.name}</Text>
        <View style={tailwind ` flex-row gap-3 px-8 `}>
          <View style={tailwind `flex-row gap-1 items-center`}><ClockIcon color={'gray'}/>
            <Text style={tailwind `text-gray-500`}>{item.duration}</Text>
          </View>
          <View style={tailwind `flex-row gap-1 items-center`}><UserCircleIcon color={'orange'}/>
            <Text style={tailwind `text-orange-500`}>{item.instructor}</Text>
          </View>
        </View>
      </View>

      <View style={tailwind `flex-1`}>
        <View style={tailwind `flex-row justify-center mt-1 mb-3 gap-10`}>
          <Text
            onPress={() => setFocus(false)}
            style={tailwind `text-xl ${focus
            ? `text-gray-500`
            : `text-blue-500 border-b-2 border-blue-500`}`}>Lessons</Text>
          <Text
            onPress={() => setFocus(true)}
            style={tailwind `text-xl ${focus
            ? `text-blue-500 border-b-2 border-blue-500`
            : `text-gray-500`}`}>Description</Text>
        </View>
        {focus
          ? <View style={tailwind `p-4`}>
              <Text>{item.description}</Text>
            </View>
          : <ScrollView showsVerticalScrollIndicator={false}>
            {item
              .lessons
              .map((value, key) => {
                return <Lessons duration={value.duration} topic={value.topic} key={key}/>
              })
}
          </ScrollView>}
      </View>

      <View
        style={tailwind `bg-white-10 justify-center gap-5 flex-row h-20 p-2 bg-white rounded-t-[15]`}>
        <View
          style={tailwind `bg-white h-10 w-20 flex justify-center items-center rounded-xl border-gray-200 border-2 `}>{checkIfInDB()
            ? <TrashIcon
                color={'gray'}
                onPress={() => db.setEnroll(db.enroll.filter((elem) => {
                return elem.id != item.id
              }))}
                style={tailwind ` rounded-full justify-center p-2 items-center`}/>
            : <Text style={tailwind `text-[#3aaceb] font-semibold `}>{item.price}</Text>}</View>
        <TouchableOpacity
          disabled={checkIfInDB()}
          onPress={() => {
          db.setEnroll(prev => [
            ...prev,
            item
          ]);
          showToast()
        }}
          style={tailwind `bg-[#3aaceb] h-10 w-40 flex justify-center items-center rounded-xl `}>
          <Text style={tailwind `text-white font-semibold `}>{checkIfInDB()
              ? "Enrolled"
              : "Enroll Now"}</Text>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={'white'}/>
    </SafeAreaView>

  )
}

export default Details