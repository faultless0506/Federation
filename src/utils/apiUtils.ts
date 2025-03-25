// Утилита для формирования URL API и медиа-файлов
export const getApiBaseUrl = () => {
  return `${window.location.protocol}//${window.location.hostname}:5000`;
};

// Функция для получения полного URL изображения
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';

  // Если путь уже содержит полный URL, вернуть как есть
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Иначе добавить базовый URL
  return `${getApiBaseUrl()}${imagePath}`;
};

// Функция для проверки доступности изображения
const isImageValid = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Функция для обработки массива изображений
export const processImageUrls = async (
  images: string[] | undefined,
  defaultImage?: string
): Promise<string[]> => {
  if (!images || images.length === 0) {
    return defaultImage ? [defaultImage] : [];
  }

  const processedUrls = images.map((img) => getImageUrl(img));
  const validUrls = await Promise.all(
    processedUrls.map(async (url) => {
      const isValid = await isImageValid(url);
      return isValid ? url : defaultImage || '';
    })
  );

  return validUrls.filter(Boolean);
};
