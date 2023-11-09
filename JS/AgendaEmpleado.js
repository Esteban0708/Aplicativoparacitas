import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'

$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month', 
      events: [
        {
          title: 'Clases/Trabajo',
          start: '2023-11-09T09:00:00',
          end: '2023-11-09T10:30:00'
        },
        {
          title: 'Estudio/Trabajo',
          start: '2023-11-09T11:00:00',
          end: '2023-11-09T12:30:00'
        },
      ]
    });
  });
            

  const calendar = new Calendar(calendarEl, {
    plugins: [timeGridPlugin],
    initialView: 'timeGridFourDay',
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 4 }
      }
    }
  })