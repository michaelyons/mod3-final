import { membersReducer } from './membersReducer';

describe('membersReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = membersReducer(undefined, [])

    expect(result).toEqual(expected);
  })
  it('should return state with the members added', () => {
    const mockState = [];

    const mockAction = {
      type: 'GET_SWORN_MEMBERS',
      members: [{
        url: "https://www.anapioficeandfire.com/api/characters/255",
        name: "Corwyn Corbray",
        gender: "Male",
        culture: "",
        born: "",
        died: "In 134 AC, at Runestone",
        titles: [
          "Ser",
          "Lord Regent"
        ],
        aliases: [
          ""
        ],
        father: "",
        mother: "",
        spouse: "https://www.anapioficeandfire.com/api/characters/871",
        allegiances: [
          "https://www.anapioficeandfire.com/api/houses/81"
        ],
        books: [
          "https://www.anapioficeandfire.com/api/books/11"
        ],
        povBooks: [],
        tvSeries: [
          ""
        ],
        playedBy: [
          ""
        ]
      }]
    }

    const expected = [{
      url: "https://www.anapioficeandfire.com/api/characters/255",
      name: "Corwyn Corbray",
      gender: "Male",
      culture: "",
      born: "",
      died: "In 134 AC, at Runestone",
      titles: [
        "Ser",
        "Lord Regent"
      ],
      aliases: [
        ""
      ],
      father: "",
      mother: "",
      spouse: "https://www.anapioficeandfire.com/api/characters/871",
      allegiances: [
        "https://www.anapioficeandfire.com/api/houses/81"
      ],
      books: [
        "https://www.anapioficeandfire.com/api/books/11"
      ],
      povBooks: [],
      tvSeries: [
        ""
      ],
      playedBy: [
        ""
      ]
    }]

    const result = membersReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  })
})