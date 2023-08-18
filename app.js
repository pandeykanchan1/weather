let input=document.querySelector("#input");
let searchBtn=document.querySelector("#search");
let notFound=document.querySelector(".not_found");
let defBox=document.querySelector('.def');
let apikey='6478ebfe-8b50-4697-9a91-20ffcba54cc3 ';


searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    //get input data
  let word=input.Value;



    //call api get data
    if(word===""){
        alert("word is required");
        return;
    }
    getData(word);
})
 async function getData(word){
    //ajax call
   const response=await fetch(`https://www.dictionaryapi.com/api/v3/refeences/learners/json/${word}?
   key=${apikey}`);
   const data=await response.json();


   //if empty result

   if(!data.length){
    notFound.innerText='no result found';
    return;
   }
   //if result  is sugggetion

   if(typeof data[0]==='string' ){
    let heading=document.createElement('h3');
    heading.innerText='did you mean?'
    notFound.appendChild(heading);
    data.forEach(element => {
      let sugggetion=document.createElement('span');
      sugggetion.classList.add('suggested');
      sugggetion.innerText=element;
      notFound.appendChild(sugggetion)
    });
    return;

   }
   //result found
   let definition=data[0].shortdef[0];
   defBox.innerText=definition;


   //sound
   //const soundName=data[0].hwi.prs[0].sound.audio;
   //if(soundName){
    //renderSound(soundName);
   //}




   console.log(data);
}

