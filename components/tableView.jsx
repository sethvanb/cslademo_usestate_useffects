import Table from 'react-bootstrap/Table'

export default function TableView(props){
	return(
		<Table striped bordered hover>
		<thead>
		  <tr>
			<th>Name</th>
			<th>Country</th>
			<th>Website</th>
		  </tr>
		</thead>
		<tbody>
		{
			props.data.map((u, i) =>(
				<tr key={u.name + i}>
					<td>{u.name}</td>
					<td>{u.country}</td>
					<td><a href={u.web_pages[0]}>{u.web_pages[0]}</a></td>
				</tr>
			))
		}
		</tbody>
	  </Table>
	)
}
