import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";

import App from "./App.jsx";

// 👇 API nueva de React 18
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
