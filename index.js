t = document.getElementById('p')

function lp(n){
  for(let i = 0; i < n; i ++){
    read(i.stringify() + '.txt')
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    lp(parseInt(data, 10))
  }
}

read('pn.txt')
