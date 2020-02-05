// 其他 
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtForm, AtButton, AtTextarea, AtInput } from 'taro-ui'
import "../../../../node_modules/taro-ui/dist/style/components/form.scss";
import "../../../../node_modules/taro-ui/dist/style/components/textarea.scss";

import './Other.scss'
class Other extends Component<any, any> {
    config: Config = {
    navigationBarTitleText: '其他'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      contactPerson: '',
      contactNumber: ''
    }
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit (event) {
    console.log(event)
  }

  onReset (event) {
    console.log(event)
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

  render () {
    return (
      <View className='other'>
        <View><Text>其他</Text></View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
            <Text>情况说明</Text>
            <AtTextarea
                value={this.state.text}
                onChange={this.onChange.bind(this)}
                maxLength={200}
                placeholder='请输入你需要的帮助类型...'
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
            <Text>附件</Text>
            <AtButton formType='submit'>提交</AtButton>
            <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}
export default Other;