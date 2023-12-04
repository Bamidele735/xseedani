import { GameTypes, DeveloperTypes } from "../types/sanityData";

interface RootState {
  game: any | null;
  logo: any;
  developer: any | null;
  operatingSystem: any;
  gameSortData: any;
  genre: any;
  blockchain: any;
  gameSlugData: any;
  iconData: any;
  fetchDeveloper: any;
}

const initialState: RootState = {
  game: null,
  logo: null,
  developer: null,
  operatingSystem: null,
  gameSortData: null,
  genre: null,
  blockchain: null,
  gameSlugData: null,
  iconData: null,
  fetchDeveloper: null,
};

const rootReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_GAME_DATA":
      return {
        ...state,
        game: action.payload,
      };
    case "SET_LOGO_DATA":
      return {
        ...state,
        logo: action.payload,
      };
    case "SET_DEVELOPER_DATA":
      return {
        ...state,
        developer: action.payload,
      };
    case "SET_OPERATING_SYSTEM_DATA":
      return {
        ...state,
        operatingSystem: action.payload,
      };
    case "SET_GAME_SORT_DATA":
      return {
        ...state,
        gameSortData: action.payload,
      };
    case "SET_GENRE_DATA":
      return {
        ...state,
        genre: action.payload,
      };
    case "SET_BLOCKCHAIN_DATA":
      return {
        ...state,
        blockchain: action.payload,
      };
    case "SET_GAME_SLUG_DATA":
      return {
        ...state,
        gameSlugData: action.payload,
      };
    case "SET_ICON_DATA":
      return {
        ...state,
        iconData: action.payload,
      };
    case "SET_DEV_SLUG_DATA":
      return {
        ...state,
        fetchDeveloper: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
