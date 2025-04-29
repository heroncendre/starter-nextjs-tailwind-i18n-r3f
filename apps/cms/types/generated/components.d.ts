import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleContentImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_article_content_image_blocks';
  info: {
    description: '';
    displayName: 'ImageBlock';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ArticleContentPhotoCarousel extends Struct.ComponentSchema {
  collectionName: 'components_article_content_photo_carousels';
  info: {
    description: '';
    displayName: 'PhotoCarousel';
    icon: 'landscape';
  };
  attributes: {
    autoPlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    delay: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<4>;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    photos: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ArticleContentPhotoGallery extends Struct.ComponentSchema {
  collectionName: 'components_article_content_photo_galleries';
  info: {
    description: '';
    displayName: 'PhotoGallery';
    icon: 'apps';
  };
  attributes: {
    layout: Schema.Attribute.String & Schema.Attribute.DefaultTo<'1'>;
    photos: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ArticleContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_article_content_text_blocks';
  info: {
    description: '';
    displayName: 'TextBlock';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ArticleContentVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_article_content_video_blocks';
  info: {
    displayName: 'VideoBlock';
    icon: 'play';
  };
  attributes: {
    video: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::oembed.oembed'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-content.image-block': ArticleContentImageBlock;
      'article-content.photo-carousel': ArticleContentPhotoCarousel;
      'article-content.photo-gallery': ArticleContentPhotoGallery;
      'article-content.text-block': ArticleContentTextBlock;
      'article-content.video-block': ArticleContentVideoBlock;
    }
  }
}
