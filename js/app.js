
//Cambio de estilo a los li
//Referncias al HMTML
//===Formulario
const filtro = document.querySelector('#filtro');

const formulario = document.querySelector('#formulario');
      tarea = formulario.tarea;
//Selecionamos la lista
const lista = document.querySelector('#items');

    const inicializar = ()=>{
        tarea.value='';
    }
    const style = ()=>{
        const itemsImpar= document.querySelectorAll('li:nth-child(odd)'),
              itemsPar = document.querySelectorAll('li:nth-child(even)');

             itemsImpar.forEach(element => {
                element.style.background ='#A89E9E';
            });
            
            itemsPar.forEach(element => {
                element.style.background ='#E8E3E3';
            });
    }
    const agregarContenido = (e)=>{
         e.preventDefault();
         if(tarea.value==='')
         {
            tarea.classList='inputText';
         }else{
            tarea.classList='';
            let itemText = tarea.value;
            let li = document.createElement('li');
                li.classList='tareas';
                li.innerText=itemText;
                lista.append(li);
           
           let createButton = document.createElement('button');
               createButton.classList='boton eliminar';
               createButton.innerText='X';
               li.append(createButton);
               style();
               inicializar();
         }
    }
    //creamos el metodo para eliminar itemn de la lista
    const deleteItem=(e)=>{
       e.preventDefault();
       if(e.target.classList.contains('eliminar'))
       {
           //seleccion al padre del del boton
         let li = e.target.parentElement;
         //Ahora removemos de como es hijo de la lista
         lista.removeChild(li);
       }
    }

     const buscarTarea=(e)=>{
         e.preventDefault();
         let texto= filtro.value.toLowerCase();
         let items = document.getElementsByTagName('li');
         let conversion = Array.from(items);
         conversion.forEach(element => {
             let itemNombre = element.firstChild.textContent;
             if(itemNombre.toLocaleLowerCase().indexOf(texto) !=-1)
             {
                element.style.display='block';
             }else{
                 element.style.display='none';
             }
         });
         
     }

    filtro.addEventListener('keyup',buscarTarea);

    formulario.addEventListener('submit',agregarContenido);
    lista.addEventListener('click', deleteItem);


