const testJobObject =
  {
    jobDate: 1501646432335,
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
  };


export default testJobObject;
