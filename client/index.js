async function defineFriends() {
    try {
      
      //Adding seeded data to webpage
      const result = await fetch('/api')
      const data = await result.json();

      data.forEach(obj => {
        const friends = document.getElementById("friendsList");
        const li = document.createElement('li')
        const list = `
        <strong>${obj.name}</strong><br>
        <p>${obj.rating}</p>
        <button id="rankUp${obj.name}" type="submit">+</button>
        <button id="rankDown${obj.name}" type="submit">-</button>
        <button id="delFriend${obj.name}" type="submit">x</button>
        `
        li.innerHTML = list;
        friends.append(li);
      })

      //Creating new user
      const myForm = document.getElementById('myForm');
      myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = event.target.fname.value;
        const currentFriends = data.map(obj => obj.name)

        if(name === ''){
          alert('Please enter a valid name.')
        } else if (currentFriends.includes(name)) {
          alert('Name already exists! Please enter a valid name.')
        } else {
          fetch('/api', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name}),
          }).then(res => res.json())
        }
      });

      //Update user's rank
      const rankUp = document.getElementById('rankUp');
      rankUp.addEventListener('click', (event) => {
            let data = data.rating;
            rating+=1;   
            fetch('/api/'+ name, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: rating
                })
            }) 
      })

      const rankDown = document.getElementById('rankUp');
      rankDown.addEventListener('click', (event) => {
            let data = data.rating;
            rating-=1;   
            fetch('/api/'+ name, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: rating
                })
            }) 
      })
      
      //Deleting a user
      const deleteUser = document.querySelector('strong');
      deleteUser.addEventListener('click', function(event) {
        event.preventDefault();
        
        const deletedPerson = event.target.remove();

        fetch('/api', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({deletedName}),
        }).then(res => res.json())
        });



    } catch (error) {
      console.error(error);
    }
  }

  defineFriends();