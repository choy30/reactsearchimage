import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
	return (
		<MuiThemeProvider>
			<NavBar />
		</MuiThemeProvider>
	);
}

export default App;
