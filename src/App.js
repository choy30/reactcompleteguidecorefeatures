import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./componenets/layout/MainNavigation";

function App() {
	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<AllMeetups />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
				<Route path="/favorite" element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default App;
