const getVendorURL = (vendor, isbn, region) => {
  if (vendor === "bookshop") {
    const baseURL =
      region === "GB" ? "https://uk.bookshop.org" : "https://bookshop.org";

    const affiliateID =
      region === "GB" ? "16540" : process.env.NEXT_PUBLIC_BOOKSHOP_US_ID;

    return `${baseURL}/a/${affiliateID}/${isbn}`;
  }

  if (vendor === "amazon") {
    // finish later
  }

  return null;
};

export default getVendorURL;
