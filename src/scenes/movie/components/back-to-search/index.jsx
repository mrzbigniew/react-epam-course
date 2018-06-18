import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../../components/button';

import styles from './styles/styles.scss';

const BackToSearch = withRouter(({ history }) => (
        <Button className={`btn btn-text btn-sm ${styles.backToSearch}`}
                onClick={history.goBack}
        >
            search
        </Button>
));

export default BackToSearch;
