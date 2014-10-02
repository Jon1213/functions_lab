//function_lab

//1
var Hello_Console=function(){
	console.log("Hello, World!");
}

//2
var Hello_You=function(name){
	console.log("Hello, " + name);
}

//3
var RHello_You=function(name){
	var str="Hello, " + name;
	return str;
}

//console.log(str);


//4
var add=function(n1,n2){
	return n1 + n2;
}
//console.log(add(1,4));
var sub=function(n1,n2){
	return n1 - n2;
}
//console.log(sub(3,2));
var combine=function(n1,n2,arith){
	if(arith){
		return add(n1,n2);
	}
	else{
		return sub(n1,n2);
	}
}
//console.log(combine(4,5,false));

//5
var calls={value:0};
var functionChanger=function(fnc){
  calls.value++
  fnc.value++;
  return calls.value;
}
//console.log(functionChanger(calls));

//b1
var isPrime=function(num){
	var prime = true;
	for(i=2;i<num;i++){
		if(num % i == 0){
			prime = false;
		}
	}
	return prime;
}


//b2
var merge=function(arr1,arr2){
	final_len = arr1.length + arr2.length;
	new_arr = [];
	j=0; //arr1 position counter
	k=0; //arr2 position counter

	for(i = 0; i < final_len; i++){
		if(arr1[j] < arr2[k]){
			new_arr.push(arr1[j]);
			j++;
		}
		else{
			new_arr.push(arr2[k]);
			k++;
		}
	}
	return new_arr;
}
//console.log(merge([3,3,4], [1,2,3,4,5,7]));

//b3
var letterCount=function(str){
	var res_obj = {};
	str = str.toLowerCase();
	var res = str.split("");

	for(i=0; i < res.length; i++){
		if(typeof(res_obj[res[i]]) != 'undefined' ){
			res_obj[res[i]]++;
		}
		else{
			res_obj[res[i]] = 1;
		}
	}
	return res_obj;
}
//console.log(letterCount("hhhuuhh"));