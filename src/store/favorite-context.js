import { createContext, useState } from "react";

const FavoriteContext = createContext({
	favorites: [],
	totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
	const [userFavorites, setUserFavorites] = useState([]);

	const addFavoriteHandler = (favoriteMeetup) => {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup);
		});
	};

	const removeFavoriteHandler = (meetupId) => {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	};

	const itemIsFavoriteHandler = (meetupId) => {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	};

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
	};

	return (
		<FavoriteContext.Provider value={context}>
			{props.children}
		</FavoriteContext.Provider>
	);
};
