var shoppingBasket = {
  items:[],
  total: 0,
  setItems:function(newItems){
    this.items = newItems;
  },
  sumTotal:function(){
    var total = 0;
    // for(i = 0; i<items.length; i+= 1){
    //  total += item[i]["price"];

    for(var item of this.items){
      total = total + item.price;
    }
    return total;
  }
}

module.exports = shoppingBasket;