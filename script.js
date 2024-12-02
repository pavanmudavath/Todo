const inputText=document.getElementById("text");
const addButton=document.getElementById("add");
const list=document.getElementById("list");

function addTodoItem(){
    const text=inputText.value.trim();
    if(text){

        const li = document.createElement('li');
        li.className="todo-item";
        li.textContent=text;

        //Done(Tick mark) function...
        const tickMark=document.createElement('button');
        tickMark.textContent="Done";
        tickMark.addEventListener("click",()=>{
            li.style.textDecoration="line-through";
            tickMark.disabled=true; 
        })
        li.appendChild(tickMark);

        //Undo button.
        const undo=document.createElement('button');
        undo.textContent="Undo";
        undo.addEventListener("click",()=>{
            li.style.textDecoration="";
            tickMark.disabled=false;
        })
        li.appendChild(undo);


        //All About Delete function...
        const delButton=document.createElement('button');
        delButton.textContent="Del";
        delButton.addEventListener("click",()=>{
            list.removeChild(li);
        })
        li.appendChild(delButton);


        list.appendChild(li);
        inputText.value="";
    }else{
        alert("Please enter the some text.");
    }
}
//Enter button in keyboard also works insted of the Add we can also use it.
addButton.addEventListener("click",addTodoItem);
inputText.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        addTodoItem();
    }
});



    //This is works fine if you enter the nothing and hit the add button it's gona throw the alert message.
    //But when you just enter the  spaces then enter then it's creates the empty list. so for that need to use the Trim()

    // console.log(inputText.value);
    // if(inputText.value===""){
    //     alert("Enter the ToDO Item");
    // }else{
    // const li=document.createElement("li");
    // li.textContent=inputText.value;
    // list.appendChild(li);
    // inputText.value="";
    // }



    //Qoute of the Day.
    // const record =document.getElementById("record");
    // const play =document.getElementById("play");
    // const pause=document.getElementById("reset");
    // const reset=document.getElementById("reset");
 

//How to turn on the microphone of the computer from javascript.
//How to how to store that recorded audio in this  localStorage for temperary asap.
//from store to play
//pay to pause 
//reset allow again to restart the paly.


//AI CODE these is 

let mediaRecorder;
        let audioChunks = [];
        const audioElement = document.getElementById('audio');
        const recordingStatus = document.getElementById('recordingStatus');

        document.getElementById('record').onclick = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = []; // Reset chunks for new recording

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result;
                    localStorage.setItem('quoteAudio', base64data); // Store in localStorage
                };
                recordingStatus.textContent = ""; // Clear recording status
                document.getElementById('stop').disabled = true; // Disable stop button
            };

            mediaRecorder.start();
            recordingStatus.textContent = "Recording... (Click 'Stop' to finish)";
            document.getElementById('stop').disabled = false; // Enable stop button

            // Automatically stop recording after a maximum duration (e.g., 15 seconds)
            setTimeout(() => {
                if (mediaRecorder && mediaRecorder.state === "recording") {
                    mediaRecorder.stop();
                }
            }, 15000); // Set this to 5000, 10000, or 15000 ms as needed
        };

        document.getElementById('stop').onclick = () => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
                mediaRecorder.stop(); // Stop recording manually
            }
        };

        document.getElementById('play').onclick = () => {
            const audioData = localStorage.getItem('quoteAudio');
            if (audioData) {
                audioElement.src = audioData;
                audioElement.play();
            }
        };

        document.getElementById('pause').onclick = () => {
            audioElement.pause();
        };

        document.getElementById('reset').onclick = () => {
            audioElement.pause();
            audioElement.currentTime = 0; // Reset playback position
            localStorage.removeItem('quoteAudio'); // Clear stored audio
        };

    


