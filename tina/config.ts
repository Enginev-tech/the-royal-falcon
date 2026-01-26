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
      {
        name: "pageHome",
        label: "Page - Home",
        path: "content/pages",
        format: "json",
        match: {
          include: "home",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "mainEvent",
            label: "Main Event",
            type: "object",
            fields: [
              { name: "sectionTitle", label: "Section Title", type: "string" },
              { name: "sectionSubtitle", label: "Section Subtitle", type: "string" },
              { name: "badge", label: "Badge", type: "string" },
              { name: "cardTitle", label: "Card Title", type: "string" },
              { name: "cardDescription", label: "Card Description", type: "string" },
              { name: "bullets", label: "Bullets", type: "string", list: true },
              {
                name: "primaryCta",
                label: "Primary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
              {
                name: "secondaryCta",
                label: "Secondary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
            ],
          },
          {
            name: "services",
            label: "Services",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "menus",
            label: "Menus",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
        ],
      },
      {
        name: "pageEten",
        label: "Page - Eten",
        path: "content/pages",
        format: "json",
        match: {
          include: "eten",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "chefSpecials",
            label: "Chef Specials",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "lunch",
            label: "Lunch",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "diner",
            label: "Diner",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "kids",
            label: "Kids",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "borrel",
            label: "Bar Bites",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "reservation",
            label: "Reservation",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "cardTitle", label: "Card Title", type: "string" },
              { name: "cardIntro", label: "Card Intro", type: "string" },
              { name: "bullets", label: "Bullets", type: "string", list: true },
              {
                name: "primaryCta",
                label: "Primary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
              {
                name: "secondaryCta",
                label: "Secondary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pageDrinken",
        label: "Page - Drinken",
        path: "content/pages",
        format: "json",
        match: {
          include: "drinken",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "bartendersChoice",
            label: "Bartenders Choice",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "cocktailMenu",
            label: "Cocktail Menu",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "wineMenu",
            label: "Wine Menu",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "beerMenu",
            label: "Beer Menu",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "gallery",
            label: "Gallery",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "sweets",
            label: "Sweets",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              {
                name: "items",
                label: "Items",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  { name: "desc", label: "Description", type: "string" },
                  { name: "price", label: "Price", type: "string" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pageEntertainment",
        label: "Page - Entertainment",
        path: "content/pages",
        format: "json",
        match: {
          include: "entertainment",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "games",
            label: "Games",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "rules",
            label: "Rules",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "gameRules",
            label: "Game Rules",
            type: "object",
            list: true,
            fields: [
              { name: "key", label: "Key", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "rules", label: "Rules", type: "string", list: true },
              { name: "tips", label: "Tips", type: "string", list: true },
            ],
          },
          {
            name: "pricing",
            label: "Pricing",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              {
                name: "items",
                label: "Items",
                type: "object",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  { name: "note", label: "Note", type: "string" },
                  { name: "price", label: "Price", type: "string" },
                  { name: "accent", label: "Accent", type: "string" },
                ],
              },
              { name: "bookingTitle", label: "Booking Title", type: "string" },
              { name: "bookingIntro", label: "Booking Intro", type: "string" },
              {
                name: "bookingCtas",
                label: "Booking CTAs",
                type: "object",
                list: true,
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
            ],
          },
          {
            name: "club",
            label: "Club",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "aboutTitle", label: "About Title", type: "string" },
              { name: "aboutText", label: "About Text", type: "string" },
              { name: "benefitsTitle", label: "Benefits Title", type: "string" },
              { name: "benefits", label: "Benefits", type: "string", list: true },
              { name: "feeLabel", label: "Fee Label", type: "string" },
              { name: "feeNote", label: "Fee Note", type: "string" },
              { name: "feeAmount", label: "Fee Amount", type: "string" },
              { name: "memberFormTitle", label: "Member Form Title", type: "string" },
              { name: "memberFormIntro", label: "Member Form Intro", type: "string" },
              { name: "memberFormCta", label: "Member Form CTA", type: "string" },
              { name: "scheduleTitle", label: "Schedule Title", type: "string" },
              {
                name: "schedule",
                label: "Schedule",
                type: "object",
                list: true,
                fields: [
                  { name: "day", label: "Day", type: "string" },
                  { name: "time", label: "Time", type: "string" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pageEvents",
        label: "Page - Events",
        path: "content/pages",
        format: "json",
        match: {
          include: "events",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "agenda",
            label: "Agenda",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "ctaLabel", label: "CTA Label", type: "string" },
              { name: "ctaHref", label: "CTA Href", type: "string" },
            ],
          },
          {
            name: "weekAgenda",
            label: "Week Agenda",
            type: "object",
            list: true,
            fields: [
              { name: "day", label: "Day", type: "string" },
              { name: "date", label: "Date", type: "string" },
              { name: "events", label: "Events", type: "string", list: true },
              { name: "special", label: "Special", type: "boolean" },
            ],
          },
          {
            name: "calendar",
            label: "Calendar",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "month", label: "Month", type: "string" },
              { name: "highlightsTitle", label: "Highlights Title", type: "string" },
              { name: "highlightsIntro", label: "Highlights Intro", type: "string" },
              { name: "planTitle", label: "Plan Title", type: "string" },
              { name: "planIntro", label: "Plan Intro", type: "string" },
              {
                name: "planPrimaryCta",
                label: "Plan Primary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
              {
                name: "planSecondaryCta",
                label: "Plan Secondary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
              {
                name: "weeks",
                label: "Weeks",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "days",
                    label: "Days",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "day", label: "Day", type: "number" },
                      { name: "events", label: "Events", type: "string", list: true },
                    ],
                  },
                ],
              },
              {
                name: "highlights",
                label: "Highlights",
                type: "object",
                list: true,
                fields: [
                  { name: "date", label: "Date", type: "string" },
                  { name: "title", label: "Title", type: "string" },
                  { name: "desc", label: "Description", type: "string" },
                ],
              },
            ],
          },
          {
            name: "liveSport",
            label: "Live Sport",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "highlightsTitle", label: "Highlights Title", type: "string" },
              { name: "highlightsIntro", label: "Highlights Intro", type: "string" },
              { name: "upcomingTitle", label: "Upcoming Title", type: "string" },
              { name: "upcomingSubtitle", label: "Upcoming Subtitle", type: "string" },
              { name: "recentTitle", label: "Recent Title", type: "string" },
              { name: "recentSubtitle", label: "Recent Subtitle", type: "string" },
              { name: "standingsTitle", label: "Standings Title", type: "string" },
              { name: "standingsSubtitle", label: "Standings Subtitle", type: "string" },
            ],
          },
          {
            name: "liveMatches",
            label: "Live Matches",
            type: "object",
            list: true,
            fields: [
              { name: "time", label: "Time", type: "string" },
              { name: "competition", label: "Competition", type: "string" },
              { name: "home", label: "Home", type: "string" },
              { name: "away", label: "Away", type: "string" },
              { name: "channel", label: "Channel", type: "string" },
            ],
          },
          {
            name: "recentResults",
            label: "Recent Results",
            type: "object",
            list: true,
            fields: [
              { name: "competition", label: "Competition", type: "string" },
              { name: "home", label: "Home", type: "string" },
              { name: "homeScore", label: "Home Score", type: "number" },
              { name: "away", label: "Away", type: "string" },
              { name: "awayScore", label: "Away Score", type: "number" },
            ],
          },
          {
            name: "standings",
            label: "Standings",
            type: "object",
            list: true,
            fields: [
              { name: "league", label: "League", type: "string" },
              {
                name: "teams",
                label: "Teams",
                type: "object",
                list: true,
                fields: [
                  { name: "pos", label: "Position", type: "number" },
                  { name: "team", label: "Team", type: "string" },
                  { name: "pts", label: "Points", type: "number" },
                ],
              },
            ],
          },
          {
            name: "mainEvents",
            label: "Main Events",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              {
                name: "items",
                label: "Items",
                type: "object",
                list: true,
                fields: [
                  { name: "title", label: "Title", type: "string" },
                  { name: "description", label: "Description", type: "string" },
                  { name: "image", label: "Image", type: "string" },
                  { name: "imageAlt", label: "Image Alt", type: "string" },
                  { name: "bullets", label: "Bullets", type: "string", list: true },
                ],
              },
            ],
          },
          {
            name: "specialEvents",
            label: "Special Events",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "cardText", label: "Card Text", type: "string" },
              {
                name: "primaryCta",
                label: "Primary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
              {
                name: "secondaryCta",
                label: "Secondary CTA",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "href", label: "Href", type: "string" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pageOverOns",
        label: "Page - Over ons",
        path: "content/pages",
        format: "json",
        match: {
          include: "over-ons",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "about",
            label: "About",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "story", label: "Story", type: "string", list: true },
            ],
          },
          {
            name: "values",
            label: "Values",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              {
                name: "items",
                label: "Items",
                type: "object",
                list: true,
                fields: [
                  { name: "icon", label: "Icon Key", type: "string" },
                  { name: "title", label: "Title", type: "string" },
                  { name: "desc", label: "Description", type: "string" },
                ],
              },
            ],
          },
          {
            name: "location",
            label: "Location",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
        ],
      },
      {
        name: "pageContact",
        label: "Page - Contact",
        path: "content/pages",
        format: "json",
        match: {
          include: "contact",
        },
        fields: [
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            name: "contact",
            label: "Contact",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
          {
            name: "visit",
            label: "Visit",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
              { name: "addressTitle", label: "Address Title", type: "string" },
              { name: "hoursTitle", label: "Hours Title", type: "string" },
              { name: "mapCtaLabel", label: "Map CTA Label", type: "string" },
              { name: "mapCtaHref", label: "Map CTA Href", type: "string" },
            ],
          },
          {
            name: "booking",
            label: "Booking",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "intro", label: "Intro", type: "string" },
            ],
          },
        ],
      },
    ],
  },
})
