const namedayProject = [
    {
        photo: 'ilona',
        title: 'Name Day Project no.0120 Ilona',
        description: ['Ilona means “torch” (from ancient Greek “helánē/ἑλάνη”) and “beautiful”, “light”, “bright” and “shining” (from ancient Greek “hēlios/ἥλιος” = sun/sunlight/sunshine).'],
    },
    {
        photo: 'bela',
        title: 'Name Day Project no.0121 Běla',
        description: [`Bela means “noble bright” and “noble shining” (from Adalbert) and “white” (from Slavic “bělŭ/бѣлъ”). For girls, Bela means “God is abundance”, “God is my oath” and “God has sworn.`, `
        With shining and white, with the unique day of 21.01.2021, Běla is an unique existence`]
    },
    {
        photo: 'slavomir',
        title: 'Name Day Project no.0122 Slavomír',
        description: [`Slavomír is of Slavic origin, composed of two Proto-Slavic elements: “sláva ‎(сла́ва)”, meaning “glory, fame, renown, honor, repute, reputation” plus “*mir" (*mirъ) mir ‎(мир)”, meaning “peace, calm, tranquility, universe, world”.
        01.22.21 is a palindrome date, filled with peace and glory universe.`]
    },
    {
        photo: 'zdenek',
        title: 'Name Day Project no.0123 Zdeněk',
        description: [`Zdeněk, the name of Slavic origin, composed of two Proto-Slavic elements: “zídati (зи́дати)” (to build, to create, construct) plus “sláva (сла́ва)” (glory, fame, renown, honor, repute, reputation).`, `On this palindrome date 01.23.21 means “created with glory, glory of creation”.`]
    },
    {
        photo: 'milena',
        title: 'Name Day Project no.0124 Milena',
        description: [`Milena is a name of Czech origin meaning "love, warmth, grace".
        The name is filled with power of love.`]
    },
    {
        photo: 'milos',
        title: 'Name Day Project no.0125 Miloš',
        description: [`Miloš means lover of glory.
        Feeling in love.`]
    },
    {
        photo: 'zora',
        title: 'Name Day Project no.0126 Zora',
        description: [`Zora means dawn and is of Slavic origin.`, `Be patient where you sit in the dark. The dawn is coming.`]
    },
    {
        photo: 'ingrid',
        title: 'Name Day Project no.0127 Ingrid',
        description: [`The name Ingrid is a girl's name of Norse origin meaning "fair; Ing is beautiful".`, `Elegance is the only beauty that never fades.`]
    },
    {
        photo: 'otylie',
        title: 'Name Day Project no.0128 Otýlie',
        description: [`Otýlie probably derives from the Germanic (Langobardic) name “Auda”, from the Ancient Germanic “*audaz”, meaning “prosperity, fortune, riches, wealth, heiress” or from "*ōþ- > uodil", meaning “One's ancestral land, homeland, home, territory”.`, `Art Deco is also filled with prosperity, riches atmosphere.`]
    },
    {
        photo: 'zdislava',
        title: 'Name Day Project no.0129 Zdislava',
        description: [`Zdislava is of Slavic origin, composed of two Proto-Slavic elements: “zídati (зи́дати)” (to build, to create, construct) plus “sláva (сла́ва)” (glory, fame, renown, honor, repute, reputation). In turn the name means “created with glory, glory of creation”.`, `Glory of creation is shinnig.`]
    },
    {
        photo: 'robin',
        title: 'Name Day Project no.0130 Robin',
        description: [
            'Robin is is a small insectivorous passerine bird that belongs to the chat subfamily of the Old World flycatcher family.',
            'Červenka robin.'
        ]
    }
].map(nameObj => ({ ...nameObj, tags: ['Adobe Illustrator', 'Font Design', 'Poster Design'], icons: ['ai'], photo: `graphics/nameday/${nameObj.photo}` }))


const christmasProject = [1, 2, 3, 4, 5, 6].map(number => ({
    title: 'Veselé Vánoce',
    description: [`Custom digital portrait drawing from photo
    Christmas is the festivals regardless of race, culture, filled with joy and love.`, `• Image reference by IU (K-pop singer)`, `• Turn hair decorations into Christmas related icons. `],
    photo: `graphics/christmas/christmas-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Falt Art', 'Christmas'],
    icons: ['ai']
}));

const pantoneProject = [1, 2, 3, 4, 5, 6].map(number => ({
    title: 'Pantone Color of the Year 2021',
    description: [
        `Custom digital portrait drawing from photo`,
        `• illuminating & ultimate gray are Pantone 2021 color of the year`,
        `• Image reference by IU (K-pop singer)`
    ],
    photo: `graphics/pantone/pantone-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Falt Art', 'Pantone'],
    icons: ['ai']
}));

