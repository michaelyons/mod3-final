import * as actions from '../actions/initialFetchActions';

describe('actions', () => {
  it('should display current info', () => {
    const info = [
      {
        "url": "https://www.anapioficeandfire.com/api/houses/81",
        "name": "House Corbray of Heart's Home",
        "region": "",
        "coatOfArms": "Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
        "words": "",
        "titles": [
          "Lord of Heart's Home",
          "King of the Fingers (historical)"
        ],
        "seats": [
          "Heart's Home"
        ],
        "currentLord": "https://www.anapioficeandfire.com/api/characters/681",
        "heir": "https://www.anapioficeandfire.com/api/characters/677",
        "overlord": "https://www.anapioficeandfire.com/api/houses/7",
        "founded": "",
        "founder": "https://www.anapioficeandfire.com/api/characters/256",
        "diedOut": "",
        "ancestralWeapons": [
          "Lady Forlorn"
        ],
        "cadetBranches": [],
        "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/255",
          "https://www.anapioficeandfire.com/api/characters/256",
          "https://www.anapioficeandfire.com/api/characters/447",
          "https://www.anapioficeandfire.com/api/characters/654",
          "https://www.anapioficeandfire.com/api/characters/677",
          "https://www.anapioficeandfire.com/api/characters/681",
          "https://www.anapioficeandfire.com/api/characters/871",
          "https://www.anapioficeandfire.com/api/characters/1182"
        ]
      }
    ]
    const expected = {
      type: 'ADD_INITIAL_INFO',
      info: info
    };
    const result = actions.addInitialInfo(info);
    expect(result).toEqual(expected)
  })
  it('should display sworn members', () => {
    const member = {
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
    }
    const expected = {
      type: 'GET_SWORN_MEMBERS',
      member
    };
    const result = actions.addMembers(member);
    expect(result).toEqual(expected);
  })
})