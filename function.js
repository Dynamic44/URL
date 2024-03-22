window.function = async function(sku) {
  // This is a placeholder URL for where your actual server-side scraping code would be hosted
  const scrapingServiceUrl = "https://your-scraping-service.com/scrape";
  const fullUrl = `https://www.reece.com.au/search/?query=${sku.value}`;

  try {
    // Assuming you have an endpoint that does the scraping and returns JSON
    const response = await fetch(scrapingServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: fullUrl }),
    });

    if (!response.ok) throw new Error('Network response was not ok.');

    const data = await response.json();
    return {
      href: data.href,
      productName: data.productName,
      imageSrc: data.imageSrc,
    };
  } catch (error) {
    console.error("Scraping failed:", error);
    return {
      href: "",
      productName: "",
      imageSrc: "",
    };
  }
}
