// 发布求助/援助 
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Release.scss'

class Release extends Component {
    config: Config = {
    navigationBarTitleText: '发起求助组件'
  }

  render () {
    return (
      <View className='release'>
        <View><Text>发起求助组件</Text></View>
        <View className="block-container">
            <View className="block-style" onClick={() => {
              Taro.navigateTo({
                url: '/pages/demand-side/detail/index'
              })
            }}>医疗物资</View>
            <View className="block-style">物流</View>
        </View>
        <View className="block-container">
            <View className="block-style">酒店</View>
            <View className="block-style">其他</View>
        </View>
      </View>
    )
  }
}
export default Release;