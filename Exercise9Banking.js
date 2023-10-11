//Analyses Calculate discount price
// subtotal - subtotal * discount
function calculateDiscountPrice(orginalPrice, discountPercentage) {
    let discount= orginalPrice*(discountPercentage/100);   
    return orginalPrice - discount;
}

const calculateDiscountPriceVar = (originalPrice, discountPercentage,callback)