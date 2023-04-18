import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<iframe
				style={{ position: "absolute", width: "100%", height: "100%" }}
				width="1280"
				height="720"
				src="https://dive.hyundaicard.com/web/main.hdc"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen=""
			></iframe>
		</div>
  );
}

export default App;
