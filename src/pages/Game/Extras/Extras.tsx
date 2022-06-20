import {IProduct} from '../../../core/models/product.model';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetExtrasItems} from '../../../core/store/extras/extras.actions';

interface IProps {
    product: IProduct
}

const Extras: React.FC<IProps> = ({product}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadExtras = async () => {
            try {
                dispatch(GetExtrasItems());
            } catch (error) {}
        };

        loadExtras();

    }, [])


    return (
        <div></div>
    )
}

export default Extras;
