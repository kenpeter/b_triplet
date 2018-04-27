process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function beautifulTriplets(d, arr) {
	// ai + d = aj
	// ai + 2d = ak

	var count = 0;
	var ai, aj, ak, condi1, condi2;
	for(var i=0; i<arr.length; i++) {
		ai = arr[i];
		condi1 = arr.indexOf(ai+d);

		if(condi1 !== -1) {
			condi2 = arr.indexOf(ai+2*d);

			if(condi2 !== -1) {
				count++;
			}
		}
	}	

	return count;
}




function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = beautifulTriplets(d, arr);
    process.stdout.write("" + result + "\n");

}

