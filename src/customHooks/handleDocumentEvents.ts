
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

  export { handleOpenDocument, handleDownloadDocument };