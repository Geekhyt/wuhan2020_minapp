// 酒店
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtForm, AtButton, AtInput, AtRadio } from 'taro-ui'
import "../../../../node_modules/taro-ui/dist/style/components/form.scss";
import "../../../../node_modules/taro-ui/dist/style/components/radio.scss";

import './Hotel.scss'
class Hotel extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '酒店'
  }

  constructor () {
    super(...arguments)
    this.state = {
      contactNumber: '',
      value: '',
      room: '',
      type: ['1', '2', '3', '4'],
      typeChecked: '1'
    }
  }


  onSubmit (event) {
    console.log(event)
  }

  onReset (event) {
    console.log(event)
  }

  contactNumberChange (contactNumber) {
    this.setState({
      contactNumber
    })
  }

  handleChange (value) {
    this.setState({
      value
    })
  }

  roomChange (value) {
    this.setState({
      value
    })
  }

  onChange = e => {
    this.setState({
      typeChecked: this.state.type[e.detail.value]
    })
  }

  render () {
    return (
      <View className='other'>
        <View><Text>酒店</Text></View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
            <Text>酒店地区</Text>
            <Text>联系方式</Text>
            <AtInput
              name='contactNumber'
              type='phone'
              placeholder='请输入联系方式'
              value={this.state.contactNumber}
              onChange={this.contactNumberChange.bind(this)}
            />
            <Text>是否具有医疗隔离条件</Text>
            <AtRadio
                options={[
                  { label: '是', value: 'option1' },
                  { label: '否', value: 'option2' },
                ]}
                value={this.state.value}
                onClick={this.handleChange.bind(this)}
            />
            <Text>可提供房间数</Text>
            <AtInput
              name='room'
              type='phone'
              placeholder='请输入联系方式'
              value={this.state.room}
              onChange={this.roomChange.bind(this)}
            />
            <Text>每间房可容纳人数</Text>
            <Picker mode='selector' value={this.state.typeChecked} range={this.state.type} onChange={this.onChange}>
            <View className='picker'>
              请选择：{this.state.typeChecked}
            </View>
            <Text>附件</Text>
            </Picker>
            <AtButton formType='submit'>提交</AtButton>
            <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}
export default Hotel;