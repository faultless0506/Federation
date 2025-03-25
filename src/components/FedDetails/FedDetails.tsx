import React from 'react';
import DocumentSection from '../DocumentsSection/DocumentsSection';
import {
  handleDownloadDocument,
  handleOpenDocument,
} from '../../customHooks/handleDocumentEvents';
import './FedDetails.scss';

export default function FedDetails() {
  return (
    <section className="details" id="details">
      <div className="details__reqs">
        <h3>Реквизиты и контакты Федерации</h3>
        <p>
          <b>ИНН/КПП</b>: 7728491773 772801001
        </p>
        <p>
          <b>ОГРН</b>: 1197700016580{' '}
        </p>
        <p>
          <b>Юридический адрес</b>: 117335, город Москва, ул. Архитектора
          Власова, д. 21 к. 1, кв. 35
        </p>
        <p>
          <b>Телефон</b>: +7 (985) 071-99-08
        </p>
        <p>
          <b>Email</b>:{' '}
          <a href="mailto:roofsmn2024@mail.ru">roofsmn2024@mail.ru</a>
        </p>
      </div>
      <div className="details__docs documents">
        <DocumentSection
          title="Уставные документы Федерации"
          category="Уставные"
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />
      </div>
    </section>
  );
}
