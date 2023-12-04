import { GameTypes, DeveloperTypes } from "../types/sanityData";

export const setGameData = (data: any) => ({
  type: "SET_GAME_DATA",
  payload: data,
});

export const setLogoData = (data: any) => ({
  type: "SET_LOGO_DATA",
  payload: data,
});

export const setDeveloperData = (data: any) => ({
  type: "SET_DEVELOPER_DATA",
  payload: data,
});

export const setOperatingSystemData = (data: any) => ({
  type: "SET_OPERATING_SYSTEM_DATA",
  payload: data,
});

export const setGameSortData = (data: any) => ({
  type: "SET_GAME_SORT_DATA",
  payload: data,
});

export const setGenreData = (data: any) => ({
  type: "SET_GENRE_DATA",
  payload: data,
});

export const setBlockchainData = (data: any) => ({
  type: "SET_BLOCKCHAIN_DATA",
  payload: data,
});

export const setGameSlugData = (data: any) => ({
  type: "SET_GAME_SLUG_DATA",
  payload: data,
});

export const setIconData = (data: any) => ({
  type: "SET_ICON_DATA",
  payload: data,
});

export const setDevSlugData = (data: any) => ({
  type: "SET_DEV_SLUG_DATA",
  payload: data,
});
