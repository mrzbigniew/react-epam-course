import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../../components/button';

import './styles/styles.scss';

const BackToSearch = withRouter(({ history }) => {
    return (
        <Button className="btn btn-text btn-sm back-to-search"
                onClick={history.goBack}
        >
            search
        </Button>
    );
});

export default BackToSearch;
