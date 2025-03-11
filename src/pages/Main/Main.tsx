// src/pages/News.tsx
import React from 'react';
import './Main.scss';
import NewsSlider from '../../components/Sliders/NewsSlider';
import CompetitionsSlider from '../../components/Sliders/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import Landing from '../../components/Landing/Landing';
import FedLocation from '../../components/FedLocation/FedLocation';
import FedLead from '../../components/FedLead/FedLead';
import DocumentSection from '../../components/DocumentsSection/DocumentsSections';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { handleDownloadDocument, handleOpenDocument } from '../../customHooks/handleDocumentEvents';
const Main: React.FC = () => {
  
  const documents = useSelector((state: RootState) => state.documents.items);
  const documentsFederaion = documents.filter((doc) => doc.doctype === 1);
  const documentsProvisions = documents.filter((doc) => doc.doctype === 4);

  return (
    <>
      <Landing />
      <div className="container content main">
        <NewsSlider />
        <CompetitionsSlider />
        <ClubsAndPartners />
        
      <section className="documents">
        <h2 className="section-header">Основные документы</h2>

        <DocumentSection 
          title="Уставные документы Федерации"
          documents={documentsFederaion}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}/>
          <DocumentSection title='Положения и регламенты' documents={documentsProvisions} onOpenDocument={handleOpenDocument} onDownloadDocument={handleDownloadDocument}/></section>
        <FedLocation />
        <FedLead />
      </div>
    </>
  );
};

export default Main;
