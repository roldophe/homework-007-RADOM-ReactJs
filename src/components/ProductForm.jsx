import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUploadToServer, insertProduct, updateProduct } from '../services/productAction'
import { useLocation } from 'react-router-dom'

export default function ProductForm({ edit }) {
  const [categories, setCategories] = useState([])
  const [source, setSource] = useState("")
  const location = useLocation()
  const [product, setProduct] = useState(
    {
      title: "",
      price: 0,
      description: "",
      categoryId: 1,
      images: [
        "https://th.bing.com/th/id/OIP.Kn-72QDi-ubnRhmePgLgUQHaE8?pid=ImgDet&rs=1"
      ]
    }, []
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

  const onPreviewImages = (e) => {
    setSource(e.target.files[0])
  }
  const handleOnSubmit = () => {
    console.log('on submit')
    ///-----Check condition whether create or update product ------
    if (edit) {
      if (source !== "") {
        const formData = new FormData()
        formData.append("file", source)
        fileUploadToServer(formData)
          .then(resp => {
            product.images = [resp.data.location]
            console.log(product.images)
            updateProduct(product, product.id)
              .then(res => res.json())
              .then(res => console.log(res))
          })

      } else {
        console.log(product.id)
        updateProduct(product, product.id)
          .then(res => res.json())
          .then(res => console.log(res))
      }
    } else {
      //--- create image object form as form data ---
      const formData = new FormData()
      formData.append("file", source)

      //--- function to upload image data to server ---
      fileUploadToServer(formData)
        //--- .then(res => console.log(res)) ---
        .then(resp => {
          product.images = [resp.data.location]
          //--- console.log(product.images) ---

          ///---insert product including image ---
          insertProduct(product)
            .then(res => res.json())
            .then(res => console.log(res))
        })
    }

    /* insertProduct(product).then(res => console.log(res)) */
  }
  useEffect(() => {
    console.log(edit)
    if (edit) {

      console.log(location.state)
      const { id, title, price, description, category, images } = location.state
      product.id = id
      product.title = title
      product.price = price
      product.description = description
      product.categoryId = category.id
      product.images = images
      console.log(product.images)
    }
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
          value={product.title}
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
          value={product.price}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="300$" required
          onChange={OnChangeHeadler}
        />
      </div>
      <div class="mb-3">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Choose a category</label>
        <select
          name="categoryId"
          value={product.categoryId}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
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
          value={product.description}
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={OnChangeHeadler}
        />
      </div>
      {/* preview area  */}
      <div class='mb-3 preview'>
        <img
          src={source == "" ? product.images[0] : URL.createObjectURL(source)}
          alt="Preview image"
          style={{ width: 200 }}

        />
      </div>
      <div class="mb-3">
        <label
          for="formFile"
          class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >Default file input example</label>
        <input
          class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile"
          onChange={onPreviewImages}
        />
      </div>
      <div class="mb-3">
        <button type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleOnSubmit()}
        > {edit ? "Update Product" : " Create Product"}
        </button>
      </div>
    </main>
  )
}
