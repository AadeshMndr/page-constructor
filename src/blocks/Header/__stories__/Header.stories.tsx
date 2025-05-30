import * as React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ButtonProps, HeaderBlockModel, HeaderBlockProps} from '../../../models';
import Header from '../Header';

import data from './data.json';

type HeaderBlockPropsNoTitle = Omit<HeaderBlockProps, 'title'>;

const getSizeTitle = (size: string) => data.size.title.replace('{{size}}', size);
const getImageTitle = (text: string) => data.image.title.replace('{{text}}', text);
const getVerticalOffsetTitle = (offset: string) =>
    data.verticalOffset.title.replace('{{offset}}', offset);
const getBreadcrumbsTitle = (theme: string) => data.breadcrumbs.title.replace('{{theme}}', theme);

export default {
    title: 'Blocks/Header',
    component: Header,
    args: {
        image: undefined,
        video: undefined,
        background: undefined,
        breadcrumbs: undefined,
        offset: 'default',
        theme: 'light',
        verticalOffset: 'm',
        centered: undefined,
    },
    argTypes: {
        overtitle: {control: 'text'},
    },
} as Meta;

const DefaultArgs = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    additionalInfo: yfmTransform(data.default.content.additionalInfo),
};

const DefaultTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

const SizeTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getSizeTitle('"L"')} width="l" />
        <DefaultTemplate {...args} title={getSizeTitle('"M"')} width="m" />
        <DefaultTemplate {...args} title={getSizeTitle('"S"')} width="s" />
    </React.Fragment>
);

const CenteredTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getSizeTitle('"L"')} width="l" centered />
        <DefaultTemplate {...args} title={getSizeTitle('"M"')} width="m" centered />
        <DefaultTemplate {...args} title={getSizeTitle('"S"')} width="s" centered />
    </React.Fragment>
);

const ImageTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getImageTitle('«M»')} width="m" />
        <DefaultTemplate {...args} title={getImageTitle('«S»')} width="s" />
    </React.Fragment>
);

const FitTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getImageTitle('«M»')} width="m" />
        <DefaultTemplate
            {...args}
            {...data.imageFit.content}
            title={getImageTitle('«S»')}
            width="s"
        />
        <DefaultTemplate {...args} {...data.video.content} title={getImageTitle('«S»')} width="s" />
        <DefaultTemplate
            {...args}
            {...data.videoFit.content}
            title={getImageTitle('«S»')}
            width="s"
            description={yfmTransform(data.videoFit.description)}
        />
    </React.Fragment>
);

const VerticalOffsetTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«0»')} verticalOffset="0" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«S»')} verticalOffset="s" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«M»')} verticalOffset="m" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«L»')} verticalOffset="l" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«XL»')} verticalOffset="xl" />
    </React.Fragment>
);

const BackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={data.media.content.image.background}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={data.media.content.video.background}
        />
    </React.Fragment>
);

const FullWithBackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={{
                light: {
                    ...data.media.content.image.background.light,
                    fullWidth: true,
                },
                dark: {
                    ...data.media.content.image.background.dark,
                    fullWidth: true,
                },
            }}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={{
                light: {
                    ...data.media.content.video.background.light,
                    fullWidth: true,
                },
                dark: {
                    ...data.media.content.video.background.dark,
                    fullWidth: true,
                },
            }}
        />
    </React.Fragment>
);

const FullWidthMediaBackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={{
                light: {
                    ...data.media.content.image.background.light,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
                dark: {
                    ...data.media.content.image.background.dark,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
            }}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={{
                light: {
                    ...data.media.content.video.background.light,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
                dark: {
                    ...data.media.content.video.background.dark,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
            }}
        />
    </React.Fragment>
);

const BreadCrumbsTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <React.Fragment>
        <DefaultTemplate {...args} title={getBreadcrumbsTitle('light')} />
        <DefaultTemplate
            {...args}
            title={getBreadcrumbsTitle('dark')}
            theme={data.themeDark.content.theme as 'dark'}
            background={data.themeDark.content.background}
            buttons={
                data.themeDark.content.buttons as Pick<
                    ButtonProps,
                    'url' | 'text' | 'theme' | 'primary' | 'size'
                >[]
            }
        />
    </React.Fragment>
);

export const Default = DefaultTemplate.bind({});
export const Size = SizeTemplate.bind({});
export const Centered = CenteredTemplate.bind({});
export const Image = ImageTemplate.bind({});
export const VerticalOffset = VerticalOffsetTemplate.bind({});
export const Background = BackgroundTemplate.bind({});
export const FullWithBackground = FullWithBackgroundTemplate.bind({});
export const FullWidthMediaBackground = FullWidthMediaBackgroundTemplate.bind({});
export const DarkTheme = DefaultTemplate.bind({});
export const Breadcrumbs = BreadCrumbsTemplate.bind({});
export const MediaViewFit = FitTemplate.bind({});

Default.args = {...DefaultArgs} as HeaderBlockProps;

Size.args = {...DefaultArgs} as HeaderBlockPropsNoTitle;

Centered.args = {...DefaultArgs} as HeaderBlockPropsNoTitle;

Image.args = {
    ...DefaultArgs,
    ...data.image.content,
} as HeaderBlockPropsNoTitle;

VerticalOffset.args = {
    ...DefaultArgs,
    ...data.image.content,
} as HeaderBlockPropsNoTitle;

Background.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

FullWithBackground.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

FullWidthMediaBackground.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

DarkTheme.args = {
    ...DefaultArgs,
    ...data.themeDark.content,
} as HeaderBlockProps;

Breadcrumbs.args = {
    ...DefaultArgs,
    ...data.breadcrumbs.content,
} as HeaderBlockProps;

MediaViewFit.args = {
    ...DefaultArgs,
    ...data.image.content,
    mediaView: 'fit',
} as HeaderBlockProps;
