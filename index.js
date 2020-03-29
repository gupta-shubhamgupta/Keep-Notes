$( document ).ready(function() {	
	showNotes();
addBtn=document.getElementById('addBtn');
shubham.addEventListener("click",function(e){
	//anything whatever we store in local stroage will save as a string 
	addTxt=document.getElementById('addTxt');
	notesFromLocalStroageInStringForm=localStorage.getItem("storedNotesInStringForm");//notesFromLocalStroageInStringForm is a key in String Form
	if(notesFromLocalStroageInStringForm==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notesFromLocalStroageInStringForm);//Parse convert string into array
	}
	if(addTxt.value!=""){
	notesObj.push(addTxt.value);
	localStorage.setItem("storedNotesInStringForm",JSON.stringify(notesObj));
	addTxt.value="";
	}
	showNotes();
})

 function showNotes(){
	notesFromLocalStroageInStringForm=localStorage.getItem("storedNotesInStringForm");
	if(notesFromLocalStroageInStringForm==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notesFromLocalStroageInStringForm);
	}
	htmlContent="";
	notesObj.forEach(function(element, index){
		htmlContent += `
	        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element}</p>
                <button  onclick="deleteNote(${index})" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
		
	});
	notesElm=document.getElementById('notes');//this notes belong to div
	if(notesObj.length!=0){
		notesElm.innerHTML=htmlContent;
	}
	else{
		
		notesElm.innerHTML='Noting to Show....Please Add Notes';
	}
}


});


function deleteNote(index){
	console.log("kkk",index);
	
	notesFromLocalStroageInStringForm=localStorage.getItem("storedNotesInStringForm");
	if(notesFromLocalStroageInStringForm==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notesFromLocalStroageInStringForm);
	}
	notesObj.splice(index,1);
	localStorage.setItem("storedNotesInStringForm", JSON.stringify(notesObj));
	window.location.reload();
	
}









