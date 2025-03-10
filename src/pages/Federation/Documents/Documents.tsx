import './Documents.scss';
import doc1 from '../../../documents/mezhdunarodnaya-konvencziya-soveta-evropyi-protiv-primeneniya-dopinga-(strasburg,-16-noyabrya-1989-g.).pdf';
import doc2 from '../../../documents/mezhdunarodnaya-konvencziya-yunesko-o-borbe-s-dopingom-v-sporte-(parizh-2005).pdf';

const documents = [
  {
    id: 1,
    name: 'Постановление о постановлении о постановлении о постановлении постановления ',
    url: doc1,
  },
  { id: 2, name: 'Document 2', url: doc2 },
];

export default function Documents() {
  const handleOpenDocument = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownloadDocument = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="documents">
      <h2>Список документов</h2>
      <div className="documents__section">
        <h3>Уставные документы</h3>
        <ul className="documents__list">
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="documents__section">
        <h3>Прочие документы</h3>
        <ul className="documents__list">
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}{' '}
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="documents__section">
        <h3>Прочие документы</h3>
        <ul className="documents__list">
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}
          {documents.map((doc) => (
            <li key={doc.id} className="documents__list-item">
              <p onClick={() => handleOpenDocument(doc.url)}>{doc.name}</p>
              <button
                onClick={() => handleDownloadDocument(doc.url)}
                className="documents__download-button"
              >
                Скачать
              </button>
            </li>
          ))}
        </ul>
      </div>  
    </section>
  );
}
