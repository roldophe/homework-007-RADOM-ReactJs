import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    //Declared state product
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProducts] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true
        },
        {
            name: 'Photo',
            selector: row =>
                <div class="width-10px">
                    <img
                        src={row.images[0]}
                        class="object-cover h-10 w-10"
                        alt="" />
                </div>
        },
        {
            name: "Action",
            selector: row =>
                <button
                    type='button'
                    onClick={()=>navigate("/edit",{
                        state: row
                    })}
                    class="black hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-3 py-2 dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800">
                    Edit
                </button>
        }
    ];
    /* 
        useEffect(() => {
            fetchProducts()
                .then(resp => setFilterProducts(resp))
        }, [])
     */
    useEffect(() => {
        fetchProducts()
            .then(resp => {
                setProducts(resp);    // set the fetched products to products state
                setFilterProducts(resp);  // also set the same data to filterProduct state
            })
    }, [])
    /* 
    useEffect(() => {
        const result = filterProduct.filter(pro => {
            return pro.title && pro.title.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilterProducts(result)
    }, [search])
 */
    useEffect(() => {
        if (search === '') {
            setFilterProducts(products);    // if search is cleared, set filterProduct to original products
        } else {
            const result = products.filter(pro => {   // filter the products, not the filterProduct
                return pro.title && pro.title.toLowerCase().includes(search.toLowerCase())
            })
            setFilterProducts(result)
        }
    }, [search])
    /* 
    useEffect(() => {
        const result = search === ''
            ? products // if search is empty, use the original products
            : products.filter(pro => pro.title && pro.title.toLowerCase().includes(search.toLowerCase())); // otherwise, filter the products based on the search query

        setFilterProducts(result);
    }, [search, products]); */
    return (
        <DataTable className='container mx-auto'
            columns={columns}
            data={filterProduct}
            pagination
            subHeader
            subHeaderComponent={
                <div class="w-72 flex">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                            type='text'
                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=""
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                console.log(search)
                            }}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Search by title
                        </label>
                    </div>
                </div>
            }
        />
    )
}
