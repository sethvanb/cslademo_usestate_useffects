
function filterByCountry(c) { return (item)=>{ return item.country === c; } }

export default function sortAndFilter(u, country) {
	let refinedu = u;

    if(country != "all"){
        refinedu=refinedu.filter(filterByCountry(country));
    }

	return refinedu;
}
