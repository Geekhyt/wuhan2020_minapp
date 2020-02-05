// 医疗物资
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import "../../../../node_modules/taro-ui/dist/style/components/form.scss";
import "../../../../node_modules/taro-ui/dist/style/components/textarea.scss";
import "../../../../node_modules/taro-ui/dist/style/components/tag.scss";
import { AtForm, AtInput, AtButton, AtTextarea, AtTag } from 'taro-ui'
import './MedicalSupplies.scss'

class MedicalSupplies extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '医疗物资'
  }
  
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      type: ['个人', '组织'],
      typeChecked: '个人',
      text: '',
      selector: ['医疗物资'],
      selectorChecked: '医疗物资',
      tag1: '',
      contactPerson: '',
      contactNumber: '',
      address: '',
      dateSel: '2020-02-04',
      message: ['自发', '网络'],
      messageChecked: '网络',
      url: ''
    }
  }

  handleChange (value) {
    this.setState({
        value
    })
  }

  onSubmit (event) {
    console.log(event)
  }

  onReset (event) {
    console.log(event)
  }

  onChange = e => {
    this.setState({
      typeChecked: this.state.type[e.detail.value]
    })
  }

  messageChange = e => {
    this.setState({
      messageChecked: this.state.message[e.detail.value]
    })
  }

  textChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  selectChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  
  tagClick1 (name) {
    this.setState({
      tag1: name
    })
  }

  tagClick2 (name) {
    this.setState({
      tag2: name
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

  addressChange (address) {
    this.setState({
      address
    })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  urlChange (url) {
    this.setState({
      url
    })
}

  render () {
    return (
      <View className='create'>
        <View><Text>医疗物资</Text></View>
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
          <Text>介绍</Text>
          <AtTextarea
            value={this.state.text}
            onChange={this.textChange.bind(this)}
            maxLength={200}
            placeholder='简单介绍当前情况...'
          />
          <Picker mode='selector' value={this.state.selectorChecked} range={this.state.selector} onChange={this.selectChange}>
            <View className='picker'>
              援助类型：{this.state.selectorChecked}
            </View>
          </Picker>
          <View>
            <AtTag 
              name='tag-1' 
              type='primary' 
              circle
              onClick={this.tagClick1.bind(this)}
            >
              防护口罩
            </AtTag>
            <AtTag 
              name='tag-2' 
              type='primary' 
              circle
              onClick={this.tagClick2.bind(this)}
            >
              防护服
            </AtTag>
          </View>
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
          <Text>接收地址</Text>
          <AtInput
            name='address'
            type='text'
            placeholder='请输入详细地址'
            value={this.state.address}
            onChange={this.addressChange.bind(this)}
          />
          <Text>有效期</Text>
          <Picker mode='date' value={this.state.dateSel} onChange={this.onDateChange}>
            <View className='picker'>
              当前选择：{this.state.dateSel}
            </View>
          </Picker>
          <Text>信息来源</Text>
          <Picker mode='selector' value={this.state.messageChecked} range={this.state.message} onChange={this.messageChange}>
            <View className='picker'>
              类型：{this.state.messageChecked}
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
export default MedicalSupplies;