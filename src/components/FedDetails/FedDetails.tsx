import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import DocumentSection from '../DocumentsSection/DocumentsSection';
import {
  handleDownloadDocument,
  handleOpenDocument,
} from '../../customHooks/handleDocumentEvents';
import './FedDetails.scss';

export default function FedDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { documents, status } = useSelector((state: RootState) => state.documents);
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
