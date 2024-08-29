export interface BOXCONTENT {
  id: string;
  tag: string;
  title: string;
  zhTitle: string;
  content: string;
  box: boolean;
  carouselImg?: {
    id: string;
    img: string;
    txt: string;
  }[];
}

export interface KBCONTENT {
  tag: string;
  items: {
    title: string;
    secondTag?: string;
    rightImg?: string;
    listImg: string;
    listItems: {
      id: string;
      name: string;
      img: string;
      leftImg: string;
      rightImg: string;
      secondary?: string;
    }[];
  }[];
}
