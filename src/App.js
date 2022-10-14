/** @format */

import "./App.css";
import CardComponent from "./components/CardComponent";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import datas from "./components/formData";

function App() {
	console.log(datas);
	const formdata = datas.map((data) => {
		return <CardComponent key={data.id} data={data} />;
	});
	return (
		<div className='app'>
			<Navbar />
			<HeroComponent />
			<section className='flexx'>{formdata}</section>
		</div>
	);
}

export default App;
