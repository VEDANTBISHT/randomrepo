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
                hotspot: true, //hotspot means the person can choose to crop the image while uploading//

            }

        },
        {
            name: '',
            title: 'Feedback',
            type: 'string',

        },
    ],
}
