import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../redux/actions/productActions"
import CardProducts from "../components/Card/CardProducts"
import { Link } from "react-router-dom"

function About(){
    const dispatch = useDispatch()
    const {products}=useSelector(state=>state.prodReducer)
    useEffect(()=>{
        //subscrip to store
        dispatch(fetchAllProducts())
    },[])
    return (
        <main className="container mx-auto px-4">
            {/* <h1 class="text-start my-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">{console.log(products)}</h1>  */}
            <h1 className="text-center  mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-black ">Get Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 mb-10 ">
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
        </main>
    )
}
export default About