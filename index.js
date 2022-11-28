const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
let names=[];

/*radom(['pawansubedi','ukesh lamsal','riyankhadka']);
function radom(arr){
    console.log(arr[fuck()]);
	console.log(arr[fuck()]);
	console.log(arr[fuck()]);
}

function fuck(){
return Math.floor(Math.random()*3)
}*/
/*
getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000),
  };
  console.log(newUser);
  addData(newUser);
}

function addData(obj){
	data.push(obj)
	updateDOM();
}
//double money
function doubleMoney(){
	data=data.map((user)=>{
		return {...user,money:user.money*2}
	})
	updateDOM();
}
//filter only millionaires
function showMillionaires() {
	data = data.filter((user) => user.money > 1000000);
	updateDOM();
  }

//sort by the richest
function sorttherichest(){
	data=data.sort((a,b)=> b.money-a.money);
	updateDOM();
}
//calculate total wealth
function totalwealth(){
    const wealth=data.reduce((a,b)=>(a+b.money),0);
	console.log(wealth)
	const wealthelement=document.createElement('div');
	wealthelement.innerHTML=`<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>`;
	main.appendChild(wealthelement)
   // updateDOM();
}
function updateDOM(providedData=data){
	main.innerHTML='<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach(item=>{
		const element=document.createElement('div');
		element.classList.add('person');
		element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`
		main.appendChild(element);
	})
}
function formatMoney(number){
	return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
*/


//data.push(name_list)
//console.log(data);


// it pushed the name_wealth obj  in an array form
function name_wealth(){
	const name_list=['pawan subedi','riyankhadka','subashshrestha','ramila shrestha','pranil basnet']
    const wealth_list=[1000,2000,3000,4000,5000]
	const name_wealth={
		random_list:name_list[randoms()],
		random_wealth:wealth_list[randoms()],
	}
	
	names.push(name_wealth);
	console.log(names)
	main_file()
}

//it is the main file  
function main_file(){
	
	
	
	document.getElementById('main').innerHTML=`<h2><strong>Person</strong>Wealth</h2>`
	 
	
	names.forEach((item)=>{
			const newelement=document.createElement('div');
			newelement.innerHTML=`<h2><strong>${item.random_list}</strong>${item.random_wealth}</h2>`;
			main.appendChild(newelement);
		
		//doublemoney(name_wealth)
	})
	
	//document.getElementById('main').innerHTML=x
	
}
//it generates the random number from 1 to 5
function randoms(){
    return Math.floor(Math.random()*5);
}
//this function doubles the money and the main_file update it.
function doublemoney(){
	names=names.map((user)=>{
		return {...user,random_wealth:user.random_wealth*2}
	});
    
	main_file();
	
	
}
//It filter out the money greater then 3000
function filter_money(){
	names=names.filter((item)=>item.random_wealth>3000);
	console.log(names);
	main_file();
}
//it sort the number first which is greater in value
function sort_the_richest(){
	names=names.sort((a,b)=>{
		return b.random_wealth-a.random_wealth
	})
	main_file();
}

function calculate_entire_wealth(){
	const wealth=names.reduce((a,b)=>a+b.random_wealth,0);
	const wealthelement=document.createElement('div');
	wealthelement.innerHTML=`<h3>Total Wealth:<strong>${wealth}</strong></h3>`;
	main.appendChild(wealthelement)

}

// updateDOM();
/*
function doubleMoney(){
	data=data.map((user)=>{
		return {...user,money:user.money*2}
	})
	updateDOM();
}*/
/*
// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000),
  };
  console.log(newUser);
  addData(newUser);
}

function addData(obj){
	data.push(obj)
	updateDOM();
}
//double money
function doubleMoney(){
	data=data.map((user)=>{
		return {...user,money:user.money*2}
	})
	updateDOM();
}
//filter only millionaires
function showMillionaires() {
	data = data.filter((user) => user.money > 1000000);
	updateDOM();
  }

//sort by the richest
function sorttherichest(){
	data=data.sort((a,b)=> b.money-a.money);
	updateDOM();
}
//calculate total wealth
function totalwealth(){
    const wealth=data.reduce((a,b)=>(a+b.money),0);
	console.log(wealth)
	const wealthelement=document.createElement('div');
	wealthelement.innerHTML=`<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>`;
	main.appendChild(wealthelement)
   // updateDOM();
}
function updateDOM(providedData=data){
	main.innerHTML='<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach(item=>{
		const element=document.createElement('div');
		element.classList.add('person');
		element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`
		main.appendChild(element);
	})
}
function formatMoney(number){
	return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
*/
addUserBtn.addEventListener('click',name_wealth);
doubleBtn.addEventListener('click',doublemoney);
showMillionairesBtn.addEventListener('click',filter_money);

sortBtn.addEventListener('click',sort_the_richest);
calculateWealthBtn.addEventListener('click',calculate_entire_wealth)
