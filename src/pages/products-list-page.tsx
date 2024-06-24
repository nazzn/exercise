import axios from "axios";
import { useEffect, useState } from "react";
import { HttpService } from "../services/http-service";
import { ProductsListDTO } from "../dtos/product/products-list-dto";

type ProductsListPageProps = {};


const ProductsListPage: React.FC<ProductsListPageProps> = ({}) => {
  const [products, setProducts] = useState([] as ProductsListDTO[]);
  useEffect(() => {
    HttpService
      .get<ProductsListDTO[]>("products")
      .then(function (resp) {
        setProducts(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Products List</h1>
      <div className="  ">
      {products.map((item) => (
        <div className="m-2 p-2 border-2 rounded-lg">
          <h2>{item.title}</h2>
          <h3 className="text-green-700 font-bold">Price: {item.price}</h3>
          <h3 className="font-bold">Qty in Stock: {item.qty}</h3>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default ProductsListPage;
