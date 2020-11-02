let count = 0;
function someChange(e){
    
    let x = e.target.id
    if(count%2 === 0){
        document.getElementById(x).style.backgroundColor = 'red';
        count++;
        console.log(count)
    }
    else{
        document.getElementById(x).style.backgroundColor = 'black';
        count++;
        console.log(count)
    }
    
   
}


export default someChange;