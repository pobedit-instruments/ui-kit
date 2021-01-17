import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Pulsar} from 'src/components';

import 'antd/dist/antd.css';

const Component: React.FunctionComponent<any> = ({...props}) => (
    <div>
        <Button {...props}>
            Текст
        </Button>
        <Pulsar />
    </div>
);

const container = document.getElementById('preview');

ReactDOM.render(<Component />, container);
