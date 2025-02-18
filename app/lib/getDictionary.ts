import { en, hi } from "./dictionary"

export const getDictionary = async (locale: string) => {
  switch (locale) {
    case "hi":
      return hi
    default:
      return en
  }
}

