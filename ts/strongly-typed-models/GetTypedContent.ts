// DocSection: strongly_typed_models_retrieve
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
import { ContentItem, DeliveryClient, Elements, SortOrder, TypeResolver } from '@kentico/kontent-delivery';

import { Homepage } from './models/homepage';

// Creates an instance of the Delivery client and registers your model in type resolvers
const deliveryClient = new DeliveryClient({
    projectId: '8d20758c-d74c-4f59-ae04-ee928c0816b7',
    typeResolvers: [
        new TypeResolver('homepage', (rawData) => new Homepage)
    ]
});

var homepage: Homepage;

// Gets a content item from Kentico Kontent by its codename and maps it to its strongly typed model
deliveryClient.item<Homepage>('hello_caas_world')
  .toObservable()
  .subscribe(response => {
    homepage = response.item;
    // Use homepage;
    // console.log(homepage.headline.value);
  });
// EndDocSection