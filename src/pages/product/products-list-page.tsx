import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HttpService } from "../../services/http-service";
import { ProductsListDTO } from "../../dtos/product/products-list-dto";
import imagePlaceholder from "../../assets/images/Placeholder.webp";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-context";
type ProductsListPageProps = {};

const ProductsListPage: React.FC<ProductsListPageProps> = ({}) => {
  const [products, setProducts] = useState([] as ProductsListDTO[]);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    HttpService.get<ProductsListDTO[]>("products")
      .then(function (resp) {
        setProducts(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

 

  return (
    <div className="flex flex-col">
      <h1 className="text-xl mb-4">لیست محصولات</h1>
      <div className="grid grid-cols-5 gap-[20px]">
        {products.map((item) => (
          <div className="flex flex-col gap-1 p-2 border-2 rounded-lg">
            <img src={imagePlaceholder} alt="" className="rounded-lg m-2"/>
            <h2>{item.title}</h2>
            <h3 className="text-green-700 font-bold">
              قیمت فروش: {item.price}
              
            </h3>
            <h3 className="font-bold">تعداد موجود: {item.qty}</h3>
         {authCtx.authData.isAuth && (
            <div>
            <button type="button" className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded-lg " 
                    onClick={()=> navigate("/products/update/"+item.id)}>
                 ویرایش
               </button>
            </div>
         )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
