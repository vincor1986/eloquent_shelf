const imageURL = (imageRef) => {
  const extension = imageRef.split("-").pop();
  const url = imageRef.split("-").slice(0, -1).join("-").replace("image-", "");

  if (!imageRef || !extension) return "/placeholder_cover.png";

  return `https://cdn.sanity.io/images/gg27aq6o/production/${url}.${extension}`;
};

export default imageURL;
