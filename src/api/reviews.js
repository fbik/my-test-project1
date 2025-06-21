export const fetchReviews = async () => {
  const response = await fetch('http://o-complex.com:1337/reviews', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error('Ошибка загрузки отзывов');
  }
  
  return await response.json();
};