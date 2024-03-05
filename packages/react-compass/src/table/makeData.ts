export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
  createdAt: Date
  subRows?: Person[] | null
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}
const makeid = (length: number) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const getRandomDate = (startDate: Date, endDate: Date) => {
  const minValue = startDate.getTime()
  const maxValue = endDate.getTime()
  const timestamp = Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue,
  )
  return new Date(timestamp)
}

const newPerson = (): Person => {
  return {
    firstName: makeid(5),
    lastName: makeid(5),
    age: Math.floor(Math.random() * 40),
    visits: Math.floor(Math.random() * 1000),
    progress: Math.floor(Math.random() * 100),
    createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
    status: ['relationship', 'complicated', 'single'][
      Math.floor(
        Math.random() * ['relationship', 'complicated', 'single'].length,
      )
    ]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : null,
      }
    })
  }

  return makeDataLevel()
}

export type LimitRequestStatus = {
  id: string
  accountName: string
  code: string
  requestLimit: number
  status: string
  progress?: Progress[] | null
}
export type Progress = {
  id: string
  remarks: string
  createdAt: Date
}

export const newRequestStatus = (): LimitRequestStatus => {
  return {
    id: makeid(5),
    accountName: generateAccountName(),
    code: makeid(3),
    requestLimit: Math.floor(Math.random() * 1000),
    status:
      ['Submited', 'Processing', 'Approval'][
        Math.floor(
          Math.random() * ['Submited', 'Processing', 'Approval'].length,
        )
      ] ?? 'Submited',
    progress: [
      {
        id: makeid(5),
        remarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.',
        createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
      },
    ],
  }
}
export function makeRequestStatusData(...lens: number[]) {
  const makeDataLevel = (depth = 0): LimitRequestStatus[] => {
    const len = lens[depth]!
    return range(len).map((d): LimitRequestStatus => {
      return {
        ...newRequestStatus(),
      }
    })
  }

  return makeDataLevel()
}
function generateAccountName() {
  const accountNames = [
    'Miss Reilly Lemke',
    'Elizabeth Friesen',
    'Dr. Doyle Boehm',
    'Domenica Zemlak DDS',
    'Samson Bogan',
    'Thora Hilll',
    'Shannon Mann',
    'Mrs. Barry Franecki',
    'Kendrick Balistreri',
    'Daphnee Durgan',
    'Stevie Herman',
    'Salvador Koelpin',
    'Milo Torphy',
    'Amelie Halvorson',
    'Cora Weissnat IV',
    'Rey Watsica',
    'Alexandria Murray',
    'Angeline Schowalter',
    'Britney Cole',
    'Marlene Bosco',
  ]

  return `${accountNames[Math.floor(Math.random() * accountNames.length)]}`
}
