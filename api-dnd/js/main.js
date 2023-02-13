//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          let ul = document.querySelector('ul').innerText = ''
          document.querySelector('h2').innerText = data.name
        //   document.querySelector('h3').innerText = data.classes
        //   console.log(data.classes)
        //   console.log(data.subclasses)
          data.subclasses.forEach( obj => {
            console.log(obj.name)
            //create li on 
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.name
            //append li to ul
            document.querySelector('ul').appendChild(li)
        })

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

