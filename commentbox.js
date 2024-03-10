


   

    document.getElementById('post').addEventListener('click', function(){

        const newcomments = document.getElementById('newcomment')
        
        const comment = newcomments.value;

        const cmntcontainer = document.getElementById('cmntcontainer');

        const p = document.createElement('p');

        p.innerText = comment;

        cmntcontainer.appendChild(p);

        newcomments.value= '';

        




    })