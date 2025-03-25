import { useState, useEffect } from 'react';
import './DocumentsSection.scss';
import ToggleListButton from '../Buttons/ToggleListButton/ToggleListButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDocuments } from '../../store/documentsSlice';

interface Document {
  id: number;
  title: string;
  fileUrl: string;
}

interface DocumentSectionProps {
  title: string;
  category: string;
  onOpenDocument: (fileUrl: string) => void;
  onDownloadDocument: (fileUrl: string) => void;
  documents?: Document[]; // Опциональные документы (если переданы напрямую)
}

export default function DocumentSection({
  title,
  category,
  onOpenDocument,
  onDownloadDocument,
  documents: propDocuments,
}: DocumentSectionProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { documents: storeDocuments, DocumentsStatus: status } = useSelector(
    (state: RootState) => state.documents
  );

  // Используем документы из пропсов, если они есть, или фильтруем из стора по категории
  const filteredDocuments =
    propDocuments || storeDocuments.filter((doc) => doc.category === category);

  // Загружаем документы при необходимости
  useEffect(() => {
    if (status === 'idle' && !propDocuments) {
      dispatch(fetchDocuments());
    }
  }, [status, dispatch, propDocuments]);

  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="documents__section">
      <h3>{title}</h3>
      <ul className={`documents__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {filteredDocuments.map((doc) => (
          <li key={doc.id} className="documents__list-item">
            <p onClick={() => onOpenDocument(doc.fileUrl)}>{doc.title}</p>
            <button
              onClick={() => onDownloadDocument(doc.fileUrl)}
              className="documents__download-button"
            >
              Скачать
            </button>
          </li>
        ))}
      </ul>
      <div className="button-container">
        {filteredDocuments.length > 3 && (
          <ToggleListButton
            isExpanded={showAll}
            expandText="Показать все"
            collapseText="Свернуть"
            onClick={toggleShowAll}
            className="bottom-button"
          />
        )}
      </div>
    </div>
  );
}
