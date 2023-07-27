import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';

export default function Dashboard() {
    //Declared state product
    const [product, setProducts] = useState([])
    const columns = [
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
                    class="black hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-3 py-2 dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-gray-800">
                    Edit
                </button>
        }
    ];

    useEffect(() => {
        fetchProducts()
            .then(resp => setProducts(resp))
    }, [])
    return (
        <DataTable className='container mx-auto'
            columns={columns}
            data={product}
            pagination
        />
    )
}
