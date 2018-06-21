import React from 'react';
import PropTypes from 'prop-types';
import ImageCover from '../image-cover';

import styles from './styles/styles.scss';

class MovieImage extends React.Component {
    state = {
        loaded: true,
        error: false
    }

    render() {
        const { src, alt, className } = this.props;
        const style = {
            position: 'relative'
        };
        return (
            <div className={styles.movieImage} style={style}>
                {
                    !this.state.loaded
                        ? (
                            <ImageCover visible={!this.state.loaded}>
                                <img className="loading" src="http://www.mywebtimes.com/images/2017/loading.gif" />
                            </ImageCover>
                        )
                        : ``
                }
                {
                    !this.state.error
                        ? (
                            <img onLoad={
                                () => this.setState({
                                    loaded: true,
                                    error: false
                                })}
                                onError={
                                    () => this.setState({
                                        loaded: true,
                                        error: true
                                    })
                                }
                                src={src}
                                alt={alt}
                                className={className} />
                        )
                        : (
                            <ImageCover visible={true}>
                                <img className="no-image" style={{ maxWidth: '150px', maxHeight: '150px' }} src="https://www.artengo.co.uk/sites/artengo/files/styles/460x460/public/default_images/no-picture.png?itok=V-Gj1OhE" />
                            </ImageCover>
                        )
                }

            </div>
        );
    }
}

MovieImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

export default MovieImage;
