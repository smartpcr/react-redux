export default function (state = null, action) {
	console.log('reducer called ' + action.state);
	switch (action.state) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	
	return state;
}