const calculateSlidePercentage = (
  activeSlideIndex: number,
  totalSlides: number,
) => {
  if (totalSlides === 0) return 0; // Защита от деления на 0
  return ((activeSlideIndex + 1) / totalSlides) * 100;
};

export { calculateSlidePercentage };
