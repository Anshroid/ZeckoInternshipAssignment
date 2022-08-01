function getCategory(website) {
  // Try to run a fetch request on the URL
  try {
    res = UrlFetchApp.fetch(website)
  
  // If there is a DNS error, the site does not exist, so we should return NOT_WORKING
  } catch(err) {
    if (err.message.startsWith("DNS error")) {
      return "NOT_WORKING"
    }
  }

  // Test for each service's content in the website
  content = res.getContentText()
  if (content.search("shopify") != -1) {
    return "SHOPIFY"
  }

  if (content.search("woocommerce") != -1) {
    return "WOOCOMMERCE"
  }

  if (content.search("bigcommerce") != -1) {
    return "BIGCOMMERCE"
  }

  if (content.search("magento") != -1) {
    return "MAGENTO"
  }

  return "OTHERS"
}

function test() {
  console.log(getCategory("https://nutrabay.com/"))
}
