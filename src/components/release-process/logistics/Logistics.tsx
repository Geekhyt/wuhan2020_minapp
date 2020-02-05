// 物流
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtForm, AtButton, AtInput } from 'taro-ui'
import "../../../../node_modules/taro-ui/dist/style/components/form.scss";
import './Logistics.scss'

class Logistics extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '物流'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      type: ['个人', '组织'],
      typeChecked: '个人',
      contactPerson: '',
      contactNumber: '',
      message: ['自发', '网络'],
      messageChecked: '网络',
      url: '',
      trafficVolume: ''
    }
  }

  onChange = e => {
    this.setState({
      typeChecked: this.state.type[e.detail.value]
    })
  }

  onSubmit (event) {
    console.log(event)
  }

  onReset (event) {
    console.log(event)
  }

  handleChange (value) {
    this.setState({
        value
    })
  }

  trafficChange (trafficVolume) {
    this.setState({
        trafficVolume
    })
  }

  contactPersonChange (contactPerson) {
    this.setState({
      contactPerson
    })
  }

  contactNumberChange (contactNumber) {
    this.setState({
      contactNumber
    })
  }

  messageChange = e => {
    this.setState({
      messageChecked: this.state.message[e.detail.value]
    })
  }

  urlChange (url) {
    this.setState({
        url
    })
  }

  render () {
    return (
      <View className='other'>
        <View><Text>物流</Text></View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
          <Picker mode='selector' value={this.state.typeChecked} range={this.state.type} onChange={this.onChange}>
            <View className='picker'>
              类型：{this.state.typeChecked}
            </View>
          </Picker>
          <AtInput
            name='value'
            type='text'
            placeholder='请输入个人/组织全称'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <Text>运输路线</Text>
          <Text>运输量</Text>
          <AtInput
            name='trafficVolume'
            type='text'
            placeholder='请输入运输量'
            value={this.state.trafficVolume}
            onChange={this.trafficChange.bind(this)}
          />
          <Text>联系人</Text>
          <AtInput
            name='contactPerson'
            type='text'
            placeholder='请输入联系人'
            value={this.state.contactPerson}
            onChange={this.contactPersonChange.bind(this)}
          />
          <AtInput
            name='contactNumber'
            type='phone'
            placeholder='请输入联系方式'
            value={this.state.contactNumber}
            onChange={this.contactNumberChange.bind(this)}
          />
          <Text>信息来源</Text>
          <Picker mode='selector' value={this.state.messageChecked} range={this.state.message} onChange={this.messageChange}>
            <View className='picker'>
              请选择：{this.state.messageChecked}
            </View>
          </Picker>
          <AtInput
            name='url'
            type='text'
            placeholder='请输入具体网址'
            value={this.state.url}
            onChange={this.urlChange.bind(this)}
          />
          <Text>附件</Text>
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}
export default Logistics;