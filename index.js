//console.log('connected');

const baseURL = 'https://api.spacexdata.com/v4/launches/latest';

const search = document.getElementById('space');
const spaceShips = document.querySelector('ul');

search.addEventListener('click', fetchSpace);

function fetchSpace(e) {
  event.preventDefault(e);
  //console.log("form was submitted");

  /**
   * fetch starts the process of fetching a resource from a 
   * network and that fetch returns a promise which is fulfilled once the response is available
   */
  
  //fetch starts the process of fetching a resource from a network and that fetch returns a promise which is fulfilled once the response is available
  fetch(baseURL)
    .then( data => { 
      
      return data.json();
    })
    .then(json => {
      //console.log(json);
      display(json);
    })
    .catch(err => console.log(err));
}

function display(passedData){
  //element creation
    let spaceContent = document.getElementById('content-container');
    let contentHeader = document.createElement('h2');
    let listParagraph = document.createElement('p');
    let contentInformation = document.createElement('div');
    let informationHeader = document.createElement('h2');
    let informationList = document.createElement('ul');
    let youtubeListItem = document.createElement('li');

    //element assignments
    contentHeader.innerText = 'More SpaceX Stuff!';
    listParagraph.innerText = passedData.details;
    informationHeader.innerText = 'More Information';
    //youtubeListItem.src = passedData.links.webcast;
    youtubeListItem.innerText = passedData.links.webcast;

    //DOM Tree Navigation and relationships
    spaceContent.appendChild(contentHeader);
    spaceContent.appendChild(contentInformation);
    contentHeader.appendChild(listParagraph);
    contentInformation.appendChild(informationHeader);
    contentInformation.appendChild(informationList);
    informationList.appendChild(youtubeListItem);

    
    
}