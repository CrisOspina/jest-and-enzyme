import React from 'react'
import {
  configure,
  shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../App'

configure({
  adapter: new Adapter()
})

describe('Probando component <App />', () => {
  test('Renderizado de componente App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').html('<h1>Jest and Enzyme</h1>'))
    expect(wrapper.find('h1')).toHaveLength(1)
    // console.log(wrapper.find('[type="checkbox"]').html())
    // console.log(wrapper.find('div ~ p').length)
    // console.log(wrapper.find('h1').html())
  })

  test('', () => {
    
  })
})
