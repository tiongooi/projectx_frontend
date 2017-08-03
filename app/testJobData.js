const testJobData = [
  {
    date: {
      timestamp: 1501804800000,
      dateString: '2017-08-04',
      date: 2,
      month: 8,
      year: 2017
    },
    client: {
      name: "john's backyard",
      contact: 1223534645,
      location: {
        street: '34 Bunn St',
        suburb: 'Pyrmont',
        longitude: 'n/a',
        latitude: 'n/a'
      }
    },
    title: "month end maintenence",
    task: [
      {content:"sweep the floor"},
      {content:"eat your munchies"},
      {content:"paint the wall"}
    ],
    comment: [
      {content: "dont forget to fix the roof", user: "John"}
    ],
    employee: [
      {
        id:1,
        avatar: "avatar n/a",
        fName: "Ron"
      },
      {
        id:2,
        avatar: "avatar n/a",
        fName: "Jane"
      }
    ]
  },
  {
    date:{
        timestamp: 1501718400000,
        dateString: '2017-08-03',
        date: 1,
        month: 8,
        year: 2017
    },
    client: {
      name: "john's backyard",
      contact: 1223534645,
      location: {
        street: '34 Bunn St',
        suburb: 'Pyrmont',
        longitude: 'n/a',
        latitude: 'n/a'
      }
    },
    title: "month end maintenence",
    task: [
      {content:"sweep the floor"},
      {content:"eat your munchies"},
      {content:"paint the wall"}
    ],
    comment: [
      {content: "dont forget to fix the roof", user: "John"}
    ],
    employee: [
      {
        id:3,
        avatar: "avatar n/a",
        fName: "Ron"
      },
      {
        id:4,
        avatar: "avatar n/a",
        fName: "Jane"
      }
    ]
  },
]

export default testJobData;
