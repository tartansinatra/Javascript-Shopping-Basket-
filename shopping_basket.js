var shoppingBasket = {
  items:[],
  total: 0,
  setItems:function(newItems){
    this.items = newItems;
  },
  sumTotal:function(){
    var total = 0;
    for(var item of items){
      total = total + item["price"];
    }
    return total;
  }
}

module.exports = shoppingBasket;