class Prodotto{
    constructor(productId,productName,supplierId,categoryId,quantityPerUnit){
        this.productId = productId;
        this.productName = productName;
        this.supplierId = supplierId;
        this.categoryId = categoryId;
        this.quantityPerUnit = quantityPerUnit;
    }

}

module.exports = Prodotto;