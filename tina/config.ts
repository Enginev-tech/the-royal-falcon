import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_READ_TOKEN || process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'site',
        label: 'Site Settings',
        path: 'content',
        format: 'json',
        match: { include: 'site' },
        fields: [
          { type: 'string', name: 'name', label: 'Name' },
          { type: 'string', name: 'tagline', label: 'Tagline' },
          { type: 'string', name: 'email', label: 'Email' },
          { type: 'string', name: 'address', label: 'Address' },
          { type: 'string', name: 'whatsapp', label: 'WhatsApp' },
          { type: 'string', name: 'phone', label: 'Phone' },
          {
            type: 'object',
            name: 'social',
            label: 'Social Links',
            fields: [
              { type: 'string', name: 'facebook', label: 'Facebook' },
              { type: 'string', name: 'instagram', label: 'Instagram' },
              { type: 'string', name: 'tiktok', label: 'TikTok' },
            ],
          },
          {
            type: 'object',
            name: 'hours',
            label: 'Opening Hours',
            fields: [
              { type: 'string', name: 'weekdays', label: 'Weekdays' },
              { type: 'string', name: 'weekend', label: 'Weekend' },
              { type: 'string', name: 'closed', label: 'Closed' },
            ],
          },
        ],
      },
      {
        name: 'menus',
        label: 'Menus',
        path: 'content',
        format: 'json',
        match: { include: 'menus' },
        fields: [
          {
            type: 'object',
            name: 'lunch',
            label: 'Lunch',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'diner',
            label: 'Diner',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'kids',
            label: 'Kids',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'borrel',
            label: 'Bar Bites',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'cocktails',
            label: 'Cocktails',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'wines',
            label: 'Wines',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'beers',
            label: 'Beers',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              {
                type: 'object',
                name: 'categories',
                label: 'Categories',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'description', label: 'Description' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'home',
        label: 'Home',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'home' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'mainEvent',
            label: 'Main Event',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              {
                type: 'object',
                name: 'image',
                label: 'Image',
                fields: [
                  { type: 'string', name: 'src', label: 'Source' },
                  { type: 'string', name: 'alt', label: 'Alt' },
                  { type: 'string', name: 'badge', label: 'Badge' },
                ],
              },
              {
                type: 'object',
                name: 'content',
                label: 'Content',
                fields: [
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'bullets', label: 'Bullets', list: true },
                  {
                    type: 'object',
                    name: 'ctas',
                    label: 'CTAs',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                      { type: 'string', name: 'style', label: 'Style' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'services',
            label: 'Services',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                  {
                    type: 'object',
                    name: 'cta',
                    label: 'CTA',
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'menus',
            label: 'Menus',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                  {
                    type: 'object',
                    name: 'cta',
                    label: 'CTA',
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'eten',
        label: 'Eten',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'eten' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'chefSpecials',
            label: 'Chef Specials',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'lunch',
            label: 'Lunch',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'diner',
            label: 'Diner',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'kids',
            label: 'Kids',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'borrel',
            label: 'Bar Bites',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'reservation',
            label: 'Reservation',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              {
                type: 'object',
                name: 'card',
                label: 'Card',
                fields: [
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'bullets', label: 'Bullets', list: true },
                  {
                    type: 'object',
                    name: 'ctas',
                    label: 'CTAs',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                    ],
                  },
                  {
                    type: 'object',
                    name: 'image',
                    label: 'Image',
                    fields: [
                      { type: 'string', name: 'src', label: 'Source' },
                      { type: 'string', name: 'alt', label: 'Alt' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'drinken',
        label: 'Drinken',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'drinken' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'bartendersChoice',
            label: 'Bartenders Choice',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'cocktails',
            label: 'Cocktails',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'wines',
            label: 'Wines',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'beers',
            label: 'Beers',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
            ],
          },
          {
            type: 'object',
            name: 'gallery',
            label: 'Gallery',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'images',
                label: 'Images',
                list: true,
                fields: [
                  { type: 'string', name: 'src', label: 'Source' },
                  { type: 'string', name: 'alt', label: 'Alt' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'desserts',
            label: 'Desserts',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'string', name: 'desc', label: 'Description' },
                  { type: 'string', name: 'price', label: 'Price' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'entertainment',
        label: 'Entertainment',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'entertainment' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'gamesIntro',
            label: 'Games Intro',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'gameRulesSection',
            label: 'Game Rules Section',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'helpCard',
                label: 'Help Card',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  {
                    type: 'object',
                    name: 'cta',
                    label: 'CTA',
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'gameRules',
            label: 'Game Rules',
            fields: [
              {
                type: 'object',
                name: 'snooker',
                label: 'Snooker',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'intro', label: 'Intro' },
                  { type: 'string', name: 'rules', label: 'Rules', list: true },
                  { type: 'string', name: 'tips', label: 'Tips', list: true },
                ],
              },
              {
                type: 'object',
                name: 'biljart',
                label: 'Biljart',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'intro', label: 'Intro' },
                  { type: 'string', name: 'rules', label: 'Rules', list: true },
                  { type: 'string', name: 'tips', label: 'Tips', list: true },
                ],
              },
              {
                type: 'object',
                name: 'darts',
                label: 'Darts',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'intro', label: 'Intro' },
                  { type: 'string', name: 'rules', label: 'Rules', list: true },
                  { type: 'string', name: 'tips', label: 'Tips', list: true },
                ],
              },
              {
                type: 'object',
                name: 'fifa',
                label: 'FIFA',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'intro', label: 'Intro' },
                  { type: 'string', name: 'rules', label: 'Rules', list: true },
                  { type: 'string', name: 'tips', label: 'Tips', list: true },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'pricing',
            label: 'Pricing',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'price', label: 'Price' },
                ],
              },
              {
                type: 'object',
                name: 'booking',
                label: 'Booking',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  {
                    type: 'object',
                    name: 'ctas',
                    label: 'CTAs',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'club',
            label: 'Club',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'info',
                label: 'Info',
                fields: [
                  {
                    type: 'object',
                    name: 'image',
                    label: 'Image',
                    fields: [
                      { type: 'string', name: 'src', label: 'Source' },
                      { type: 'string', name: 'alt', label: 'Alt' },
                    ],
                  },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'benefitsTitle', label: 'Benefits Title' },
                  { type: 'string', name: 'benefits', label: 'Benefits', list: true },
                  {
                    type: 'object',
                    name: 'fee',
                    label: 'Fee',
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'note', label: 'Note' },
                      { type: 'string', name: 'price', label: 'Price' },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                name: 'membership',
                label: 'Membership',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'ctaLabel', label: 'CTA Label' },
                  { type: 'string', name: 'intro', label: 'Intro' },
                  {
                    type: 'object',
                    name: 'form',
                    label: 'Form',
                    fields: [
                      { type: 'string', name: 'submitLabel', label: 'Submit Label' },
                      { type: 'string', name: 'cancelLabel', label: 'Cancel Label' },
                      {
                        type: 'object',
                        name: 'fields',
                        label: 'Fields',
                        fields: [
                          { type: 'string', name: 'name', label: 'Name' },
                          { type: 'string', name: 'email', label: 'Email' },
                          { type: 'string', name: 'phone', label: 'Phone' },
                          { type: 'string', name: 'gamePreference', label: 'Game Preference' },
                          { type: 'string', name: 'experience', label: 'Experience' },
                        ],
                      },
                      {
                        type: 'object',
                        name: 'options',
                        label: 'Options',
                        fields: [
                          {
                            type: 'object',
                            name: 'gamePreference',
                            label: 'Game Preference',
                            list: true,
                            fields: [
                              { type: 'string', name: 'label', label: 'Label' },
                              { type: 'string', name: 'value', label: 'Value' },
                            ],
                          },
                          {
                            type: 'object',
                            name: 'experience',
                            label: 'Experience',
                            list: true,
                            fields: [
                              { type: 'string', name: 'label', label: 'Label' },
                              { type: 'string', name: 'value', label: 'Value' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                name: 'schedule',
                label: 'Schedule',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'day', label: 'Day' },
                      { type: 'string', name: 'time', label: 'Time' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'events',
        label: 'Events',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'events' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'weekAgenda',
            label: 'Week Agenda',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'days',
                label: 'Days',
                list: true,
                fields: [
                  { type: 'string', name: 'day', label: 'Day' },
                  { type: 'string', name: 'date', label: 'Date' },
                  { type: 'string', name: 'events', label: 'Events', list: true },
                  { type: 'boolean', name: 'special', label: 'Special' },
                ],
              },
              {
                type: 'object',
                name: 'cta',
                label: 'CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'Href' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'calendar',
            label: 'Calendar',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'month', label: 'Month' },
              {
                type: 'object',
                name: 'weeks',
                label: 'Weeks',
                list: true,
                fields: [
                  {
                    type: 'object',
                    name: 'days',
                    label: 'Days',
                    list: true,
                    fields: [
                      { type: 'number', name: 'day', label: 'Day', required: false },
                      { type: 'string', name: 'events', label: 'Events', list: true },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                name: 'highlights',
                label: 'Highlights',
                list: true,
                fields: [
                  { type: 'string', name: 'date', label: 'Date' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'desc', label: 'Description' },
                ],
              },
              {
                type: 'object',
                name: 'planVisit',
                label: 'Plan Visit',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  {
                    type: 'object',
                    name: 'ctas',
                    label: 'CTAs',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                      { type: 'string', name: 'style', label: 'Style' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'liveSport',
            label: 'Live Sport',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'highlight',
                label: 'Highlight',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                ],
              },
              {
                type: 'object',
                name: 'matches',
                label: 'Matches',
                list: true,
                fields: [
                  { type: 'string', name: 'time', label: 'Time' },
                  { type: 'string', name: 'competition', label: 'Competition' },
                  { type: 'string', name: 'home', label: 'Home' },
                  { type: 'string', name: 'away', label: 'Away' },
                  { type: 'string', name: 'channel', label: 'Channel' },
                ],
              },
              {
                type: 'object',
                name: 'results',
                label: 'Results',
                list: true,
                fields: [
                  { type: 'string', name: 'competition', label: 'Competition' },
                  { type: 'string', name: 'home', label: 'Home' },
                  { type: 'number', name: 'homeScore', label: 'Home Score' },
                  { type: 'string', name: 'away', label: 'Away' },
                  { type: 'number', name: 'awayScore', label: 'Away Score' },
                ],
              },
              {
                type: 'object',
                name: 'standings',
                label: 'Standings',
                list: true,
                fields: [
                  { type: 'string', name: 'league', label: 'League' },
                  {
                    type: 'object',
                    name: 'teams',
                    label: 'Teams',
                    list: true,
                    fields: [
                      { type: 'number', name: 'pos', label: 'Position' },
                      { type: 'string', name: 'team', label: 'Team' },
                      { type: 'number', name: 'pts', label: 'Points' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'mainEvents',
            label: 'Main Events',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                  { type: 'string', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                  { type: 'string', name: 'bullets', label: 'Bullets', list: true },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'specialEvents',
            label: 'Special Events',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'card',
                label: 'Card',
                fields: [
                  { type: 'string', name: 'description', label: 'Description' },
                  {
                    type: 'object',
                    name: 'ctas',
                    label: 'CTAs',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'Href' },
                      { type: 'string', name: 'style', label: 'Style' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'over-ons',
        label: 'Over Ons',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'over-ons' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'about',
            label: 'About',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              { type: 'string', name: 'paragraphs', label: 'Paragraphs', list: true },
              {
                type: 'object',
                name: 'image',
                label: 'Image',
                fields: [
                  { type: 'string', name: 'src', label: 'Source' },
                  { type: 'string', name: 'alt', label: 'Alt' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'values',
            label: 'Values',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                fields: [
                  { type: 'string', name: 'key', label: 'Key' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'desc', label: 'Description' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'location',
            label: 'Location',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'address',
                label: 'Address',
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'string', name: 'street', label: 'Street' },
                  { type: 'string', name: 'city', label: 'City' },
                  { type: 'string', name: 'country', label: 'Country' },
                  { type: 'string', name: 'phone', label: 'Phone' },
                  { type: 'string', name: 'email', label: 'Email' },
                ],
              },
              {
                type: 'object',
                name: 'hours',
                label: 'Hours',
                list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'value', label: 'Value' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'contact',
        label: 'Contact',
        path: 'src/content/pages',
        format: 'json',
        match: { include: 'contact' },
        fields: [
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description' },
              { type: 'string', name: 'path', label: 'Path' },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact Section',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'key', label: 'Key' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'parallax',
            label: 'Parallax',
            list: true,
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'height', label: 'Height' },
            ],
          },
          {
            type: 'object',
            name: 'visit',
            label: 'Visit',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              { type: 'string', name: 'addressTitle', label: 'Address Title' },
              {
                type: 'object',
                name: 'mapCta',
                label: 'Map CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'Href' },
                ],
              },
              { type: 'string', name: 'hoursTitle', label: 'Hours Title' },
              {
                type: 'object',
                name: 'hours',
                label: 'Hours',
                list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'value', label: 'Value' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'booking',
            label: 'Booking',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'form',
                label: 'Form',
                fields: [
                  {
                    type: 'object',
                    name: 'sections',
                    label: 'Sections',
                    fields: [
                      { type: 'string', name: 'personal', label: 'Personal' },
                      { type: 'string', name: 'reservation', label: 'Reservation' },
                      { type: 'string', name: 'notes', label: 'Notes' },
                    ],
                  },
                  {
                    type: 'object',
                    name: 'labels',
                    label: 'Labels',
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'phone', label: 'Phone' },
                      { type: 'string', name: 'email', label: 'Email' },
                      { type: 'string', name: 'date', label: 'Date' },
                      { type: 'string', name: 'time', label: 'Time' },
                      { type: 'string', name: 'persons', label: 'Persons' },
                      { type: 'string', name: 'occasion', label: 'Occasion' },
                    ],
                  },
                  {
                    type: 'object',
                    name: 'placeholders',
                    label: 'Placeholders',
                    fields: [
                      { type: 'string', name: 'name', label: 'Name' },
                      { type: 'string', name: 'phone', label: 'Phone' },
                      { type: 'string', name: 'email', label: 'Email' },
                      { type: 'string', name: 'notes', label: 'Notes' },
                    ],
                  },
                  {
                    type: 'object',
                    name: 'options',
                    label: 'Options',
                    fields: [
                      {
                        type: 'object',
                        name: 'persons',
                        label: 'Persons',
                        list: true,
                        fields: [
                          { type: 'string', name: 'label', label: 'Label' },
                          { type: 'string', name: 'value', label: 'Value' },
                        ],
                      },
                      {
                        type: 'object',
                        name: 'occasion',
                        label: 'Occasion',
                        list: true,
                        fields: [
                          { type: 'string', name: 'label', label: 'Label' },
                          { type: 'string', name: 'value', label: 'Value' },
                        ],
                      },
                    ],
                  },
                  { type: 'string', name: 'submit', label: 'Submit' },
                  { type: 'string', name: 'note', label: 'Note' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social',
            fields: [
              {
                type: 'object',
                name: 'section',
                label: 'Section',
                fields: [
                  { type: 'string', name: 'id', label: 'ID' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'string', name: 'variant', label: 'Variant' },
                ],
              },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'key', label: 'Key' },
                  { type: 'string', name: 'label', label: 'Label' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
