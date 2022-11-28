// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import { ReactSortable } from 'react-sortablejs'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, ListGroupItem } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/avatars/avatar-blank.png'

const array = {
  list1: [
    {
      id: '1',
      img: img1,
      name: 'Mary S. Navarre',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    },
    {
      id: '2',
      img: img1,
      name: 'Samuel M. Ellis',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '3',
      img: img1,
      name: 'Sandra C. Toney',
      content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa.'
    },
    {
      id: '4',
      img: img1,
      name: 'Cleveland C. Goins',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '5',
      img: img1,
      name: 'Linda M. English',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ],
  list2: [
    {
      id: '6',
      img: img1,
      name: 'Alexandria I. Smelser',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '7',
      img: img1,
      name: 'Oscar N. Pool',
      content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake.'
    },
    {
      id: '8',
      img: img1,
      name: 'Kathy A. Alvarado',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    },
    {
      id: '9',
      img: img1,
      name: 'James E. White',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '10',
      img: img1,
      name: 'Roberta R. Babin',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ]
}

const DndMultiple = () => {
  // ** States
  const [listArr1, setListArr1] = useState(array.list1)
  const [listArr2, setListArr2] = useState(array.list2)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Multiple Lists</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use <code>group</code> prop to create a multiple list Drag & Drop.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <h4 className='my-1'>People Group 1</h4>
            <ReactSortable
              tag='ul'
              className='list-group list-group-flush sortable'
              group='shared-group'
              list={listArr1}
              setList={setListArr1}
            >
              {listArr1.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <div className='d-flex align-items-center'>
                      <div>
                        <img
                          src={item.img}
                          className='rounded-circle me-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </div>
                      <div>
                        <h5 className='mt-0'>{item.name}</h5>
                        {item.content}
                      </div>
                    </div>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1'>People Group 2</h4>
            <ReactSortable
              tag='ul'
              className='list-group list-group-flush sortable'
              group='shared-group'
              list={listArr2}
              setList={setListArr2}
            >
              {listArr2.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <div className='d-flex align-items-center'>
                      <div>
                        <img
                          src={item.img}
                          className='rounded-circle me-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </div>
                      <div>
                        <h5 className='mt-0'>{item.name}</h5>
                        {item.content}
                      </div>
                    </div>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DndMultiple
