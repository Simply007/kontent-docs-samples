// DocSection: delivery_api_get_item_preview
// Tip: Find more about Java/JavaRx SDKs at https://docs.kontent.ai/javaandroid
import com.github.kentico.kontent.delivery;

DeliveryClient client = new DeliveryClient("<YOUR_PROJECT_ID>", "<YOUR_PREVIEW_API_KEY>");

ContentItem item = client.getItem("my_article").item;
// EndDocSection