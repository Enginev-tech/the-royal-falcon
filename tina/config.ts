import { defineConfig } from "tinacms"

const branch =
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Settings",
        path: "content",
        format: "json",
        match: {
          include: "site",
        },
        fields: [
          { name: "name", label: "Name", type: "string" },
          { name: "tagline", label: "Tagline", type: "string" },
          { name: "email", label: "Email", type: "string" },
          { name: "address", label: "Address", type: "string" },
          { name: "whatsapp", label: "WhatsApp", type: "string" },
          { name: "phone", label: "Phone", type: "string" },
          {
            name: "social",
            label: "Social Links",
            type: "object",
            fields: [
              { name: "facebook", label: "Facebook", type: "string" },
              { name: "instagram", label: "Instagram", type: "string" },
              { name: "tiktok", label: "TikTok", type: "string" },
            ],
          },
          {
            name: "hours",
            label: "Opening Hours",
            type: "object",
            fields: [
              { name: "weekdays", label: "Weekdays", type: "string" },
              { name: "weekend", label: "Weekend", type: "string" },
              { name: "closed", label: "Closed", type: "string" },
            ],
          },
        ],
      },
      {
        name: "menus",
        label: "Menus",
        path: "content",
        format: "json",
        match: {
          include: "menus",
        },
        fields: [
          {
            name: "lunch",
            label: "Lunch",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "diner",
            label: "Diner",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "kids",
            label: "Kids",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "borrel",
            label: "Bar Bites",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "cocktails",
            label: "Cocktails",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "wines",
            label: "Wines",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "beers",
            label: "Beers",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                name: "categories",
                label: "Categories",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  {
                    name: "items",
                    label: "Items",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "name", label: "Name", type: "string" },
                      { name: "description", label: "Description", type: "string" },
                      { name: "price", label: "Price", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
