const cars = [
  {
    id: 1,
    brand: "Porsche",
    model: "911",
    color: "Black",
    year: "2020",
    price: "$ 600.000.000",
  },
  {
    id: 2,
    brand: "Porsche",
    model: "Cayman 718",
    color: "Red",
    year: "2020",
    price: "$ 400.000.000",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "Cayenne",
    color: "White",
    year: "2020",
    price: "$ 25.000.000",
  },
  {
    id: 4,
    brand: "Hummer",
    model: "H3",
    color: "Blue",
    year: "2003",
    price: "$ 300.000.000",
  },
  {
    id: 5,
    brand: "Aston Martin",
    model: "Vantage",
    color: "Gray",
    year: "2020",
    price: "$ 900.000.000",
  },
];
let editingCar = false;

function printCars() {
  const tableBody = document.getElementById("cars-table-body");
  tableBody.innerHTML = "";
  cars.forEach((car) => {
    const td = `<tr class="text-center">
                        <td>
                        <i class="fas fa-car"></i>
                        </td>
                        <td>
                            ${car.brand}
                        </td>
                        <td>
                            ${car.model}
                        </td>
                        <td>
                            ${car.color}
                        </td>
                        <td>
                            ${car.year}
                        </td>
                        <td>
                            ${car.price}
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="removeCar(${car.id})">
                                Eliminar
                            </button>
                            <button class="btn btn-outline-light" onclick="editCarButton(${car.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`;
    tableBody.innerHTML += td;
  });
}

function submitCar() {
  if (editingCar) {
    editCar();
  } else {
    addCar();
  }
}
function editCar() {
  
  editingCar.brand = document.getElementById("brand").value;;
  editingCar.model = document.getElementById("model").value;;
  editingCar.price = document.getElementById("price").value;;
  editingCar.year = document.getElementById("year").value;;
  editingCar.color = document.getElementById("color").value;;
  printCars();
  editingCar = false;
  clearForm();
}
function editCarButton(id) {
  const car = cars.find((car) => car.id === id);
  document.getElementById("brand").value = car.brand;
  document.getElementById("model").value = car.model;
  document.getElementById("price").value = car.price;
  document.getElementById("year").value = car.year;
  document.getElementById("color").value = car.color;
  editingCar = car;
}

function addCar() {
  const newCar = {
    id: cars.length + 1,
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    color: document.getElementById("color").value,
    year: document.getElementById("year").value,
    price: document.getElementById("price").value,
  };

  cars.push(newCar);
  printCars();
  clearForm();
}
function removeCar(id) {
  const position = cars.findIndex((car) => car.id === id);
  cars.splice(position, 1);
  printCars();
}
function clearForm(){
    document.getElementById('brand').value = '';
    document.getElementById('model').value ='';
    document.getElementById('color').value ='';
    document.getElementById('year').value ='';
    document.getElementById('price').value ='';
}
printCars();
