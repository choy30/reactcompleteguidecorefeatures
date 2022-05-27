import Backdrop from "./componenets/Backdrop";
import Modal from "./componenets/Modal";
import Todo from "./componenets/Todo";

function App() {
	return (
		<div>
			<h1>My Todos</h1>
			<Todo text="Learn React" />
			<Todo text="Master React" />
			<Todo text="Explore the full React Course" />
			<Modal />
			<Backdrop />
		</div>
	);
}

export default App;
