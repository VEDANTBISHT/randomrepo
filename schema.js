//first we import the schema creator



//import schema types from any plugins that might expose them
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

//impoerted the testimonials.js file 
import testimonials from './testimonials'


export const schemaTypes = [testimonials]
//then we give our schema to the builder and provide the result to the sanity
export default createSchema({

    //name of my schema
    name: 'default',
    //proceed to concatenate our document type
    //to the ones provided by any plugins that are installed

    type: 'schemaTypes.contact'([
        testimonials

    ]),
})
