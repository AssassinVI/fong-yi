export const FloorPlanList = [
  {
    id: "B3",
    tag: "B3",
    floor: "B3",
  },
  { id: "B2", tag: "B2", floor: "B2" },
  { id: "B1", tag: "B1", floor: "B1" },
  { id: "1F", tag: "1F", floor: "1F" },
  { id: "2F", tag: "2F", floor: "2F" },
  { id: "3F", tag: "3F", floor: "3F" },
  { id: "4F", tag: "4F-9F", floor: "4F" },
  { id: "5F", tag: "4F-9F", floor: "5F" },
  { id: "6F", tag: "4F-9F", floor: "6F" },
  { id: "7F", tag: "4F-9F", floor: "7F" },
  { id: "8F", tag: "4F-9F", floor: "8F" },
  { id: "9F", tag: "4F-9F", floor: "9F" },
  { id: "10F", tag: "10F", floor: "10F" },
  { id: "R1", tag: "R1", floor: "R1" },
];

export const FloorPlanAest = [
  {
    id: "B3",
    tag: "B3",
    floor: "B3",
    image: new URL("@/assets/img/floor-plan/B3@2x.png", import.meta.url).href,
  },
  {
    id: "B2",
    tag: "B2",
    floor: "B2",
    image: new URL("@/assets/img/floor-plan/B2@2x.png", import.meta.url).href,
  },
  {
    id: "B1",
    tag: "B1",
    floor: "B1",
    image: new URL("@/assets/img/floor-plan/B1@2x.png", import.meta.url).href,
  },
  {
    id: "1F",
    tag: "1F",
    floor: "1F",
    image: new URL("@/assets/img/floor-plan/1F@2x.png", import.meta.url).href,
    list: [
      {
        id: "first",
        name: "接待大廳",
      },
      {
        id: "second",
        name: "健身房",
      },
      {
        id: "third",
        name: "韻律教室",
      },
      {
        id: "fourth",
        name: "多功能交誼廳",
      },
      {
        id: "fifth",
        name: "視聽室",
      },
      {
        id: "sixth",
        name: "梯廳",
      },
      {
        id: "seventh",
        name: "過廊",
      },
    ],
    points: [
      {
        className: "point-1-1F",
        tag: "first",
      },
      {
        className: "point-2-1F",
        tag: "second",
      },
      {
        className: "point-3-1F",
        tag: "third",
      },
      {
        className: "point-4-1F",
        tag: "fourth",
      },
      {
        className: "point-5-1F",
        tag: "fifth",
      },
      {
        className: "point-6-1F",
        tag: "sixth",
      },
      {
        className: "point-7-1F",
        tag: "seventh",
      },
    ],
  },
  {
    id: "2F",
    tag: "2F",
    floor: "2F",
    image: new URL("@/assets/img/floor-plan/2F@2x.png", import.meta.url).href,
    points: [
      {
        className: "a1-2F",
        name: "A1",
      },
      {
        className: "a2-2F",
        name: "A2",
      },
      {
        className: "a3-2F",
        name: "A3",
      },
      {
        className: "a5-2F",
        name: "A5",
      },
      {
        className: "a6-2F",
        name: "A6",
      },
      {
        className: "a9-2F",
        name: "A9",
      },
      {
        className: "b1-2F",
        name: "B1",
      },
      {
        className: "b2-2F",
        name: "B2",
      },
      {
        className: "b3-2F",
        name: "B3",
      },
      {
        className: "b5-2F",
        name: "B5",
      },
      {
        className: "b6-2F",
        name: "B6",
      },
      {
        className: "b7-2F",
        name: "B7",
      },
      {
        className: "b8-2F",
        name: "B8",
      },
      {
        className: "b9-2F",
        name: "B9",
      },
    ],
  },
  {
    id: "3F",
    tag: "3F",
    floor: "3F",
    image: new URL("@/assets/img/floor-plan/3F@2x.png", import.meta.url).href,
    points: [
      {
        className: "a1-3F",
        name: "A1",
      },
      {
        className: "a2-3F",
        name: "A2",
      },
      {
        className: "a3-3F",
        name: "A3",
      },
      {
        className: "a5-3F",
        name: "A5",
      },
      {
        className: "a6-3F",
        name: "A6",
      },
      {
        className: "a7-3F",
        name: "A7",
      },
      {
        className: "a8-3F",
        name: "A8",
      },
      {
        className: "a9-3F",
        name: "A9",
      },
      {
        className: "b1-3F",
        name: "B1",
      },
      {
        className: "b2-3F",
        name: "B2",
      },
      {
        className: "b3-3F",
        name: "B3",
      },
      {
        className: "b5-3F",
        name: "B5",
      },
      {
        className: "b6-3F",
        name: "B6",
      },
      {
        className: "b7-3F",
        name: "B7",
      },
      {
        className: "b8-3F",
        name: "B8",
      },
      {
        className: "b9-3F",
        name: "B9",
      },
    ],
  },
  {
    id: "4F-9F",
    tag: "4F-9F",
    floor: "4F-9F",
    image: new URL("@/assets/img/floor-plan/4F-9F@2x.png", import.meta.url)
      .href,
    points: [
      {
        className: "a1-4F-9F",
        name: "A1",
      },
      {
        className: "a2-4F-9F",
        name: "A2",
      },
      {
        className: "a3-4F-9F",
        name: "A3",
      },
      {
        className: "a5-4F-9F",
        name: "A5",
      },
      {
        className: "a6-4F-9F",
        name: "A6",
      },
      {
        className: "a7-4F-9F",
        name: "A7",
      },
      {
        className: "a8-4F-9F",
        name: "A8",
      },
      {
        className: "a9-4F-9F",
        name: "A9",
      },
      {
        className: "b1-4F-9F",
        name: "B1",
      },
      {
        className: "b2-4F-9F",
        name: "B2",
      },
      {
        className: "b3-4F-9F",
        name: "B3",
      },
      {
        className: "b5-4F-9F",
        name: "B5",
      },
      {
        className: "b6-4F-9F",
        name: "B6",
      },
      {
        className: "b7-4F-9F",
        name: "B7",
      },
      {
        className: "b8-4F-9F",
        name: "B8",
      },
      {
        className: "b9-4F-9F",
        name: "B9",
      },
    ],
  },
  {
    id: "10F",
    tag: "10F",
    floor: "10F",
    image: new URL("@/assets/img/floor-plan/10F@2x.png", import.meta.url).href,
    points: [
      {
        className: "a1-10F",
        name: "A1",
      },
      {
        className: "a2-10F",
        name: "A2",
      },
      {
        className: "a3-10F",
        name: "A3",
      },
      {
        className: "a5-10F",
        name: "A5",
      },
      {
        className: "a6-10F",
        name: "A6",
      },
      {
        className: "a7-10F",
        name: "A7",
      },
      {
        className: "a8-10F",
        name: "A8",
      },
      {
        className: "a9-10F",
        name: "A9",
      },
      {
        className: "b1-10F",
        name: "B1",
      },
      {
        className: "b2-10F",
        name: "B2",
      },
      {
        className: "b3-10F",
        name: "B3",
      },
      {
        className: "b5-10F",
        name: "B5",
      },
      {
        className: "b6-10F",
        name: "B6",
      },
      {
        className: "b7-10F",
        name: "B7",
      },
      {
        className: "b8-10F",
        name: "B8",
      },
      {
        className: "b9-10F",
        name: "B9",
      },
    ],
  },
  {
    id: "R1",
    tag: "R1",
    floor: "R1",
    image: new URL("@/assets/img/floor-plan/R1@2x.png", import.meta.url).href,
  },
];
