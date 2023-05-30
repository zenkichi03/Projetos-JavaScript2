const abarcaCodigo = window.onload = function(){
    //função que possui um parâmetro que será sobrescrito com o json cujos dados referem-se ao CEP informado no campo CEP.
    function consultaJson (jsonDeEndereco){
        //como o json possui a sintaxe análoga a de um objeto em JS, será necessário usar um for in, onde será feita a
        //leitura de todos os fatores do json.
        for (let dado in jsonDeEndereco){
            //caso algum fator json tenha o NOME IGUAL ao de um elemento definido no HTML, entra-se no escopo do if
            if(document.querySelector(`#${dado}`)){
                //este elemento HTML passará a ter o valor do elemento json de mesmo nome.
                document.querySelector(`#${dado}`).value = jsonDeEndereco[dado];
            }
        }
    }
    
    async function buscarPorCep(cepInformado){
        let link = `https://viacep.com.br/ws/${cepInformado}/json`;
        let fetchLink = await fetch(link);
        let jsonFetch = await fetchLink.json();
            //aqui, o parâmetro jsonDeEndereco é sobrescrito por jsonFetch, que transforma dados adquiridos por meio de um
            //método fetch em um json.
        consultaJson(jsonFetch);        
    }    
    const cep = document.querySelector("#cep");
    const buscar = document.querySelector("#buscar");
    buscar.addEventListener('click', function(){
        //execução da função buscarPorCep, onde o valor de cep informado pelo usuário será incorporado à url da função anterior,
        //onde seus dados serão retornados em um json.
        buscarPorCep(cep.value);
    })
}
export { abarcaCodigo };