import "./Category.scss";
import { useNavigate } from "react-router-dom";
import cat1 from "../../../assets/category/cat-1.jpg"
const Category = ({categories}) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div className="category"  key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
                    <img src={item.attributes?.img?.data?.attributes?.url} alt="" />
                </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
