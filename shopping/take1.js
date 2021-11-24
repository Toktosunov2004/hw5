class Shopping {

    closeShoppingPage(){
      ROOT_SHOPPING.innerHTML=''
    }


    render () {
      const productsStore = localStorageUtil.getProducts()
      let htmlCatalog = ''
      let sumCatalog = 0



  
      CATALOG.forEach(({ id, name, price }) => {
        if (productsStore.indexOf(id) !== - 1) {
          htmlCatalog += `
          <tr>
            <td class="shopping__element--name">${name}</td>
            <td class="shopping__element--price">${price}Сом</td>
          </tr>
        `
        sumCatalog += price
        }
      })
  
      const html = `
   
        <div class="shopping__container">
        <div class="shopping__close" onclik="soppingPage.closeShopping" >
          <button>
         <a  href="./take1.html"> Назад </a?
          </button>
        </div>
          <table>
            ${htmlCatalog}
            <tr>
            <td class="shopping__element--name">Сумма:</td>
            <td class="shopping__element--price">${sumCatalog.toLocaleString()}Сом</td>
          </tr>
  
          </table>
        </div>
      `
  
      ROOT_SHOPPING.innerHTML = html
    }
  }
  
  const shoppingPage = new Shopping()
  
