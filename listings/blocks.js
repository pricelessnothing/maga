blocks: [
  {
    id: 1,
    type: 'start',
    text: '',
    inputs: [],
    outputs: [7],
    x: 100,
    y: 150,
  },
  {
    id: 7,
    type: 'instructions',
    text: 'ROT = 0\ndir = -1\nstatic=30\n',
    inputs: [1],
    outputs: [2],
    x: 200,
    y: 150
  },
  {
    id: 2,
    type: 'instructions',
    text: 'diff = DISTANCE / 3 * dir\nSPEED = static * dir + diff',
    inputs: [7],
    outputs: [3],
    x: 300,
    y: 150
  },
  {
    id: 3,
    type: 'condition',
    text: 'DISTANCE < 150 && DISTANCE > 130 || DISTANCE > 600 && DISTANCE < 100',
    inputs: [2],
    outputs: [4, 5],
    x: 400,
    y: 150
  },
  {
    id: 4,
    type: 'instructions',
    text: 'dir = dir * -1',
    inputs: [3],
    outputs: [5],
    x: 500,
    y: 150
  },
  {
    id: 5,
    type: 'condition-merge',
    inputs: [3, 4],
    outputs: [6],
    x: 450,
    y: 350
  },
  {
    id: 6,
    type: 'timer',
    text: '50',
    inputs: [5],
    outputs: [2],
    x: 350,
    y: 350,
  },
]