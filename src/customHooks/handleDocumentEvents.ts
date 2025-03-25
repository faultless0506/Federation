import { getImageUrl } from '../utils/apiUtils';

const handleOpenDocument = (url: string) => {
  // Формируем полный URL для документа
  const fullUrl = getImageUrl(url);
  window.open(fullUrl, '_blank');
};

const handleDownloadDocument = (url: string) => {
  // Формируем полный URL для документа
  const fullUrl = getImageUrl(url);
  const link = document.createElement('a');
  link.href = fullUrl;
  link.setAttribute('download', '');
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export { handleOpenDocument, handleDownloadDocument };
