
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Lessons.scss';

// Определяем интерфейс для занятия
interface Lesson {
  id: string;
  trainer: string;
  location: string;
  day: string;
  time: string;
}

export default function Lessons() {
  const lessons = useSelector((state: RootState) => state.lessons.lessons);
  const location = 'Сокольники';
  
  // Фильтруем занятия по локации
  const filteredLessons = lessons.filter(lesson => lesson.location === location);

  // Получаем уникальных тренеров
  const trainers = [...new Set(filteredLessons.map(lesson => lesson.trainer))];

  // Дни недели
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <section className="lessons" id="lessons">
      {/* <h2 className="section-header"> Занятия в сокольниках</h2> */}
      <div className="lessons__container">
        <table className="lessons__table">


          <thead>
            <tr>
              <th></th>
              {trainers.map(trainer => (
                <th key={trainer}>{trainer}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map(day => (
              <tr key={day}>
                <td className="day-cell">{day}</td>
                {trainers.map(trainer => {
                  // Находим занятия для данного дня и тренера
                  const lessonsForCell = filteredLessons.filter(
                    lesson => lesson.day === day && lesson.trainer === trainer
                  );
                  
                  return (
                    <td key={`${day}-${trainer}`} className="lesson-cell">
                      {lessonsForCell.map((lesson: Lesson) => (
                        <div key={lesson.id} className="lesson-item">
                          {lesson.time}
                        </div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <h3>{location}</h3> */}
    </section>
  );
}