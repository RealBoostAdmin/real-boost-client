import {IProduct} from '../../../core/models/product.model';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetOptionsItems} from '../../../core/store/options/options.actions';

interface IProps {
    product: IProduct
}

const Options: React.FC<IProps> = ({product}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadOptionsOfProduct = async () => {
            try {
                dispatch(GetOptionsItems());
            } catch (error) {}
        };

        loadOptionsOfProduct();

    }, [])


    return (
        <div></div>
    )
}

export default Options;
