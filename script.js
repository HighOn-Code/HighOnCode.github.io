    function addTask() {
        const taskInput = document.getElementById("task");
        const taskText = taskInput.value.trim();
        const taskTime = document.getElementById("task-time").value;

        if (taskText !== "" && taskTime !== "") {
            const taskList = document.getElementById("task-list");
            const li = document.createElement("li");

            // Create a new task item with a time frame
            li.innerHTML = `<span>${taskText}</span> - <span>${taskTime}</span> 
                            <button onclick="deleteTask(this)">Delete</button>`;
            taskList.appendChild(li);

            taskInput.value = "";
            document.getElementById("task-time").value = "";
        }
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            addTask();
        }
    }

    function deleteTask(button) {
        const taskList = document.getElementById("task-list");
        const listItem = button.parentNode;
        taskList.removeChild(listItem);
    }

    function deleteAll() {
        const taskList = document.getElementById("task-list");
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

function updateCountdown() {
    // Get the current time
    const now = new Date();
    
    // Create a Date object for the target time: 10 PM UTC+3:30
    const targetTime = new Date(now);
    
    // Set target time to 10 PM UTC+3:30, which is 6:30 PM UTC
    targetTime.setUTCHours(18, 30, 0, 0); // Set to 6:30 PM UTC
    
    // Calculate the time remaining
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        document.getElementById("countdown").innerText = "It's 10 PM (UTC +3:30)!";
        document.title = "It's 10 PM!";
    } else {
        const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
        const secondsLeft = Math.floor((timeDifference / 1000) % 60);

        const countdownText = `${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds left until 10 PM (UTC +3:30).`;

        document.getElementById("countdown").innerText = countdownText;
        document.title = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s until 10 PM`;
    }
}

      // Update the countdown every second
      setInterval(updateCountdown, 1000);
      
      // Initial update when the page loads
      updateCountdown();



  function updateCountdown() {
        // Existing countdown logic for 10 PM
    }

    // Add the new function here
    function updateOddDayCountdown() {
        const now = new Date();
        let targetTime = new Date(now);

        const currentDay = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
        const currentDate = now.getDate(); // 1 through 31

        const isOddDay = currentDate % 2 === 1;
        const isTargetDay = currentDay === 0 || currentDay === 2 || currentDay === 4;

        if (isTargetDay && isOddDay) {
            targetTime.setHours(18, 0, 0, 0);
            if (now > targetTime) {
                targetTime.setDate(now.getDate() + 2);
            }
        } else {
            do {
                targetTime.setDate(targetTime.getDate() + 1);
            } while (
                !(
                    (targetTime.getDay() === 0 || targetTime.getDay() === 2 || targetTime.getDay() === 4) &&
                    targetTime.getDate() % 2 === 1
                )
            );
            targetTime.setHours(18, 0, 0, 0);
        }

        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            document.getElementById("odd-day-countdown").innerText = "It's 6 PM!";
        } else {
            const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
            const secondsLeft = Math.floor((timeDifference / 1000) % 60);

            const countdownText = `${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds left until the nearest 6 PM on an odd Sunday, Tuesday, or Thursday.`;

            document.getElementById("odd-day-countdown").innerText = countdownText;
        }
    }
    
    // Update the countdowns every second

    setInterval(updateOddDayCountdown, 1000);

    // Initial update when the page loads

    updateOddDayCountdown();





      function showPage() {
      // This function will be called when the background image is loaded
      document.body.style.visibility = 'visible';
      updateCountdown(); // Update the countdown once the background image is loaded
      setInterval(updateCountdown, 1000); // Start updating the countdown every second
    }

    // Add an event listener to the 'load' event of the window to call the showPage function
    window.addEventListener('load', showPage);

     // Function to add a new task to the list
   function addTask() {
        const taskInput = document.getElementById("task");
        const taskText = taskInput.value.trim();
        const taskStartTime = document.getElementById("task-start-time").value;
        const taskEndTime = document.getElementById("task-end-time").value;

        if (taskText !== "" && taskStartTime !== "" && taskEndTime !== "") {
            const taskList = document.getElementById("task-list");
            const li = document.createElement("li");

            // Create a new task item with a time frame
            li.innerHTML = `<span>${taskText}</span> - <span>${taskStartTime} to ${taskEndTime}</span> 
                            <button onclick="deleteTask(this)">Delete</button>`;
            taskList.appendChild(li);

            taskInput.value = "";
            document.getElementById("task-start-time").value = "";
            document.getElementById("task-end-time").value = "";
        }
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            addTask();
        }
    }

    function deleteTask(button) {
        const taskList = document.getElementById("task-list");
        const listItem = button.parentNode;
        taskList.removeChild(listItem);
    }

    function deleteAll() {
        const taskList = document.getElementById("task-list");
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
