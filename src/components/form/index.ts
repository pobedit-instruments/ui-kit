import AntForm from 'antd/lib/form';
import {Form as OriginalForm} from './form';

import {Item} from './item';
import {ErrorList} from './error-list';
import {List} from './list';
import {Provider} from './provider';

const AntUseForm = AntForm.useForm;

type FormType = typeof OriginalForm & {
    Item: typeof Item;
    ErrorList: typeof ErrorList;
    List: typeof List;
    Provider: typeof Provider;
    useForm: typeof AntUseForm;
};

const Form = OriginalForm as FormType;

Form.List = List;
Form.ErrorList = ErrorList;
Form.Item = Item;
Form.Provider = Provider;
Form.useForm = AntUseForm;

export {Form};

export type {
    FormInstance,
    FormProps,
    FormItemProps,
    FormListProps,
    ErrorListProps,
    Rule as FormRule,
    RuleObject as FormRuleObject,
    RuleRender as FormRuleRender
} from 'antd/lib/form';

