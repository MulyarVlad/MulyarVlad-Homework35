function displayData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const sex = document.querySelector('input[name="sex"]:checked').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const languages = document.querySelectorAll('input[name="lang"]:checked');
  const langArray = [];
  for (let i = 0; i < languages.length; i++) {
    langArray.push(languages[i].value);
  }

  const table = document.createElement('table');
  table.classList.add('table');

  const tbody = document.createElement('tbody');

  const row1 = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.appendChild(document.createTextNode('Full Name'));
  const td1 = document.createElement('td');
  td1.appendChild(document.createTextNode(name));
  row1.appendChild(th1);
  row1.appendChild(td1);

  const row2 = document.createElement('tr');
  const th2 = document.createElement('th');
  th2.appendChild(document.createTextNode('Age'));
  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode(age));
  row2.appendChild(th2);
  row2.appendChild(td2);

  const row3 = document.createElement('tr');
  const th3 = document.createElement('th');
  th3.appendChild(document.createTextNode('Sex'));
  const td3 = document.createElement('td');
  td3.appendChild(document.createTextNode(sex));
  row3.appendChild(th3);
  row3.appendChild(td3);

  const row4 = document.createElement('tr');
  const th4 = document.createElement('th');
  th4.appendChild(document.createTextNode('City'));
  const td4 = document.createElement('td');
  td4.appendChild(document.createTextNode(city));
  row4.appendChild(th4);
  row4.appendChild(td4);

  const row5 = document.createElement('tr');
  const th5 = document.createElement('th');
  th5.appendChild(document.createTextNode('Address'));
  const td5 = document.createElement('td');
  td5.appendChild(document.createTextNode(address));
  row5.appendChild(th5);
  row5.appendChild(td5);

  const row6 = document.createElement('tr');
  const th6 = document.createElement('th');
  th6.appendChild(document.createTextNode('Languages'));
  const td6 = document.createElement('td');
  td6.appendChild(document.createTextNode(langArray.join(', ')));
  row6.appendChild(th6);
  row6.appendChild(td6);

  tbody.appendChild(row1);
  tbody.appendChild(row2);
  tbody.appendChild(row3);
  tbody.appendChild(row4);
  tbody.appendChild(row5);
  tbody.appendChild(row6);

  table.appendChild(tbody);

  const tableContainer = document.querySelector('.table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
}
