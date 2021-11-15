import React, { useState, useEffect } from 'react';
import TableView from '../components/tableView.jsx'
import sortAndFilter from '../utils/sortAndFilterFunctions.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	//Data sets and state variables 
	const [initList, setInitList] = useState([]);
	const [refinedData, setRefinedData] = useState([]);
	const [country, setCountry] = useState("all");

	//Initialization of Data Set
	useEffect(()=>{ 
		if(initList.length===0) getList(""); 
	});
		
	const getList = async (query) => {
		console.log(query);
		const response = await fetch(`/api?search=` + query, { method: "GET" });
		const data = await response.json();
		setInitList(data);
	}

	//Set display data
	useEffect(() => {
		let universities = [...initList];
		setRefinedData(sortAndFilter(universities, country));
	}, [initList, country]);

	let handleChange = (value) => {
		setCountry(value);
	}

	let handleChange2 = (value) => {
		console.log(value);
		getList(value);
	}

  return (
    <div>
        <h1>UseState and UseEffects Demo</h1>
		<label htmlFor="search">Search:</label>
		<input type="text" id="search" name="search" onChange={e => handleChange2(e.target.value)}/>
		<label htmlFor="name">Country:</label>
        <select id="countyrSelect" defaultValue="all" onChange={e => handleChange(e.target.value)}>
			<option value = "all">All</option>
			<option value = "United States">United States</option>
			<option value = "Canada">Canada</option>
			<option value = "India">India</option>
			<option value = "United Kingdom">United Kingdom</option>
		</select>
        <TableView data={refinedData}/>
    </div>
  )
}
