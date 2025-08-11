import { Redirect } from "expo-router"

const index = () => {

  return <Redirect href={'/home'}></Redirect>

  // return (
  //   <SafeAreaView>
  //       <View className='mt-6 mx-2.5'>
            
  //           <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
  //           <Text className='text-3xl font-work-medium text-secondary'>Hola mundo</Text>
  //           <Text className='text-3xl font-work-light text-tertiary'>Hola mundo</Text>
  //           <Link href='/products'>Productos</Link>
  //       </View>
  //   </SafeAreaView>
  // )
}

export default index