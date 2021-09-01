let arrData = [
  					[15,45,30,9,5,45],
  					[8,6,25,4,9,20],
    				[50,8,6,7,60,9,9],
    				[10]
				];
        function summOfSecondLargestNumber(arr){
		        let sum = 0;
    				for(let i =0; i < arr.length; i++){
            		if(arr[i].length === 0){
                		
                } else if(arr[i].length === 1){
                			sum = sum + arr[i][0];
                } else {
                		let array = findUniqueValues(arr[i]);
                    let sortedArr = sortArray(array);
                    sum = sum + sortedArr[sortedArr.length-1];
                }
            }    
        		return sum;
        }
        function findUniqueValues(arr){
        				let array = [];
                 for(let m = 0; m < arr.length; m++){
                   if(array.indexOf(arr[m]) === -1){
                     		array.push(arr[m]);
                    }
                }
                return array;
        }
        function sortArray(array){
        			for(let j = 0; j < array.length; j++){
                    		for(let k = j; k < array.length; k++){
                    				if(array[k] > array[k+1]){
                            		let temp = array[k];
                                array[k] = array[k+1];
                                array[k+1] = temp;
                            }
                    		}
                    }
                    return array;
        }
        console.log(summOfSecondLargestNumber(arrData));
