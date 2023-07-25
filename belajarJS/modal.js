tampilModal=()=> {
    document.getElementById('idModal').style.display='block';
}

tutupModal=()=>{
    document.getElementById('idModal').style.display ='none';
}

validate= ()=>{
    var username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;
            if(username== "Aldi" && password =="123"){
                alert("Pendaftaran berhasil");
            }else
                alert("Pendaftaran gagal");
            
}