// DocSection: structure_in_rte_retrieve_article
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
import { ContentItem, Elements, TypeResolver } from '@kentico/kontent-delivery';

deliveryClient.item<Article>('my_article')
  .toObservable()
  .subscribe(response => {
    console.log(response.item.body.resolveHtml());
  });
// EndDocSection
