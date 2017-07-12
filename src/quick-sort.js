'use strict';

function quickSort(input) {
    if(input.length==0 || input.length==1)
    return input;

    if(typeof input[1]=="number")
    {
    return quickSortArray(input, 0, input.length-1);
    }
    else 
    return input.sort() ;
};
function  quickSortArray(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	/* partition */
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}	}

	/* recursion */
	if (left <= j)
		quickSortArray(arr, left, j);
	if (i <= right)
		quickSortArray(arr, i, right);
       console.log("Final Array"+arr);
	return arr;
};
module.exports = quickSort;