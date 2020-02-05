// 创建需求
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Release from '../../../components/release-process/release/Release'
class Create extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '发起求助'
  }

  render () {
    return (
      <View className='create'>
        <View><Text>发起求助</Text></View>
        <Release></Release>
      </View>
    )
  }
}
export default Create;