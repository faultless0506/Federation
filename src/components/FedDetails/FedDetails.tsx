import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DocumentSection from '../DocumentsSection/DocumentsSections';
import {
  handleDownloadDocument,
  handleOpenDocument,
} from '../../customHooks/handleDocumentEvents';
import './FedDetails.scss'

export default function FedDetails() {
  const documents = useSelector((state: RootState) => state.documents.items);
  const documentsFederaion = documents.filter((doc) => doc.doctype === 1);
  // const documentsProvisions = documents.filter((doc) => doc.doctype === 4);
  return (
    <section className="details" id="details">
      <div className="details__reqs">
        <h3>Реквизиты и контакты Федерации</h3>
      </div>
      <div className="details__docs documents">
        <DocumentSection
          title="Уставные документы Федерации"
          documents={documentsFederaion}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />
      </div>
    </section>
  );
}
