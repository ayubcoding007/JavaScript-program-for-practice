fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let users = data.slice(0, 10).map(function(user) {
      return {
        name: user.name,
        username: user.username,
        city: user.address.city
      };
    });

    console.log(users);
  })
  .catch(function(error) {
    console.log(error);
  });