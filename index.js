const tableBody = document.getElementById("table-body");
let selectedRow = null;

let tableData = [
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Caustic Potash",
    vendor: "Formosa",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 8751,
  },
  {
    chemicalName: "Dimethylaminopropylamino",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Barrel",
    packSize: 100.0,
    unit: "kg",
    quantity: 5964,
  },
  {
    chemicalName: "Mono Ammonium Phosphate",
    vendor: "Sinopec",
    density: 8435.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
  {
    chemicalName: "Ammonium persulfate",
    vendor: "LG chem",
    density: 3172.15,
    viscosity: 60.631,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495,
  },
];

function renderTable() {
  tableBody.innerHTML = "";
  tableData.forEach((data, index) => {
    const row = document.createElement("tr");
    row.dataset.index = index;
    row.innerHTML = `  
            <td>✔️</td>  
            <td style="border-right: 1px solid gray">${
              index + 1 + " " + data.chemicalName
            }</td>  
            <td>${data.vendor}</td>  
            <td style="border:1px solid gray">${data.density}</td>  
            <td style="border:1px solid gray">${data.viscosity}</td>  
            <td>${data.packaging}</td>  
            <td>${data.packSize}</td>  
            <td>${data.unit}</td>  
            <td style="border:1px solid gray">${data.quantity}</td>  
        `;
    row.addEventListener("click", () => {
      selectRow(row);
    });
    tableBody.appendChild(row);
  });
}

function selectRow(row) {
  if (selectedRow) {
    selectedRow.classList.remove("highlight");
  }

  selectedRow = row;
  row.classList.add("highlight");
  makeEditable(row);
}

function makeEditable(row) {
  selectedRow = row;
  const cells = row.querySelectorAll("td");
  cells.forEach((cell, cellIndex) => {
    cell[0] = "✔️";
    const currentVal = cell.innerHTML;
    const input = document.createElement("input");
    input.type =
      cellIndex === 3 || cellIndex === 4 || cellIndex === 6 || cellIndex === 8
        ? "number"
        : "text";
    cell.innerHTML = "";

    input.focus();
    input.select();
    cell.appendChild(input);
    input.value = currentVal;
  });
  row.classList.add("editing");
}

function saveRowData(row) {
  const cells = row.querySelectorAll("td");

  cells.forEach((cell, cellIndex) => {
    const input = cell.querySelector("input");
    if (input) {
      const newValue = input.value;
      cell.innerHTML = newValue;
      const fieldNames = [
        "id",
        "chemicalName",
        "vendor",
        "density",
        "viscosity",
        "packaging",
        "packSize",
        "unit",
        "quantity",
      ];
      tableData[row.dataset.index][fieldNames[cellIndex]] =
        cellIndex === 3 || cellIndex === 4 || cellIndex === 6 || cellIndex === 8
          ? parseFloat(newValue)
          : newValue;
    }
  });
}

function resetRow(row) {
  const cells = row.querySelectorAll("td");
  cells.forEach((cell, cellIndex) => {
    const input = cell.querySelector("input");
    if (input) {
      const fieldNames = [
        "id",
        "chemicalName",
        "vendor",
        "density",
        "viscosity",
        "packaging",
        "packSize",
        "unit",
        "quantity",
      ];
      cell.innerHTML = input.value;
      tableData[row.dataset.index][fieldNames[cellIndex]] = input.value;
    }
  });
  row.classList.remove("editing");
}

document.getElementById("add-row").onclick = function () {
  const newId =
    tableData.length > 0 ? tableData[tableData.length - 1].id + 1 : 1;
  const newData = {
    id: newId,
    chemicalName: "",
    vendor: "",
    density: "",
    viscosity: "",
    packaging: "",
    packSize: "",
    unit: "",
    quantity: "",
  };
  tableData.push(newData);
  renderTable();
  selectRow(tableBody.lastElementChild);
};

document.getElementById("delete-row").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    tableData.splice(index, 1);
    renderTable();
    selectedRow = null;
  }
};

document.getElementById("move-up").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    if (index > 0) {
      [tableData[index - 1], tableData[index]] = [
        tableData[index],
        tableData[index - 1],
      ];
      renderTable();
      selectRow(tableBody.children[index - 1]);
    }
  }
};

document.getElementById("move-down").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    if (index < tableData.length - 1) {
      [tableData[index + 1], tableData[index]] = [
        tableData[index],
        tableData[index + 1],
      ];
      renderTable();
      selectRow(tableBody.children[index + 1]);
    }
  }
};

document.getElementById("save").onclick = function () {
  if (selectedRow) {
    resetRow(selectedRow);
  }
};

document.getElementById("refresh-table").onclick = function () {
  tableData = JSON.parse(JSON.stringify(tableData));
  renderTable();
  selectedRow = null;
};

renderTable();
