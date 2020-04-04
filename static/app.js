///////////***** REALTIME UPDATE   LOGIC ******/////////////////////
const form = document.forms.countForm;
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = form.count.value;
	console.log('name🔥🔥🔥', name);
	run(name); //.then(() => {
	// $.ajax({
	//     type: 'GET',
	//     url: '/get',
	//     success: (data) => {
	//         const filter = data.length;
	//         console.log('filter🔥🔥🔥🔥🔥', filter);
	//         const block = data[filter];
	//         console.log('block:', block);
	//         $('#ajax').prepend(`<h1 class="center-align">${block.count}</h1>`);
	//     }
	// });
	//});
	get(name);
});

/////////////////////************POST REQUEST  ***************//////////////////////

const run = async (name) => {
	$.ajax({
		type: 'POST',
		url: '/post',
		data: {
			count: name
		},
		success: () => {}
	});
};

/////////////////////************PUT / UPDATE REQUEST  ***************//////////////////////

// const run = async (name) => {
// 	$.ajax({
// 		type: 'POST',
// 		url: '/update/1',
// 		data: {
// 			count: name
// 		},
// 		success: () => {}
// 	});
// };

/////////////////////************DELETE REQUEST  ***************//////////////////////

// const run = async (name) => {
// 	$.ajax({
// 		type: 'POST',
// 		url: '/delete/2',
// 		success: () => {}
// 	});
// };

/////////////////////************SET INTERVAL TEST REQUEST  ***************//////////////////////

// setInterval(() => {
// 	$.ajax({
// 		type: 'GET',
// 		url: '/get',
// 		success: (data) => {
// 			data.forEach((block) => {
// 				$('#ajax').append(`<h1 class="center-align">${block.count}</h1>`);
// 			});
// 		}
// 	});
// }, 1000);

/////////////////////************GET ALL DATA REQUEST  ***************//////////////////////

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: '/query/222',
		success: (data) => {
			console.log('data:', data.length);
			data.forEach((block) => {
				$('#ajax').prepend(
					`<h1 class="center-align">THE ID IS ${block.id} && COUNT ${block.count}</h1>`
				);
			});
		}
	});
});

const get = async (name) => {
	setTimeout(() => {
		$('#ajax').html('');
		$.ajax({
			type: 'GET',
			url: `/query/${name}`,
			success: (data) => {
				console.log('data:', data.length);
				data.forEach((block) => {
					$('#ajax').prepend(
						`<h1 class="center-align">THE ID IS ${block.id} && COUNT ${block.count}</h1>`
					);
				});
			}
		});
	}, 1000);
};

setInterval(() => {
	$('#ajax').html('');
	$.ajax({
		type: 'GET',
		url: `/get`,
		success: (data) => {
			console.log('data:', data.length);
			data.forEach((block) => {
				$('#ajax').prepend(
					`<h1 class="center-align">THE ID IS ${block.id} && COUNT ${block.count}</h1>`
				);
			});
		}
	});
}, 5000);

/////////////////////************GET RECENTLY UPDATED  DATA REQUEST  ***************////////////////

// const get = async () => {
// 	setTimeout(() => {
// 		$.ajax({
// 			type: 'GET',
// 			url: '/get',
// 			success: (data) => {
// 				const filter = data.length;
// 				const filter2 = parseInt(filter - 1);
// 				console.log('filter🔥🔥🔥🔥🔥', filter);
// 				const block = data[filter2];
// 				console.log('block:', block);
// 				if (block) {
// 					$('#ajax').prepend(
// 						`<h1 class="center-align">THE ID IS ${block.id} && COUNT ${block.count}</h1>`
// 					);
// 				}
// 			}
// 		});
// 	}, 500);
// };
