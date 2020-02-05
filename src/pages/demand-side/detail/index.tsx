// 需求详情
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Hotel from '../../../components/release-process/hotel/Hotel'
class Create extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '需求详情'
  }

  render () {
    return (
      <View className='create'>
        <View><Text>需求详情</Text></View>
        <Hotel></Hotel>
      </View>
    )
  }
}
export default Create;