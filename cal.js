const currentDate = document.querySelector('.currentdate'),
daysClass = document.querySelector('.days');
prevNextIcon = document.querySelectorAll('.icons span');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let firstDay = firstDayOfMonth; firstDay > 0; firstDay--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - firstDay + 1}</li>`;
    }

    for (let day = 1; day <= lastDateOfMonth; day++) {
        let isToday = day === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? 'active' : '';
        liTag += `<li class="${isToday}">${day}</li>`;
    }

    for (let lastDay = lastDayOfMonth; lastDay < 6; lastDay++) {
        liTag += `<li class="inactive">${lastDay - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysClass.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon  => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});