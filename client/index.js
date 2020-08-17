async function defineFriends() {
    try {
      const result = await fetch('/api')
      const data = await result.json();
    
      data.friends.forEach(obj => {
        let friend = document.getElementsByClassName("friendList");
        let option = document.createElement('li')
        option.innerHTML = obj.name;
        friend.append(option);
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  defineFriends();