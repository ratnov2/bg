let ket = document.querySelectorAll('.description');
let span = document.querySelectorAll('span');
let table = document.querySelector('.table');
let button = document.querySelector('button');

table.addEventListener('click', (e) => {


  console.log(e.target.tagName);
  if (e.target.tagName == 'SPAN') {

    let kot = e.target.nextElementSibling.style.height;
    func();

    //console.log(kot);

    if (!(kot == '')) {
      i

      console.log('egeg');
    }



    e.target.nextElementSibling.style.height = '0';
    e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    //= e.target.nextElementSibling.style.height;
    e.target.style.backgroundColor = '#007FFF';
    e.target.style.color = '#ffffff';
    // console.log(kot);


  }

})

function func() {
  for (let i = 0; i < ket.length; i++) {
    ket[i].style.height = '';
    span[i].style.backgroundColor = "";
    span[i].style.color = "";
  }
}