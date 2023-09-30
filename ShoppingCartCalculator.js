let costEachItem= 30;
let quantityEachItem= 10;
let discountPercentage= 5;
let taxPercentage= 0.07;
let threshold= 1000;
let discount= 0;
let subTotalCost= costEachItem*quantityEachItem;
// if (subTotalCost > threshold)
// {
//     discountAmount= subTotalCost * (discountPercentage/100);
// }
discount= subTotalCost>10?subTotalCost*(discountPercentage/100):0;
// let discountAmount = (subTotalCost*discountPercentage)/100;
let totalPriceAfterDiscount= subTotalCost-discount;
let taxAmount = (totalPriceAfterDiscount*taxPercentage);
let finalCost = totalPriceAfterDiscount + taxAmount;

console.log(`original price: ${costEachItem} 
Item Quantity: ${quantityEachItem}
Sub total cost: ${subTotalCost} 
Discount amount: ${discount.toFixed(2)}
Total price after discount: ${totalPriceAfterDiscount}
Tax amount: ${taxAmount.toFixed(2)} 
Total Cost: ${finalCost}`);




