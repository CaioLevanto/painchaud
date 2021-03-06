import { findAll, isEdit, getAction, isDelete, isInsert, isUpdate } from './functions/comandaFunction.js';
import InterfacePages from '../../interface/InterfacePages.js';
import Grid from '../../components/customGridResponsive.js';
import * as Field from '../../components/customFields.js';

export default class ComandaCrudPage extends InterfacePages {
    
    constructor() {
        super();
        
        this.grid = new Grid();
    }

    static fields = {
        'Produto': [ 
            [0, "Pao", "1", 5.40], //Alterar o R$ e trocar virgula por .
            [1, "Coxinha", "0", 2.50],
            [2, "Risoles", "0", 3.80],
            [3, "Bolo", "0", 8.20] 
        ],
        'Quantidade': 'Number,Add',
        'Valor': 'string',
        'Action': 'Action'
    }

    getFields(isReturn) {
        return Field.createElementsFields({
            col: ComandaCrudPage.fields,
            hiddenField: ["Valor"],
            isReturn: isReturn,
            clearGrid: true
        });
    }

    getGrid() {
        return this.grid.createGridElement({
           col: ComandaCrudPage.fields, 
           value: findAll(), 
           hasSearch: true, 
           hasHeader: true,
           fieldEdit: ["Quantidade"],
           hasFooter: true,
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