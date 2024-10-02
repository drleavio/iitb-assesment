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

// Function to render table rows from the array
function renderTable() {
  tableBody.innerHTML = ""; // Clear existing rows
  tableData.forEach((data, index) => {
    const row = document.createElement("tr");
    row.dataset.index = index; // Store the index in the row
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

// Function to handle row selection
function selectRow(row) {
  if (selectedRow) {
    // resetRow(selectedRow); // Reset the previous row
    selectedRow.classList.remove("highlight"); // Remove highlight from the previous row
  }

  selectedRow = row; // Set new selected row
  row.classList.add("highlight");
  makeEditable(row); // Make the selected row editable
}

// Function to make a row editable
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
        : "text"; // Adjust input type for numeric values
    cell.innerHTML = ""; // Clear the cell
    // Add input to cell
    input.focus(); // Focus the input field
    input.select();
    cell.appendChild(input);
    input.value = currentVal;
    // input.addEventListener("blur", () => {
    //   saveRowData(row); // Save when input loses focus
    // });
  });
  row.classList.add("editing"); // Add editing class
}

function saveRowData(row) {
  const cells = row.querySelectorAll("td");

  cells.forEach((cell, cellIndex) => {
    const input = cell.querySelector("input");
    if (input) {
      const newValue = input.value; // Get new value from input
      cell.innerHTML = newValue; // Restore original value to cell
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
      // Update the data structure
      tableData[row.dataset.index][fieldNames[cellIndex]] =
        cellIndex === 3 || cellIndex === 4 || cellIndex === 6 || cellIndex === 8
          ? parseFloat(newValue)
          : newValue;
    }
  });
}

// Function to reset the row back to normal content
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
      cell.innerHTML = input.value; // Restore original value
      tableData[row.dataset.index][fieldNames[cellIndex]] = input.value; // Update data array
    }
  });
  row.classList.remove("editing"); // Remove editing class
}

// Function to add a new row
document.getElementById("add-row").onclick = function () {
  const newId =
    tableData.length > 0 ? tableData[tableData.length - 1].id + 1 : 1; // Increment ID
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
  tableData.push(newData); // Add new data to the array
  renderTable(); // Re-render the table
  selectRow(tableBody.lastElementChild); // Select the new row
};

// Function to delete the selected row
document.getElementById("delete-row").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    tableData.splice(index, 1); // Remove data from the array
    renderTable(); // Re-render the table
    selectedRow = null; // Clear the selected row
  }
};

// Move Up button functionality
document.getElementById("move-up").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    if (index > 0) {
      // Swap data in the array
      [tableData[index - 1], tableData[index]] = [
        tableData[index],
        tableData[index - 1],
      ];
      renderTable(); // Re-render the table to reflect changes
      selectRow(tableBody.children[index - 1]); // Select the moved row
    }
  }
};

// Move Down button functionality
document.getElementById("move-down").onclick = function () {
  if (selectedRow) {
    const index = parseInt(selectedRow.dataset.index, 10);
    if (index < tableData.length - 1) {
      // Swap data in the array
      [tableData[index + 1], tableData[index]] = [
        tableData[index],
        tableData[index + 1],
      ];
      renderTable(); // Re-render the table to reflect changes
      selectRow(tableBody.children[index + 1]); // Select the moved row
    }
  }
};

// Save button functionality
document.getElementById("save").onclick = function () {
  if (selectedRow) {
    resetRow(selectedRow); // Save changes to the array and the table
    // selectedRow = null; // Clear the selected row
    // renderTable();
  }
};

document.getElementById("refresh-table").onclick = function () {
  tableData = JSON.parse(JSON.stringify(tableData)); // Reset to initial data
  renderTable(); // Re-render the table
  selectedRow = null; // Clear selection
};

// Initial render of the table
renderTable();
