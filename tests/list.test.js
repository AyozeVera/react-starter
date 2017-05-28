import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

class List extends React.Component {
  render() {
    return (
      <table className="myClass">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr key={index}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

describe('List', () => {
  let list

  beforeEach(() => {
    list = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />)
  })

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1)
  })

  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1)
  })

  it('List renders column', () => {
    const arr = list.find('th')
    expect(arr.length).toEqual(1)
    expect(arr.first().text()).toEqual('Name')
  })

  it('List renders data', () => {
    const arr = list.find('td')
    expect(arr.length).toEqual(3)
    expect(arr.at(1).text()).toEqual('Name 2')
  })
})
