
//Buscando links salvos
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

//Salvando um link no localStorage
export async function saveLink(key, newLink){
  let linksStored = await getLinksSave(key);

  //Se já houver um link salvo com algum ID não duplicar
  const hasLink = linksStored.some( link => link.id === newLink.id)

  if(hasLink){
    console.log('Esse link já existe na lista!')
    return;
  }

  //Adicionar o link na lista...
  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log('Link salvo com sucesso!');

}