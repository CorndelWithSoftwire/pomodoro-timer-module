export default function generate_countdown(
    duration_seconds,
    display_element_id,
    alert_element_id
) {
    var intervalId;

    const second_update = function () {
        const minutes = parseInt(duration_seconds / 60, 10);
        const seconds = parseInt(duration_seconds % 60, 10);

        const minutes_text = minutes < 10 ? "0" + minutes : minutes;
        const seconds_text = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById(display_element_id).textContent = minutes_text + ":" + seconds_text;

        if (--duration_seconds < 0) {
            alert_element_id && document.getElementById(alert_element_id).setAttribute("style", "visibility: visible;");
            clearInterval(intervalId)
        }
    };

    alert_element_id && document.getElementById(alert_element_id).setAttribute("style", "visibility: hidden;");

    second_update();

    var intervalId = setInterval(second_update, 1000);
}