"use-strict";

// Selectors

const add = document.querySelector(".add");
const icon = document.querySelector(".icon");
const taskHolder = document.querySelector(".taskholder");
const deleteButton = document.querySelector("delete");

// ENTERING TASK ON ENTER

add.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && add.value) {
        value = this.value;

        taskHolder.innerHTML += `  <div class="task">
    <i  id="delete" class=" delete fa-sharp fa-solid fa-trash"></i>
    
    <input  type="checkbox"/><label for="checkbox">${value} </label>
    
    </div>`;

        // Reseting the value after submission

        this.value = "";
    }

    // Checking if the value is entered empty
    else if (e.key === "Enter" && !add.value) {
        alert("No empty values please :) ");
    }
});

// ENTERING TASK ON ICON CLICK

icon.addEventListener("click", function (e) {
    value = add.value;

    // Checking if the value is entered empty
    if (!add.value) {
        alert("No empty values please :) ");
    } else {
        taskHolder.innerHTML += ` <div class="task">
    <i  id="delete" class=" delete fa-sharp fa-solid fa-trash"></i>
    
    <input  type="checkbox"/><label for="checkbox">${value} </label>
    
    </div>`;

        // Reseting the value after submission
        add.value = "";
    }
});

// DELETING TASK

document.addEventListener("click", function (e) {
    if (e.target.id === "delete") {
        e.target.closest(".task").classList.add("fade-out");
        setTimeout(function () {
            e.target.closest(".task").style.display = "none";
        }, 700);
    }
});
