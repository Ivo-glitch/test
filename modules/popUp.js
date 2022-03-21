/*  createPopUp() se importa dentro de index.js para
    crear el pop up con el evento "click".
    Dentro del script que esta dentro de createPoUp()
    se encuentra la funcion que le da valor al contador 
    de visualizaciones de las imagenes impares
*/

let params = `scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
width=800,height=400,left=250,top=100`;

function createPopUp(srcValue,altValue,id){
    console.log(srcValue+" y ")+ altValue
    window.open("/","images", params)
        .document.write(`
            <style>
                img{
                    width:100%; 
                    height:100%;
                    
                }
            </style>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            
            <img class="position-relative" src=${srcValue} alt=${altValue}>
            <div class="position-absolute bottom-0 start-50 translate-middle-x">
                <button type="button" class="btn btn-success" id="success">OK</button>
                <button type=" button" class="btn btn-danger" id="close" >Cerrar</button>
            </div>

            <script type="text/javascript">
                
                const idClose = document.getElementById("close")
                const idSuccess = document.getElementById("success")
                let id = ${id}
                console.log(id)
                
                idClose.addEventListener("click",closeWindow)

                idSuccess.addEventListener("click",closeAfterOk)

                function closeAfterOk(){
                    let principalWindow = window.opener.document.getElementById(${id}).innerHTML;
                    let valuePrincipalWindow = parseInt(principalWindow);
                    let newValue = valuePrincipalWindow + 1;
                    window.opener.document.getElementById(${id}).innerHTML = newValue
                    closeWindow();
                    
                }

                function closeWindow(){
                    window.close();
                }

                

            </script>
        `);
}

export { createPopUp };