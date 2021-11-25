let c1 = {
    name: "Cinema 1",
    location: "north edsa",
    capacity : 500,
  }
  function show(movie) {
    console.log(`${this.name} is showing ${movie}`);
  }
  
  show.call(c1, "End Game");