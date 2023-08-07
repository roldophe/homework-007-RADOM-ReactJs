import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Read() {
    let { id } = useParams()
    //MARK create a statet to store product object
    //set default value for state for handle slow data load
    const[product, setProduct] = useState(
        {
            title: "លក់បាយគុយទាវ",
            description: "លក់នំប័ុង",
            images: [
                "https://th.bing.com/th/id/OIP.Kn-72QDi-ubnRhmePgLgUQHaE8?pid=ImgDet&rs=1"
            ]
        }
    )

    let fetchProduct=(id)=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(resp=>resp.json())
        .then(resp=>setProduct(resp))
    }
    useEffect(()=>{
        fetchProduct(id)
    },[])
    return (
        <main className="container mx-auto">
            <h1 class="text-start my-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">{product.title}</h1>
            <p class="text-start my-5 text-2xl tracking-tight text-gray-900 dark:text-black">{product.description}</p>
            <img className="mb-5 " src={product.images[0]} alt="" width={`450px`}/>
        </main>
    )
}
export default Read