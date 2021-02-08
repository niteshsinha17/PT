import * as actionTypes from "../actions/actionTypes";

const initialState = {
  chapter: {
    name: "Evolution",
    slug: "evolution",
  },
  topics: [
    {
      id: 1,
      name: "Introduction",
    },
    {
      id: 2,
      name: "History and Evolution",
    },
    {
      id: 3,
      name: "Prout's Hypothesis",
    },
    {
      id: 4,
      name: "Dobereiner’s Triads",
    },
    {
      id: 5,
      name: "Newland’s Octaves ",
    },
    {
      id: 6,
      name: "Mendeleev’s Periodic Table",
    },
    {
      id: 7,
      name: "Mendeleev’s Periodic Table",
    },
  ],
  current_topic:4
};

const updateObject = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties,
  };
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default courseReducer;


// api/course/all
// const data = {
//   chapters:[
//     {
//       name:"chapter name",
//       id:"",
//       slug:"",
//       topics:[{
//         name:"name",
//       }]
//       readTime:""
//     },
//     {
//       name:"chapter name",
//       id:"",
//       slug:"",
//       readTime:""
//     },
//     {
//       name:"chapter name",
//       id:"",
//       slug:"",
//       readTime:""
//     }
//   ],
//   current_chapter:"id";
//   slug:"kdh"
// }

// api/course/chapterName/
// users current chapter + topic
// continue-> current topic
// // past -> first topic
// // future -> can not access
// const data = {

// }

// api/course/chapterName/topic/
// // api/cource/chapterName/game


// // api/game/gamename

