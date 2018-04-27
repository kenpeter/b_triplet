
function beautifulTriplets(d, arr) {
	var diff = d;
	var twoDiff = 2*d;
	var len = arr.length;	

	var item;
	var item1;
	var bigDiff;
	var count = 0;

	for(var i=len-1; i>0; i--) {
		item = arr[i];

		for(var j=i-1; j>=0; j--) {
			item1 = arr[j];

			bigDiff = item - item1;
			if(bigDiff <= twoDiff) {
				if(bigDiff == twoDiff) {
					count++;		
				} else {
					// con next element in this loop
					continue;
				}
			} else {
				// bigger
				break;
			}
		}// end loop
	} // end loop

	return count;	
}


var d = 3;
var arr = [ 1, 2, 4, 5, 7, 8, 10 ];
//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = beautifulTriplets(d, arr);
console.log(out);
