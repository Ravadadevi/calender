// List of month names
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// List of weekdays
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Function to create the calendar
function createCalendar(year) {
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = ''; // Clear any existing content
    
    // Loop through all the months of the year
    months.forEach((monthName, index) => {
        // Create the month container
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');
        
        // Create month header
        const monthHeader = document.createElement('h2');
        monthHeader.textContent = monthName;
        monthDiv.appendChild(monthHeader);

        // Create the weekdays header
        const weekdaysRow = document.createElement('div');
        weekdaysRow.classList.add('days');
        weekdays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('weekday-header');
            dayDiv.textContent = day;
            weekdaysRow.appendChild(dayDiv);
        });
        monthDiv.appendChild(weekdaysRow);

        // Get the number of days in the month and the first day of the month
        const firstDay = new Date(year, index, 1).getDay(); // First day of the month
        const numDays = new Date(year, index + 1, 0).getDate(); // Number of days in the month

        // Create the days grid
        const daysGrid = document.createElement('div');
        daysGrid.classList.add('days');
        
        // Add empty spaces for the days before the 1st of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            daysGrid.appendChild(emptyDiv);
        }

        // Add the days of the month
        for (let day = 1; day <= numDays; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = day;
            daysGrid.appendChild(dayDiv);
        }

        // Append the days grid to the month
        monthDiv.appendChild(daysGrid);

        // Append the month to the calendar grid
        calendarGrid.appendChild(monthDiv);
    });
}

// Call the function to create the calendar for the year 2024
createCalendar(2024);
