function getFormvalue() {
    //Write your code here
	const inps=document.querySelectorAll("input");
	
	
	
	let form=document.querySelector("form");
	form.addEventListener('submit', (e)=>{
			e.preventDefault();
		let innerT1="";
		inps.forEach((val)=>{
			if(val.type=="text"){
			innerT1=innerT1+" " +val.value;
			}
		})
				alert(innerT1.trim())
			
		})
}
getFormvalue()
