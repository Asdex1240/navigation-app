import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = ({...props}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
        scrollEnabled={false}
    >
        <View className="flex mx-3 p-10 mb-10 h-[150px] rounded-lg items-center justify-center bg-primary">
            <View className='flex items-center justify-center bg-white rounded-full w-24 h-24'>
                <Text className='text-3xl font-work-black'>JM</Text>
            </View>
        </View>

        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer