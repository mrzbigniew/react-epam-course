import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withReadme, withDocs } from 'storybook-readme';

import ResultsItemReadme from '../src/components/results-item/README.md';
import ResultsItem from '../src/components/results-item/index.jsx';

const stories = storiesOf('Results item', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocs(ResultsItemReadme));
stories.addDecorator(withReadme(ResultsItemReadme));

stories.add('Basic usage', () => {
    const props = {
        poster_path: text('Movie image', 'https://image.tmdb.org/t/p/w500/wB58wlBAr6484Wm6VyFDqSD8VOJ.jpg'),
        title: text('Movie title', "Frankenstein"),
        release_year: text('Movie title', "1931"),
        genre: text('Movie genre', "Drama")
    };

    return (
        <div>
            <ResultsItem {...props}></ResultsItem>
        </div>
    );
});
