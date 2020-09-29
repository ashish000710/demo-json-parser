$(document).ready(()=> {
	let url = 'demo.json';
	$.getJSON(url, data=> {
	}).done(response=> {
		var listArray = response.map((generateListTag));
		listArray.map((li)=> {
			$('#data-list').append(li);
			$('.list:nth-child(even)').css('color', '#808080');
		})
	})
	function generateListTag(obj) {
		return `<li class="list"><div>Name: ${obj.name}</div><div>Age: ${obj.age}</div></li>`;
	}
})