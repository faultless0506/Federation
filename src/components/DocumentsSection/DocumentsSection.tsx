import { useState, useEffect } from 'react';
import './DocumentsSection.scss';
import ToggleListButton from '../Buttons/ToggleListButton/ToggleListButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDocumentsByCategory } from '../../store/documentsSlice';

interface DocumentProps {
  name: string;
  fileUrl: string;
  onOpenDocument: (fileUrl: string) => void;
  onDownloadDocument: (fileUrl: string) => void;
} 
interface DocumentSectionProps {
  title: string;
  category: string;
  documents: DocumentProps[];
  // onOpenDocument: (fileUrl: string) => void;
  // onDownloadDocument: (fileUrl: string) => void;
}

export default function DocumentSection({
  title,
  category,
  documents,
  // onOpenDocument,
  // onDownloadDocument,
}: DocumentSectionProps) {
  // const dispatch = useDispatch<AppDispatch>();
  // const { documents, status, error } = useSelector(
  //   (state: RootState) => state.documents
  // );

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchDocumentsByCategory(category));
  //   }
  // }, [status, dispatch, category]);

  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };
  useEffect(() => {
    if (!showAll) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }, [showAll]);
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'failed') {
  //   return <div>{error}</div>;
  // }
  return (
    <div className="documents__section">
      <h3>{title}</h3>
      <ul className={`documents__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {documents.map((doc) => (
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
        {documents.length > 3 && (
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
