import { useState, useEffect } from 'react';
import './DocumentsSection.scss';
import ToggleListButton from '../../components/Buttons/ToggleListButton/ToggleListButton';

interface Document {
  id: string | number;
  name: string;
  url: string;
  doctype: number;
}

interface DocumentSectionProps {
  title: string;
  documents: Document[];
  onOpenDocument: (url: string) => void;
  onDownloadDocument: (url: string) => void;
}

export default function DocumentSection({
  title,
  documents,
  onOpenDocument,
  onDownloadDocument,
}: DocumentSectionProps) {
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

  return (
    <div className="documents__section">
      <h3>{title}</h3>
      <ul className={`documents__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {documents.map((doc) => (
          <li key={doc.id} className="documents__list-item">
            <p onClick={() => onOpenDocument(doc.url)}>{doc.name}</p>
            <button
              onClick={() => onDownloadDocument(doc.url)}
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