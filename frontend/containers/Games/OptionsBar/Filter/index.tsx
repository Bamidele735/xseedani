import React, { useState } from "react";
import Styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Table from "../../Table";
import { gamesData, GameSortData } from "../../../../types/gamesDataTypes";
export default function Filter() {
  const genreData = useSelector((state: RootState) => state.genre);
  const blockchainData = useSelector((state: RootState) => state.blockchain);
  const gameData = useSelector((state: RootState) => state.gameSortData);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedBlockchain, setSelectedBlockchain] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleGenreSelection = (genre: string) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleNetworkSelection = (network: string) => {
    setSelectedBlockchain((prevNetworks) => {
      if (prevNetworks.includes(network)) {
        return prevNetworks.filter((n) => n !== network);
      } else {
        return [...prevNetworks, network];
      }
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const combinedFilter = (game: gamesData) => {
    const genreMatch =
      selectedGenres.length === 0 ||
      game.genre.some((genre) => selectedGenres.includes(genre.name));

    const blockchainMatch =
      selectedBlockchain.length === 0 ||
      game.blockchain.some((network) =>
        selectedBlockchain.includes(network.name)
      );

    const searchMatch =
      searchQuery.length === 0 ||
      game.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return genreMatch && blockchainMatch && searchMatch;
  };

  const filteredGames = gameData?.filter(combinedFilter);
  return (
    <div className={`${Styles.filtrGames} `}>
      <div className={Styles.Genre}>
        {" "}
        <div className={Styles.filterGamesHeader}>
          <div className={Styles.filterGamesDropDowDiv}>
            <div className={` ${Styles.genre_flex} hs-dropdown relative `}>
              <header>Genre</header>

              <button
                id="hs-dropdown-transform-style"
                type="button"
                className=" hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle  focus:outline-none  transition-all text-sm"
              >
                Sort By:
                <svg
                  className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
                {selectedGenres || "Select"} {/* Updated line */}
              </button>
              <div className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10">
                <div
                  className={`${Styles.dropDown_bg} hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-left min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:border dark:border-gray-700 dark:divide-gray-700`}
                  aria-labelledby="hs-dropdown-transform-style"
                  data-hs-transition
                >
                  {genreData ? (
                    <div>
                      {genreData.map((data: GameSortData) => (
                        <label
                          key={data?._key}
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          onClick={(e) => e.stopPropagation()} // Prevent event propagation
                        >
                          <input
                            type="checkbox"
                            value={data.name}
                            checked={selectedGenres.includes(data.name)}
                            onChange={() => handleGenreSelection(data.name)}
                            onClick={(e) => e.stopPropagation()} // Prevent event propagation
                          />
                          {data.name}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            <div className={` ${Styles.genre_flex} hs-dropdown relative `}>
              <header>Blockchain</header>

              <button
                id="hs-dropdown-transform-style"
                type="button"
                className=" hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle  focus:outline-none  transition-all text-sm"
              >
                Sort By:
                <svg
                  className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
                {selectedBlockchain || "Select"} {/* Updated line */}
              </button>
              <div className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10">
                <div
                  className={`${Styles.dropDown_bg} hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-left min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:border dark:border-gray-700 dark:divide-gray-700`}
                  aria-labelledby="hs-dropdown-transform-style"
                  data-hs-transition
                >
                  {blockchainData ? (
                    <div>
                      {blockchainData.map((data: GameSortData) => (
                        <label
                          key={data?._id}
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          onClick={(e) => e.stopPropagation()} // Prevent event propagation
                        >
                          <input
                            type="checkbox"
                            value={data.name}
                            checked={selectedBlockchain.includes(data.name)}
                            onChange={() => handleNetworkSelection(data.name)}
                            onClick={(e) => e.stopPropagation()} // Prevent event propagation
                          />
                          {data.name}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.filter_Search_Box}>
            {/* Search Input */}
            <header>Search</header>
            <input
              className=" hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle  focus:outline-none  transition-all text-sm"
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Table filteredGames={filteredGames} />
    </div>
  );
}
