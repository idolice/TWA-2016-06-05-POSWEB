function Item(barcode, name, unit, price,num) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.num=num;
}

var itemsNum=[0,0,0,0,0,0];
