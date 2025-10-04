function change_btn(){
    let mic_btn = document.getElementById('send-btn-mic');
    let send_btn = document.getElementById('send-btn-send');
  console.log("click")
  if (input.value != "") {
    mic_btn.style.display = "none";
    send_btn.style.display = "flex";
  }
  else{
mic_btn.style.display = "flex";
    send_btn.style.display = "none";
  }
}


