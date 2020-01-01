const Product = require('./model/product')

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: "iPhone XL",
        price: 700,
        description: "A large phone with one of the best screen",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingtext1: "サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです",
        headingtext2: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        headingtext3: "サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです",
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: "iPhone Mini",
        price: 600,
        description: "A great phone with one of the best camera",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3"
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: "iPhone Standard",
        price: 300,
        description: "",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3"
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb