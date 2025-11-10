const estReadTime = (pageCount, difficulty) => {
  if (!pageCount || pageCount === "Unknown") {
    return "Unknown";
  }

  const readingSpeeds = {
    beginner: 2, // pages per minute
    intermediate: 1.5, // pages per minute
    advanced: 0.8, // pages per minute
  };

  const speed = readingSpeeds[difficulty] || 1.5; // default to intermediate if unknown

  // round to nearest 10 minutes
  return Math.round(pageCount / speed / 10) * 10;
};

export default estReadTime;
