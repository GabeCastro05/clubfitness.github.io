

document.addEventListener("DOMContentLoaded", function() {

    const HorariosData = [
        { day: "Segunda a Sexta", time: "8:00 - 17:00"},
        { day: "Sábados", time: "8:00 - 14:00"},
        { day: "Estamos fechados:", time: "Domingos e feriados"}
        
    ];

    const Horarioscontainer = document.getElementById("aulas-horario");

    // Function to generate HTML for class schedule
    function generateClassScheduleHTML() {
        let html = "";
        HorariosData.forEach(item => {
            html += `
                <div class="class-item">
                    <h3>${item.day}</h3>
                    <p>${item.time}</p>
                </div>
            `;
        });
        return html;
    }

    // Populate class schedule
    Horarioscontainer.innerHTML = generateClassScheduleHTML();
});