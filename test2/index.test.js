import React from 'react'
import { mount } from 'enzyme'

import ProductSection from '../test1/test1'

describe('ProductSection', () => {
  it('should be defined', () => {
    expect(ProductSection).toBeDefined()
  })
  it('should render', () => {
    const wrapper = mount(<ProductSection />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render text when passed in', () => {
    const wrapper = mount(<ProductSection text="Test text" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render a title when passed in', () => {
    const wrapper = mount(<ProductSection sectionTitle="Test Title" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render a title when passed in', () => {
    const wrapper = mount(<ProductSection textColor="#000" />)
    expect(wrapper).toMatchSnapshot()
  })
})