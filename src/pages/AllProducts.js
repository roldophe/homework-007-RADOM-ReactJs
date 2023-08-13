import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import CardProducts from '../components/Card/CardProducts';
import CartCategory from '../components/Card/CardCategory';

export default function AllProducts() {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.prodReducer)
    const { categories } = useSelector(state => state.prodReducer)
    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [])
    return (
        <main className="container mx-auto px-5">
            <h1 className="text-center  mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-black ">Get Products</h1>
            <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">
                {
                    products.map((product) =>
                        <div
                            key={product.id}>
                            <Link
                                to={`/read/${product.id}`}
                            >
                                <CardProducts
                                    pro_id={product.id}
                                    pro_price={product.price}
                                    imageURL={product.images[0]}
                                    pro_title={product.title}
                                    desc={product.description}
                                />
                            </Link>
                        </div>
                    )
                }
            </div>
            {/* START CATEGORIES */}
            <h1 className="text-center  mt-20 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">Get Categories</h1>
            <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">
                {
                    categories.map((cat) =>
                        <CartCategory
                            id={cat.id}
                            name={cat.name}
                            imageURL={cat.image}
                            creationAt={cat.creationAt}
                            updatedAt={cat.updatedAt}
                        />
                    )
                }
            </div>
            {/* END CATEGORIES */}
        </main>
    )
}
