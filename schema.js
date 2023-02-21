//first we import the schema creator
//import schema types from any plugins that might expose them
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";


import testimonials from './testimonials'




export const schemaTypes = [testimonials]

export default createSchema({

    //name of my schema
    name: 'default',
    
  //then we give our schema to the builder and provide the result to the sanity

    type: 'schemaTypes.contact'([
        testimonials

    ]),
})

