//impoerted in the schma.js file in the repo.

export default{
    name: 'testimonisls',
    title: 'testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'company',
            title: 'Copany',
            type: 'string',

        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true, 

            }

        },
        {
            name: '',
            title: 'Feedback',
            type: 'string',

        },
    ],
}





