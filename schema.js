//first we import the schema creator
//import schema types from any plugins that might expose them
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";


import testimonials from './testimonials'




export const schemaTypes = [testimonials]

export default createSchema({

    //name of my schema
    name: 'default',
    
  

    type: 'schemaTypes.contact'([
        testimonials

    ]),
})

