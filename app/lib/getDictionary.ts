import { en, es } from "./dictionary"

export const getDictionary = async (locale: string) => {
  switch (locale) {
    case "es":
      return es
    default:
      return en
  }
}

