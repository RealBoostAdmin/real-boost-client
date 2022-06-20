import React from 'react';
import {IProduct} from '../../core/models/product.model';
import './Tab.css';

interface IProductProps {
    readonly products: IProduct[];
    readonly setOpenTab: (tab: number) => void;
}

const Tab: React.FC<IProductProps> = ({products, setOpenTab}) => {

    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                {products && products.map((product: IProduct, index: number) =>
                    <li className="mr-2" role={product.name}>
                        <a
                            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                            onClick={() => {setOpenTab(index + 1)}}
                            data-toggle="tab"
                            href={`#link${index + 1}`}
                            role="tablist"
                        >
                            {product.name}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Tab;
