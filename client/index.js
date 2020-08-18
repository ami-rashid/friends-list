async function defineFriends() {
    try {
      const myForm = document.getElementById('myForm');
      myForm.addEventListener('submit', function(name) {
        name.preventDefault();

        const formData = new FormData(this);

        fetch('/api', {
          method: 'post',
          body: formData
        }).then(function(response) {
          return response.json();
        }).then(function(json) {

        })
      });

      const result = await fetch('/api')
      const data = await result.json();

      data.forEach(obj => {
        const friends = document.getElementById("friendsList");
        const li = document.createElement('li')
        const list = `
        <strong>${obj.name}</strong><br>
        <p>${obj.rating}</p>
        <button type="button" onclick="alert('Rank up!')">+</button>
        <button type="button" onclick="alert('Rank down!')">-</button>
        <button type="button" onclick="confirm('⚠️ This user will be permanently deleted.')">x</button>
        `
        li.innerHTML = list;
        friends.append(li);
      })

    } catch (error) {
      console.error(error);
    }
  }

  defineFriends();