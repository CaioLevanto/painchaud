import { findAll, isEdit, getAction, isDelete, isInsert, isUpdate } from './functions/productFunction.js';
import Grid from '../../components/customGridResponsive.js';
import * as Field from '../../components/customFields.js';
import InterfacePages from '../../interface/InterfacePages.js';

export default class ProductCrudPage extends InterfacePages {

    constructor() {
        super();
        
        this.grid = new Grid();
    }

    static fields = {
        'Descricao': 'string',
        'Local': [ 'Balcao', 'Embalado' ],
        'Tipo': [ 'Unidade', 'Peso' ],
        'Valor': 'money',
        'Action': 'Action'
    }

    getFields() {
        return Field.createElementsFields({
            col: ProductCrudPage.fields
        });
    }

    getGrid() {
        return this.grid.createGridElement({
            col: ProductCrudPage.fields,
            value: findAll(0), 
            hasSearch: true, 
            hasHeader: true,
            findDB: false
        });
    }

    getAction() {
        return getAction();
    }

    isDelete(id) {
        return isDelete(id);
    }

    isUpdate(obj) {
        return isUpdate(obj);
    }

    isInsert(obj) {
        return isInsert(obj);
    }

    isEdit(id) {
        return isEdit(id);
    }

};