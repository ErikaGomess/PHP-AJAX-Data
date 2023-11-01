window.onload = function(){
    
    var btn_users = document.querySelector("#btn-users");
    var div_users = document.querySelector("#div-users");
    var div_create = document.querySelector("#div-create");
    var div_buscar = document.querySelector("#div-buscar");
    var form_cadastrar = document.querySelector("#form-cadastrar");
    var form_buscar = document.querySelector("#form-buscar");
    
    function listarUser(users){
        
        var table = `<table class='table table striped'>`;
                
                
            table += `<thead><tr><td>ID</td><td>Name</td><td>Email</td></tr></thead>`;
                
            table += '<tbody>';
                
            users.forEach(function(user){
                    
                 table += `<tr>`;
                    
                 table += `<td>${user.id}</td>`;
                    
                 table += `<td>${user.name}</td>`;
                    
                 table += `<td>${user.email}</td>`;
                    
                 table += `</tr>`;
            });
                
            table += `</tbody>`;
            table += `</table>`;
                    
            return table;
                    
    }
  
   form_buscar.addEventListener('submit', function(event){
       
      event.preventDefault();
      
      var form = new FormData(form_buscar);
      
        xmlHttpPost('public/ajax/buscar', function(){
            
            beforeSend(function(){
                div_buscar.innerHTML = 'Aguarde, estamos buscando...';
            });
            
            sucess(function(){
               
                if(xhttp.responseText === 'nouser'){
                    console.log('erro');
                    div_buscar.innerHTML = 'Nenhum usuário encontrado';
                }else{
                    
                    var users = JSON.parse(xhttp.responseText);
                    
                    
                    
                    div_buscar.innerHTML = listarUser(users);;
                    
                }
            });
            
        },form);
   
   });
   
   form_cadastrar.onsubmit = function(event){
       
       event.preventDefault();
       
       var form = new FormData(form_cadastrar);
       
        xmlHttpPost('public/ajax/create', function(){
            
            beforeSend(function(){
              
               div_create.innerHTML = `<span class="sr-only">Loading...</span>`;
            });
            
            sucess(function(){
                
                var response = xhttp.responseText;
                
                if(response === 'cadastrado'){
                    
                    div_create.innerHTML = 'Cadastrado com sucesso';
                }
                
                if(response === 'erro'){
                    
                    div_create.innerHTML = 'Ocorreu um erro, tente novamente';
                }
                
            });
        },form);
   };
   
    
    btn_users.onclick = function(){
 
 
       xmlHttpGet('public/ajax/user', function(){
           
            beforeSend(function(){
                
               div_users.innerHTML = `<span class="sr-only">Loading...</span>` ;
               
            });
            
            
            sucess(function(){
              
                var users = JSON.parse(xhttp.responseText);
               
                
                div_users.innerHTML = listarUser(users);
                
            });
            
            error(function(){
                
                div_users.innerHTML = 'Ocorreu um erro';
            });
       });
        
    };
     
};
