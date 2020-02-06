// DocSection: delivery_api_get_item
// Tip: Find more about Swift SDKs at https://docs.kontent.ai/ios
import KenticoKontentDelivery

let client = DeliveryClient.init(projectId: "<YOUR_PROJECT_ID>")

let customQuery = "items/on_roasts?elements=title,summary,post_date,teaser_image,related_articles"
client.getItem(modelType: Article.self, customQuery: customQuery) { (isSuccess, deliveryItem, error) in
     if isSuccess {
        if let article = deliveryItem.item {
            // Use your item here
        }
    } else {
        if let error = error {
            print(error)
        }
    }
// EndDocSection