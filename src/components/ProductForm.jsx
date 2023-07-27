import React, { useEffect, useState } from 'react'
import { fetchCategories, insertProduct } from '../services/productAction'

export default function ProductForm() {
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState(
    {
      title: "",
      price: 0,
      description: "",
      categoryId: 1,
      images: [
        "https://th.bing.com/th/id/OIP.Kn-72QDi-ubnRhmePgLgUQHaE8?pid=ImgDet&rs=1"
      ]
    }
  )

  const OnChangeHeadler = (e) => {
    /* console.log(e.target.value) */
    const { name, value } = e.target
    setProduct(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
    console.log(product)
  }
  
  const handleOnSubmit = () => {
    console.log('on submit') 
    insertProduct(product).then(res => console.log(res))
  }
  useEffect(() => {
    fetchCategories()
      .then(res => setCategories(res))
  }, [])

  return (
    <main className="container mx-auto px-7">
      <div class="mb-3 mt-5">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title</label>
        <input
          type="text"
          name="title"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Magic Mouse" required
          onChange={OnChangeHeadler}
        />

      </div>
      <div class="mb-3">
        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
        <input
          type="text"
          name="price"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="300$" required
          onChange={OnChangeHeadler}
        />
      </div>
      <div class="mb-3">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Choose a category</label>
        <select
          name="categoryId"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={OnChangeHeadler}
        >
          {
            categories && categories.map(cat => (
              <option value={cat.id}>{cat.name}</option>
            ))
          }

        </select>
      </div>
      <div class="mb-3">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
        <input
          type="text"
          name="description"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={OnChangeHeadler}
        />
      </div>
      <div class="mb-3">
        <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleOnSubmit()}
        >Create Product</button>
      </div>
    </main>
  )
}
