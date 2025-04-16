import {
  gallery as galleryImg,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
} from "imgs";
import { IGallery } from "interfaces";
import { generateIdFromObject } from "libs/utils";

const gallerySmal: Omit<IGallery, "id">[] = [
  {
    img: galleryImg,
  },
  {
    img: gallery2,
  },
  {
    img: gallery3,
  },
  {
    img: gallery4,
  },
  {
    img: gallery5,
  },
  {
    img: gallery6,
  },
  {
    img: gallery7,
  },
  {
    img: gallery8,
  },
  {
    img: gallery9,
  },
  {
    img: gallery10,
  },
  {
    img: gallery11,
  },
  {
    img: gallery12,
  },
];

export const gallery = generateIdFromObject(gallerySmal);
