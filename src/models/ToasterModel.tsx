import React from 'react';
import IToaster from '../interfaces/IToaster';

export default class ToasterModel extends React.Component<IToaster, IToaster> {
    constructor(props: IToaster) {
        super(props)
        this.state = {
            isVisible: props.isVisible,
            isSuccess: props.isSuccess,
            body: props.body
        }
    }
}