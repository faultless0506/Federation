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

  return (
    <section className="lessons-schedule" id="lessons">
      <h3>Расписание занятий</h3>
      <div className="lessons-schedule__table">
        <div className="lessons-schedule__header">
          <div className="lessons-schedule__cell">День недели</div>
          <div className="lessons-schedule__cell">Время</div>
          <div className="lessons-schedule__cell">Локация</div>
          <div className="lessons-schedule__cell">Тренер</div>
        </div>
        <div className="lessons-schedule__body">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="lessons-schedule__row">
              <div className="lessons-schedule__cell" data-label="День недели">
                {lesson.dayOfWeek}
              </div>
              <div className="lessons-schedule__cell" data-label="Время">
                {lesson.time}
              </div>
              <div className="lessons-schedule__cell" data-label="Локация">
                {lesson.location}
              </div>
              <div className="lessons-schedule__cell" data-label="Тренер">
                {lesson.trainer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsSchedule;
