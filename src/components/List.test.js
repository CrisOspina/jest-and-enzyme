import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'

configure({
  adapter: new Adapter(),
})

describe('Probando componente list', () => {
  test('Validar nodos', () => {
    const fruits = [
      {
        id: 1,
        name: "Fresa"
      },
      {
        id: 2,
        name: "Mango"
      },
      {
        id: 3,
        name: "Papaya"
      }
    ]

    const wrapper = shallow(<List title="Frutas" list={fruits}/>)
    // Validar si existe nodo
    expect(wrapper.find('h1').exists()).toBe(true)

    // Validar si tiene clase css
    expect(wrapper.find('h1').hasClass('big')).toBe(true)

    // Validar cantidad elementos hijos
    expect(wrapper.find('ul').children().length).toBe(3)

    // Validar contenido de texto
    expect(wrapper.find('ul').childAt(1).text()).toBe('Mango')

    // Validar el tipo de nodo / elemento
    expect(wrapper.find('ul').childAt(1).type()).toBe('li')

    // Validar html
    expect(wrapper.find('ul').childAt(1).html()).toBe('<li>Mango</li>')
  })
})
