class Header {

  handleShoppingOpenPage () {
    shoppingPage.render()
  }

  render (counter) {
    const html = `
      <div class="header__container" onclick="headerPage.handleShoppingOpenPage()">
        <nav class="nav">
          <h3>Clotheso Shop</h3>
          <div class="nav__basket">
          <h3>
          🛒
          </h3>
          <div class="basket-radius">
            <span>${counter}</span>
          </div>
          </div>
        </nav>
      </div>
    `
    ROOT_HEADER.innerHTML = html
  }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)
