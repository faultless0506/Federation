import { useDispatch } from 'react-redux';
import './FailedIndicator.scss';
import { AppDispatch } from '../../../store/store';
import { fetchCompetitions } from '../../../store/competitionsSlice';
import { fetchNews } from '../../../store/newsSlice';
import { fetchDocuments } from '../../../store/documentsSlice';

const FailedIndicator = () => {
    const dispatch = useDispatch<AppDispatch>();
    const fetchRefreshData = () => {
        dispatch(fetchCompetitions());
        dispatch(fetchNews());
        dispatch(fetchDocuments());
    }
  return (
    <div className='failed'>
        <p>Ошибка получения данных</p>
        <button onClick={() => fetchRefreshData()}>Повторить</button>
    </div>
  )
}

export default FailedIndicator
