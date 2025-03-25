import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './LessonsSchedule.scss';

const LessonsSchedule: React.FC = () => {
  const { lessons, status } = useSelector((state: RootState) => state.lessons);

  if (status === 'loading') {
    return <div className="loading">Загрузка расписания...</div>;
  }

  if (status === 'failed') {
    return <div className="failed">Ошибка загрузки расписания</div>;
  }

  // Группируем занятия по локациям
  const lessonsByLocation = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.location]) {
      acc[lesson.location] = [];
    }
    acc[lesson.location].push(lesson);
    return acc;
  }, {} as Record<string, typeof lessons>);

  return (
    <div className="lessons-schedule">
      <h3>Расписание занятий</h3>
      {Object.entries(lessonsByLocation).map(([location, locationLessons]) => (
        <div key={location} className="lessons-schedule__location">
          <h4 className="lessons-schedule__location-title">{location}</h4>
          <div className="lessons-schedule__table">
            <div className="lessons-schedule__header">
              <div className="lessons-schedule__cell">
                <b>День недели</b>
              </div>
              <div className="lessons-schedule__cell">
                <b>Время</b>
              </div>
              <div className="lessons-schedule__cell">
                <b>Тренер</b>
              </div>
            </div>
            <div className="lessons-schedule__body">
              {locationLessons.map((lesson) => (
                <div key={lesson.id} className="lessons-schedule__row">
                  <div
                    className="lessons-schedule__cell"
                    data-label="День недели"
                  >
                    {lesson.dayOfWeek}
                  </div>
                  <div className="lessons-schedule__cell" data-label="Время">
                    {lesson.time}
                  </div>
                  <div className="lessons-schedule__cell" data-label="Тренер">
                    {lesson.trainer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonsSchedule;
