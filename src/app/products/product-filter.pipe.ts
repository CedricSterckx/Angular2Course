

import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';
@Pipe({
name: 'productFilter'
})

export class ProdutFilterPipe implements PipeTransform{

    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
