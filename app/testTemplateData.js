exports.testTemplateData = [
  {
    id: 't001',
    client: {
      id: '111',
      selected: false,
      propertyName: 'Johns Mosman Garden',
      fName: 'John',
      lName: 'Smith',
      email: 'js@javascript.com',
      mobile: '0876578897',
      avatar: 'n/a',
      location: {
        street: '32 Bunn St',
        suburb: 'Pyrmont',
        postcode: '2009',
        state: 'NSW',
        country: 'Australia',
        coordinates: {
          longitude: 115.857048,
          latitude: -31.953512
        }
      }
    },
    comment: '',
    date: {},
    title: 'Monthly maintenence',
    employee: [
        {
          id: '011',
          fName: 'Barrack',
          lName: 'Obama',
          avatar: 'n/a',
          mobile: '0488923849',
          email: 'ba@ba.com',
          addedOn: '1502774166913',
          selected: false,
          pending: false
        },
        {
          id: '012',
          fName: 'Vladimir',
          lName: 'Putin',
          avatar: 'n/a',
          mobile: '0498728394',
          email: 'vp@vp.com',
          addedOn: '1502774166913',
          selected: false,
          pending: false
        }
    ],
    task: [
      {id: 'x7', content:'sweep the floor'},
      {id: 'x8', content:'eat your munchies'},
      {id: 'x9', content:'paint the wall'}
    ]
  }
]