const doshaBusinessCardProject = [1, 2, 3].map(number => ({
    title: 'Business card',
    description: [`Dosha.design business card design.`,
        `Dosha means “thank you” in Taiwanese.`,
        `Design is not limited to artistic elements; it is more of an integrated part of life`, `Design with a grateful heart, let the design warm your heart more.`, `Dosha Design.`],
    photo: `graphics/businessCard/card-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Business card design', 'Banner design'],
    icons: ['ai', 'ps'],
}));

const parallelWorld = [0, 1, 2, 3, 4, 5].map(number => ({
    title: '2150’s Parallel World',
    // description: [`•  Inspired by Movie "The Fifth Elements"`,
    //     `Two parallel worlds reflect comic and space world. Stella & Eris, the characters from two worlds. The story began on Eris visited the comic side unexpectedly...`,
    //     `Design is not limited to artistic elements; it is more of an integrated part of life`, `Design with a grateful heart, let the design warm your heart more.`, `Dosha Design.`],
    photo: `graphics/parallel/${number}`,
    // tags: ['Photoshop', 'Fashion stylist'],
    // icons: ['ps'],
}));

const digitalFashion = [1, 2].map(number => ({
    title: '3D Digital Fashion Garment',
    description: [`We are not only using technologies nowadays, but we also live with it.`],
    photo: `graphics/digitalFashion/digitalFashion-${number}`,
    tags: ['Photoshop', 'CLO 3D',],
    icons: ['ps', 'clo3d'],
}));

const liquidIllusion = [{
    title: 'Liquid Illusion',
    photo: 'graphics/other/banner',
    description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
    tags: ['Photoshop', 'Moodboard'],
    icons: ['ps']
}];

const kanata = [];

for (let i = 1; i < 9; i++) {
    kanata.push({
        title: 'Kanata Graduation Project',
        photo: `fashion/kanata/${i}`,
        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
        tags: ['Photoshop', 'Moodboard'],
        icons: ['ps'],
        imageOnly: i === 0,
    });
}

const owl = [];
for (let i = 1; i < 4; i++) {
    owl.push({
        title: 'Owl Project',
        photo: `fashion/owl/${i}`,
        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
        tags: ['Photoshop', 'Moodboard'],
        icons: ['ps'],
    });
}

const goldfish = [];
for (let i = 1; i < 7; i++) {
    goldfish.push({
        title: 'Goldfish Project',
        photo: `fashion/goldfish/${i}`,
        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
        tags: ['Photoshop', 'Moodboard'],
        icons: ['ps'],
    });
}


const textiles = [];
for (let i = 1; i < 5; i++) {
    textiles.push({
        title: 'Textiles project',
        photo: `fashion/textiles/${i}`,
        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
        tags: ['Photoshop', 'Moodboard'],
        icons: ['ps'],
    });
}

const postcard = [];
for (let i = 1; i < 5; i++) {
    postcard.push({
        title: 'Postcards',
        photo: `painting/postcard-${i}`,
        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
        tags: ['Photoshop', 'Moodboard'],
        icons: ['ps'],
    });
}

export const kanataProject = [{
    project: kanata,
    index: 0,
    imageOnly: true,
    fullWidth: true,
}];

export default [
    {
        name: 'Graphics',
        content: [
            [
                {
                    project: christmasProject,
                    index: 0,
                },
                {
                    project: doshaBusinessCardProject,
                    index: 0,
                },
                {
                    project: pantoneProject,
                    index: 0,
                },
                {
                    index: 0,
                    project: [{
                        photo: 'graphics/other/yulia-lee-logo',
                        title: 'Yulia Lee Personal logo',
                        description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
                        tags: [],
                        icons: [],
                    }]
                },
                {
                    project: namedayProject,
                    index: 6,
                },
            ],
            [
                {
                    project: namedayProject,
                    index: 0,
                },
                {
                    project: pantoneProject,
                    index: 2,
                },
                {
                    project: digitalFashion,
                    index: 0,
                },
                {
                    project: namedayProject,
                    index: 1,
                },
                {
                    project: liquidIllusion,
                    index: 0,
                },
                {
                    project: namedayProject,
                    index: 2,
                },
            ],
            [
                {
                    project: christmasProject,
                    index: 2,
                },
                {
                    project: namedayProject,
                    index: 10,
                },
                {
                    project: parallelWorld,
                    index: 0,
                    imageOnly: true,
                },
                {
                    project: christmasProject,
                    index: 4,
                },
                {
                    project: pantoneProject,
                    index: 4
                }
            ],
        ]
    },
    {
        name: 'Painting',
        content: [
            [
                {
                    project: [{
                        title: 'Rabbit Painting',
                        photo: `painting/rabbit`,
                        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
                        tags: ['Photoshop', 'Moodboard'],
                        icons: ['ps'],
                    }],
                    index: 0,
                },
                {
                    project: postcard,
                    index: 1,
                }
            ],
            [
                {
                    project: [{
                        title: 'MoodBoard',
                        photo: `painting/moodboard`,
                        description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
                        tags: ['Photoshop', 'Moodboard'],
                        icons: ['ps'],
                    }],
                    index: 0,
                },
                {
                    project: postcard,
                    index: 3,
                },
            ],
            [{
                project: postcard,
                index: 2,
            },
            {
                project: postcard,
                index: 0,
            }],
        ]
    },
    {
        name: 'Fashion',
        content: [
            [{
                project: goldfish,
                index: 0,
            }],
            [{
                project: owl,
                index: 0,
            }],
            [{
                project: textiles,
                index: 0,
            }],
        ]
    }
]
