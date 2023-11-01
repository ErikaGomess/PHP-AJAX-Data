$(document).ready(function(){
    
    var btn_users = $("#btn-users");
    var div_users = $("#div-users");
    var div_user = $("#div-user")
    var form_user = $("#form-user");
    
    
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
    
    
    
    btn_users.on('click', function(){
      
       $.ajax({
           url: 'public/ajax/user.php',
           type: 'POST',
           data:form_user.serialize(),
           dataType: 'json',
           beforeSend: function(){
               
               div_user.html('carregando...');
               
           },
           sucess: function(response){
               
                console.log(response);
                
                if(response === 'cadastrado'){
                    div_user.html('Cadastrado com sucesso');
                }
           }
       });
       
    });
    
});


/**      Outra forma de usar o get
$.get("public/ajax/user.php",{name:'erika', idade:23}, function(response){
            div_users.html(listarUser(response));
       },'json');*/



/*exemplo de uma forma de usar post
 * $.post("public/ajax/user.php", form_user.serialize()).done(function(response){
           console.log(response);
       }).fail(function(){
           console.log('erro');
       });
 */