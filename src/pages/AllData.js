import React, { useEffect, useState } from 'react'
import CartCategory from '../components/Card/CardCategory'
import CardUsers from '../components/Card/CardUsers'
import CardProducts from '../components/Card/CardProducts'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'
export default function AllData() {
    //decleare variable
    //const [count, setCount] = useState(0)
    const [categories, setCategories] = useState([])
    const [users, setUser] = useState([])
    const [proIsLoading, setProIsloading] = useState(true)
    const [catIsLoading, setCatIsloading] = useState(true)
    const [userIsLoading, setUserIsloading] = useState(true)

    const dispatch = useDispatch()
    const {products}=useSelector(state=>state.prodReducer)
    const fetchCategories = () => {
        fetch('https://api.escuelajs.co/api/v1/categories?limit=5')
            .then(res => res.json())
            .then(res => {
                setCategories(res)
                setCatIsloading(false)
            })
    }
    const fetchUsers = () => {
        fetch('https://api.escuelajs.co/api/v1/users?limit=3')
            .then(res => res.json())
            .then(res => {
                setUser(res)
                setUserIsloading(false)
            })
    }

    useEffect(() => {
        //call to api
        /* fetchProducts()
        .then(resp=>{
            setProIsloading(false)
            setProducts(resp)
        }) */
        fetchCategories()
        fetchUsers()
        //subscrip to store
        dispatch(fetchAllProducts())
    }, [])
    return (
        <>
            <div className="container mx-auto px-4">
                {console.log(products)}
                {/* <div>
                    <h1>You Click {count}times</h1>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                </div> */}
                {/* Testing Placeholder */}
                {/* START PRODUCTS */}
                <h1 className="text-center  mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-black ">Get Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 ">
                    {
                        /* reder list */
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
                {/* END PRODUCTS */}

                {/* START CATEGORIES */}
                <h1 className="text-center  mt-20 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">Get Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
                    {
                        /* reder list */
                        catIsLoading ? <Loading /> :
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

                {/* START USERSS */}
                <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-black mt-20">Get Users</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
                    {
                        userIsLoading ? <Loading /> :
                            users.map((user) =>
                                <CardUsers
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    role={user.role}
                                    avatar={user.avatar}
                                />
                            )
                    }
                </div>{/* END USERSS */}

            </div>
        </>
    )
}
